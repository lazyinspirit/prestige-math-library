"""Exact finite-cut check of the proved block-scalar conjugation identity.

The historical experiment is reused unchanged; no new all-cut result is claimed.
"""
import contextlib
import io
import json
import pathlib

HERE = pathlib.Path(__file__).resolve().parent
HISTORICAL = HERE.parents[1] / "quasi-r/renewed-tensor-escape/exact-finite-cut-experiment.py"
namespace = {}
exec(HISTORICAL.read_text().split("for J in map(int,sys.argv[1:]):")[0], namespace)
Chain = namespace["Chain"]
cancel = namespace["cancel"]


class AmplitudeChain(Chain):
    def __init__(self, amplitudes):
        super().__init__(len(amplitudes))
        self.amplitudes = amplitudes

    def cv(self, j, k, sgn=1):
        column = super().cv(j, k, sgn)
        if len(column) == 2:
            jj, kk, coefficient = column[1]
            column[1] = (jj, kk, coefficient * self.amplitudes[j])
        return column


rows = []
for amplitudes in ((2,), (2, -3)):
    h = [1]
    for amplitude in amplitudes:
        h.append(h[-1] * amplitude)
    with contextlib.redirect_stdout(io.StringIO()):
        standard = Chain(len(amplitudes)).solve()
        changed = AmplitudeChain(amplitudes).solve()
    coordinates = set(standard) | set(changed)
    defects = []
    for coordinate in coordinates:
        j, k, l, m = coordinate
        if cancel(changed.get(coordinate, 0) - h[j] * h[l] * standard.get(coordinate, 0)) != 0:
            defects.append(coordinate)
    assert not defects, defects
    endpoint = (len(amplitudes), 0, len(amplitudes), len(amplitudes) * (len(amplitudes) + 3))
    assert cancel(changed[endpoint] - h[-1] ** 2 * standard[endpoint]) == 0
    rows.append({"cut": len(amplitudes), "amplitudes": amplitudes,
                 "checked_coordinates": len(coordinates), "defects": defects,
                 "endpoint_multiplier": h[-1] ** 2})
print(json.dumps({"checks": rows, "all_cut_escape_proved": False}, indent=2))
