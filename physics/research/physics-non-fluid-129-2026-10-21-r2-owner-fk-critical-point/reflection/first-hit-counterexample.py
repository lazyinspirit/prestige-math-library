"""Finite diagnostic for the first-hit/last-return assertion; no library writes."""
import json
import math

N = 24
g1 = [(u, 10 + u % 2) for u in range(N + 1)]
g2 = [(u, u % 2) for u in range(24, 27)]
g2 += [(u, u - 26) for u in range(27, 35)]
g2 += [(34 + v % 2, v) for v in range(9, 23)]
g2 += [(u, 22 - u % 2) for u in range(33, 24, -1)]
g2 += [(25 + j, 21 - j) for j in range(1, 8)]
g2 += [(32 + v % 2, v) for v in range(13, 7, -1)]
g2 += [(u, 8 - u % 2) for u in range(31, 27, -1)]
g2 += [(28 - v % 2, v) for v in range(9, 13)]
g2 += [(27, 13), (26, 12), (25, 13), (24, 14)]
g2 += [(24 - v % 2, v) for v in range(15, 25)]
h2 = [(u, 24 - u % 2) for u in range(12, 37)]

def edge(a, b):
    return tuple(sorted((a, b)))

for path in (g1, g2, h2):
    assert len(path) == len(set(path))
    assert all((u - v) % 2 == 0 for u, v in path)
    assert all(abs(a[0] - b[0]) == abs(a[1] - b[1]) == 1
               for a, b in zip(path, path[1:]))
assert not set(g1).intersection(g2)
assert all(12 <= u <= 36 and 0 <= v <= 24 for u, v in g2)
open_edges = {edge(a, b) for path in (g1, g2, h2)
              for a, b in zip(path, path[1:])}
vertices = [(u, v) for u in range(37) for v in range(25)
            if (u - v) % 2 == 0]
adj = {a: [b for b in vertices
           if abs(a[0] - b[0]) == abs(a[1] - b[1]) == 1]
       for a in vertices}

def dfs(kind):
    allowed = (lambda a: a[0] <= N) if kind == 1 else (lambda a: a[0] >= N // 2)
    source = [a for a in vertices if allowed(a) and
              (a[0] == 0 if kind == 1 else a[1] == 0 and a[0] <= N)]
    source.sort(key=lambda a: -a[1] if kind == 1 else -a[0])
    root = (-1, 0) if kind == 1 else (N, -1)
    visited = set()

    def visit(a, parent, branch):
        visited.add(a)
        if a[0] == N if kind == 1 else a[1] == N:
            return branch
        angle = math.atan2(parent[1] - a[1], parent[0] - a[0])
        sign = 1 if kind == 1 else -1
        neighbours = sorted((b for b in adj[a] if allowed(b)), key=lambda b:
                            (sign * (angle - math.atan2(b[1] - a[1], b[0] - a[0])))
                            % (2 * math.pi))
        for b in neighbours:
            if b not in visited and edge(a, b) in open_edges:
                result = visit(b, a, branch + [b])
                if result:
                    return result
        return None

    for a in source:
        if a not in visited:
            result = visit(a, root, [a])
            if result:
                return result
    return None

assert dfs(1) == g1
assert dfs(2) == g2
reflected = [(49 - u, v) for u, v in g1[::-1]]
hits = [(i, j, ((a[0] + b[0]) / 2, (a[1] + b[1]) / 2))
        for i, (a, b) in enumerate(zip(reflected, reflected[1:]))
        for j, (c, d) in enumerate(zip(g2, g2[1:]))
        if (a[0] + b[0], a[1] + b[1]) == (c[0] + d[0], c[1] + d[1])]
i, j, z = min(hits)
last_return = [a for a in g2[:j + 1] if a[0] == N + 1][-1]
assert z == (27.5, 10.5)
assert g2[j] == (28, 10)
assert last_return == (25, 21)
assert last_return[1] > g1[-1][1]
print(json.dumps({
    "status": "counterexample-to-strict-height-order",
    "normalization": "closed rotated N=24; reflection u=24.5",
    "g1": g1, "g2": g2, "horizontal_R2_path": h2,
    "open_edges": sorted(open_edges),
    "DFS_outputs_exactly_paths": True,
    "preparatory_event": True,
    "all_intersections_reflected_g1_order": hits,
    "first_hit": z, "y": g2[j], "last_return": last_return,
    "gamma1_initial_height": g1[-1][1],
    "torus_embedding": "m=64; all unspecified torus edges closed",
}))

# A literal half-open version, with side count divisible by four.
# R1=[0,28)^2; R2=[14,42)x[0,28); reflection u=27.5.
half_g1 = [(u, 10 + u) for u in range(3)] + [(u + 3, v + 3) for u, v in g1]
half_g2 = [(u, u - 24) for u in range(24, 27)] + [(u + 3, v + 3) for u, v in g2]
half_h2 = [(u, 26 + u % 2) for u in range(14, 42)]
for path in (half_g1, half_g2, half_h2):
    assert len(path) == len(set(path))
    assert all((u - v) % 2 == 0 for u, v in path)
    assert all(abs(a[0] - b[0]) == abs(a[1] - b[1]) == 1
               for a, b in zip(path, path[1:]))
assert not set(half_g1).intersection(half_g2)
assert all(14 <= u < 42 and 0 <= v < 28 for u, v in half_g2)
half_a = [(55 - u, v) for u, v in half_g1[::-1]]
half_hits = [(i, j, ((a[0] + b[0]) / 2, (a[1] + b[1]) / 2))
             for i, (a, b) in enumerate(zip(half_a, half_a[1:]))
             for j, (c, d) in enumerate(zip(half_g2, half_g2[1:]))
             if (a[0] + b[0], a[1] + b[1]) == (c[0] + d[0], c[1] + d[1])]
hi, hj, hz = min(half_hits)
half_t = [a for a in half_g2[:hj + 1] if a[0] == 28][-1]
assert hz == (30.5, 13.5)
assert half_t == (28, 24)
assert half_g1[-1] == (27, 13)
N = 27  # extreme coordinate layer, equivalent to half-open side count 28
vertices = [(u, v) for u in range(42) for v in range(28) if (u - v) % 2 == 0]
adj = {a: [b for b in vertices
           if abs(a[0] - b[0]) == abs(a[1] - b[1]) == 1] for a in vertices}
open_edges = {edge(a, b) for path in (half_g1, half_g2, half_h2)
              for a, b in zip(path, path[1:])}
assert dfs(1) == half_g1
assert dfs(2) == half_g2
print(json.dumps({
    "status": "counterexample-to-strict-height-order-half-open",
    "side_count": 28, "R1": "[0,28)^2", "R2": "[14,42)x[0,28)",
    "reflection": "u=27.5", "g1": half_g1, "g2": half_g2,
    "horizontal_R2_path": half_h2,
    "first_hit": hz, "y": half_g2[hj], "last_return": half_t,
    "gamma1_initial_height": 13,
    "DFS_outputs_exactly_paths": True,
    "all_intersections_reflected_g1_order": half_hits,
}))
