# Exact electrovac solution worker

`proofs.md` contains X0–X9/X4a; `inventory.json` has58 proposed mathematical/physical contracts on five paired pages. `supplier-map.json` and `source-provenance.json` record exact read extents/statuses/hashes. These are research carriers, not production or independent acceptance.

The actual successful exact tensor check used CPython3.14.4 from the ignored local venv, SymPy1.14.0 and mpmath1.3.0. System python3 lacks SymPy. From repository root:

```bash
uv venv physics/research/extended-frameworks-2026-10-03/einstein-maxwell-models/workers/solutions/.venv
uv pip install --python physics/research/extended-frameworks-2026-10-03/einstein-maxwell-models/workers/solutions/.venv/bin/python -r physics/research/extended-frameworks-2026-10-03/einstein-maxwell-models/workers/solutions/requirements.txt
physics/research/extended-frameworks-2026-10-03/einstein-maxwell-models/workers/solutions/.venv/bin/python physics/research/extended-frameworks-2026-10-03/einstein-maxwell-models/workers/solutions/check-kn.py
python3 physics/research/extended-frameworks-2026-10-03/einstein-maxwell-models/workers/solutions/build-records.py
```

The first two commands recreate the environment if needed; do not overwrite a running environment. The current successful absolute interpreter is `/home/lazyinspirit/Projects/prestige-math-library/physics/research/extended-frameworks-2026-10-03/einstein-maxwell-models/workers/solutions/.venv/bin/python`. The script is a finite exact rational-function calculation, without numerical sampling, and writes `kn-check.json` beside the invoked script path. A copied script or invoked symlink path can therefore write its receipt to a separate canonical validation directory. Pin files capture dependencies; mathematical validity of the full computation still needs independent audit.

No existing item/import/engine/source scaffold was edited. Raw arXiv source and the venv remain locally retained and Git-ignored. Cross-worker supplier hashes should be refreshed after all worker files stabilize. X6 uses shared `lem-emg-conformastatic-curvature` at matter-limits ML07; it does not duplicate that canonical home.
