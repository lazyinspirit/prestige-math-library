---
id: thm-naturality-of-the-long-exact-sequence-of-a-pair
kind: theorem
title: "Naturality of the pair long exact sequence"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-long-exact-sequence-of-a-pair-in-singular-homology, prop-relative-homology-is-functorial-for-maps-of-pairs, cor-the-long-exact-homology-sequence-is-natural]
proof_strategy: direct
verification:
  audited: 2026-09-06
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Allen Hatcher, Algebraic Topology, §2.1"
      url: "https://pi.math.cornell.edu/~hatcher/AT/ATch2.pdf"
pipeline_run: frontier-31a
---

## Statement

A map of pairs $f:(X,A)\to(Y,B)$ induces a commuting morphism from the long
exact sequence of $(X,A)$ to that of $(Y,B)$, including the connecting maps.

## Facts & Assumptions

**Given:** A map of pairs $f:(X,A)\to(Y,B)$.

## Proof

**Proof technique:** direct.

1.1 The maps on $A$, $X$, and quotient chains give a commuting morphism of the short exact sequences used for the two pair sequences. [given, construct]

2.1 Naturality of the homological long exact sequence makes every resulting square commute. In particular, chainwise $f_\#(\partial c)=\partial f_\#(c)$ gives commutation at the connector. [step 1.1, algebra] ∎

## Remarks

For a fixed coefficient group $G$, the following exact-row fragment displays
all three types of naturality square, including the degree-lowering connector.
Here $i_*$ is induced by subspace inclusion, $q_*$ by the quotient of chain
complexes, $f_A=f|_A:A\to B$, and $f_{\mathrm{rel},*}$ is the relative homology
map induced by $[c]\mapsto[f_\#c]$.

```tikzcd
\begin{tikzcd}[font=\Large, labels={font=\large}, column sep=large, row sep=large]
H_n(A;G) \arrow[r, "i_*"] \arrow[d, "(f_A)_*"'] &
H_n(X;G) \arrow[r, "q_*"] \arrow[d, "f_*"] &
H_n(X,A;G) \arrow[r, "\delta_{X,A}"] \arrow[d, "f_{\mathrm{rel},*}"] &
H_{n-1}(A;G) \arrow[d, "(f_A)_*"] \\
H_n(B;G) \arrow[r, "i_*"'] &
H_n(Y;G) \arrow[r, "q_*"'] &
H_n(Y,B;G) \arrow[r, "\delta_{Y,B}"'] &
H_{n-1}(B;G)
\end{tikzcd}
```

The right square says $(f_A)_*\delta_{X,A}=\delta_{Y,B}f_{\mathrm{rel},*}$.
For a relative cycle represented by $c$, the connector is represented by
$\partial c$ in the subspace, and $f_\#\partial c=\partial f_\#c$ gives this
identity with no extra sign. These are relative chain quotients, not a claim
identifying relative homology with the homology of a quotient space. The proof
above is independent of the diagram.
