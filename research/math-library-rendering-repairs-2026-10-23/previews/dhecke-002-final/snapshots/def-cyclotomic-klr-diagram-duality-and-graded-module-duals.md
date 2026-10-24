---
id: def-cyclotomic-klr-diagram-duality-and-graded-module-duals
kind: definition
title: "Cyclotomic diagram duality and graded module duals"
status: published
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 17
deps: [def-cyclotomic-klr-quotient-at-a-dominant-weight,
       def-finitely-generated-graded-projective-module,
       def-graded-ring-module-bimodule-and-internal-shift,
       def-the-klr-cartan-pairing,
       lem-cyclotomic-projective-covers-and-dualities-descend-through-the-quotient,
       thm-cyclotomic-klr-algebras-are-finite-dimensional-graded-symmetric]
justified_by: []
aliases: []
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-11
sources:
  references:
    - title: "Seok-Jin Kang and Masaki Kashiwara, Categorification of Highest Weight Modules via Khovanov-Lauda-Rouquier Algebras, arXiv:1102.4677v4"
      url: "https://arxiv.org/pdf/1102.4677v4"
      locator: "Section 6: the anti-involution fixing the generators, the self-dual normalized representatives and the perfect pairing."
    - title: "Ben Webster, Knot Invariants and Higher Representation Theory I, arXiv:1001.2020v9"
      url: "https://arxiv.org/pdf/1001.2020v9"
      locator: "Section 1.3, Remark 1.9 and Section 2: the self-dual normalization and the degree shift of the Frobenius trace."
---

## Definition

Let $B=R^\Lambda(\beta)$ be a standard graded cyclotomic block
([[def-cyclotomic-klr-quotient-at-a-dominant-weight]]) and let $\psi$ be the
descended anti-involution fixing $e(\nu),x_a,\tau_a$; it is well defined
because its individual first-strand polynomial generators are fixed, and it is
the generator-fixing member of the two $\psi$'s in play
([[def-the-klr-cartan-pairing]]). Write shifts internally as $(M\{r\})_m=
M_{m-r}$ ([[def-graded-ring-module-bimodule-and-internal-shift]]).

**Vector duality.** For a finite graded $B$-module $M$ define
$$D_\psi M:=\operatorname{HOM}_k(M,k)^\psi,$$
the finite $k$-linear dual with $B$-action $(af)(m)=f(\psi(a)m)$. It is a
finite graded $B$-module, reverses internal shifts, and $D_\psi^2M\cong M$.

**Projective Hom duality.** For a finite graded PROJECTIVE $P$ define instead
$$P^\#:=\operatorname{HOM}_B(P,B)^\psi,$$
with the $\psi$-twisted $B$-action. This is again a finite graded projective,
it reverses internal shifts, and $(P^\#)^\#\cong P$ on finite graded
projectives ([[def-finitely-generated-graded-projective-module]]).

**They are different dualities.** Hom duality is not applied to a nonprojective
simple to produce its cover; $D_\psi$ and $\#$ differ already in rank one,
where $B=k[x]/x^\lambda$ has $B^\#=B$ while $D_\psi B\cong B\{-2d_i
(\lambda-1)\}$.

**Normalizations used in the based statements.** By
[[lem-cyclotomic-projective-covers-and-dualities-descend-through-the-quotient]],
each simple shift orbit has a unique $D_\psi$-self-dual representative $S$, and
its unique normalized cover $P$ with $\operatorname{Hom}^0(P,S)=k$ is
$\#$-self-dual; these normalized representatives are the ones used in the based
statements below. The symmetric theorem
[[thm-cyclotomic-klr-algebras-are-finite-dimensional-graded-symmetric]]
additionally gives $D_\psi P\cong P^\#\{-2\operatorname{def}_\Lambda(\beta)\}$;
it does not change the canonical projective normalization. No self-dual shift
is asserted for every indecomposable finite module, and no choice is used.

## Remarks

The two rows show object assignments, not module homomorphisms. The top row
is defined on all finite graded $B$-modules; the bottom row is restricted to
finite graded projectives. Both use the generator-fixing anti-involution
$\psi$ specified above, without an additional grading sign.

```tikz
\begin{tikzpicture}
\node at (4.5,0.85) {Finite graded modules};
\node (M) at (0,0) {$M$};
\node (DM) at (4,0) {$D_\psi M=\mathrm{HOM}_k(M,k)^\psi$};
\node (DDM) at (9,0) {$D_\psi^2M\cong M$};
\draw[|->] (M) -- node[above] {$D_\psi$} (DM);
\draw[|->] (DM) -- node[above] {$D_\psi$} (DDM);
\node at (4.5,-1.35) {Finite graded projectives};
\node (P) at (0,-2.2) {$P$};
\node (DP) at (4,-2.2) {$P^\#=\mathrm{HOM}_B(P,B)^\psi$};
\node (DDP) at (9,-2.2) {$(P^\#)^\#\cong P$};
\draw[|->] (P) -- node[above] {$\#$} (DP);
\draw[|->] (DP) -- node[above] {$\#$} (DDP);
\end{tikzpicture}
```

For the internal shift convention in the definition, the shift reversal in
each row means
$$D_\psi(M\{r\})\cong(D_\psi M)\{-r\},\qquad (P\{r\})^\#\cong P^\#\{-r\}.$$
The two rows do not identify the dualities: even for projectives their
comparison includes the Frobenius shift stated above. The illustration is
expository; all defining claims and their cited justifications remain
independent of it.
