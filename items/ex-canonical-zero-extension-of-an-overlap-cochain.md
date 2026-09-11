---
id: "ex-canonical-zero-extension-of-an-overlap-cochain"
kind: "example"
title: "Canonical zero extension of an overlap cochain"
deps: ["lem-canonical-extension-by-zero-of-a-singular-cochain-on-a-simplex-basis"]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: "DG-16 design; Hatcher/Park control"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT.pdf"
      locator: "DG-16 B inventory; explicit verification or unresolved witness in proof_plan"
status: published
origin: "pipeline"
proof_strategy: "direct"
---

## Example

Take $U=(-2,1)$ and $V=(-1,2)$ in $X=(-2,2)$, with overlap vertex $p=0$ and $U$-only vertex $q=-3/2$. The overlap zero-cochain $\eta$ with value two at $p$ and zero at every other vertex has canonical extension $E_U\eta$ satisfying $(E_U\eta)(3[p]-[q])=6$.

## Facts & Assumptions

**Given:** The intervals, vertices and basis values above, extended linearly on finite overlap chains.

[F1] Canonical zero extension retains overlap basis values and vanishes on every other simplex in $U$ ([[lem-canonical-extension-by-zero-of-a-singular-cochain-on-a-simplex-basis]]).

## Proof

1.1 We have $U\cap V=(-1,1)$, so $p$ lies in the overlap and $q$ lies in $U\setminus V$. By [F1], $(E_U\eta)([p])=2$ and $(E_U\eta)([q])=0$. Linearity therefore gives $(E_U\eta)(3[p]-[q])=3\cdot2-0=6$. [given, F1, algebra]

2.1 Restriction back to the overlap equals $\eta$ on every vertex: it has value two at $p$ and zero elsewhere, hence agrees on every finite chain. More generally, for any specified overlap cochain and finite chain $\sum a_s[s]$ in $U$, the value is exactly $\sum_{s\text{ in the overlap}}a_s\eta(s)$. An empty retained index set gives zero and one retained term gives its coefficient times its value. This is a degreewise extension, not an assertion that extension commutes with coboundary. No basis or representatives are chosen. [F1, step 1.1, algebra] ∎
