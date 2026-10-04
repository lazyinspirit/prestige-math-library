---
page: coherent-duality-on-projective-cohen-macaulay-schemes
title: "Coherent Duality on Projective Cohen-Macaulay Schemes"
status: published
requires: [quasi-coherent-and-coherent-sheaves-and-vector-bundles, proj-projective-schemes-twisting-sheaves-and-ampleness, sheaf-cohomology-cech-cohomology-and-comparison, cohomology-of-quasi-coherent-sheaves-on-affine-and-projective-schemes, derived-categories, ext-and-balanced-resolutions, smooth-projective-serre-duality-and-flag-variety-line-bundles]
items:
  - def-dualizing-complex-on-projective-cm-scheme
  - lem-finite-closed-immersion-derived-coinduction-adjunction
  - lem-regular-quotient-dualizing-complex-and-biduality
  - lem-cm-quotient-of-regular-local-ring-ext-concentration
  - lem-projective-embedding-dualizing-complex-existence
  - lem-projective-space-derived-coherent-duality
  - lem-projective-dualizing-complex-trace-and-embedding-independence
  - lem-projective-pure-cm-dualizing-complex-concentration
  - thm-serre-duality-for-coherent-sheaves-on-projective-cm-scheme
  - rem-smooth-projective-locally-free-duality-is-the-ag-lie-special-case
  - rem-curve-residue-duality-is-the-dimension-one-case
examples: []
---

This page develops duality for coherent sheaves on a projective scheme $X$ over
a field $k$ that is Cohen–Macaulay and pure of dimension $d$, with no
smoothness assumption: $X$ may be singular, and the dualizing sheaf
$\omega_X$ need not be invertible. The central object is the normalized
dualizing complex of [[def-dualizing-complex-on-projective-cm-scheme]]. On a
Noetherian scheme a dualizing complex is a bounded complex with coherent
cohomology whose local models have finite injective dimension and satisfy the
homothety isomorphism in the derived category; over a field, a normalization
adds a trace to $k$ whose evaluation map represents the functor
$K\mapsto\operatorname{Hom}_k(H^{-r}(X,K),k)$ on bounded coherent complexes.
For a pure $d$-dimensional Cohen–Macaulay scheme the normalized dualizing sheaf
is $\omega_X=H^{-d}(D_X)$, and the shift convention
$H^a(K[b])=H^{a+b}(K)$ is fixed once and for all.

The construction is by a projective embedding rather than by a smooth cycle
class. The finite closed-immersion adjunction
[[lem-finite-closed-immersion-derived-coinduction-adjunction]] supplies the
right adjoint $i^!$ of pushforward for a closed immersion, together with the
counit used later as a trace, and it also identifies the cohomology of a
pushed-forward complex with the cohomology on the subscheme. On a regular
affine chart, [[lem-regular-quotient-dualizing-complex-and-biduality]] shows
that the coinduction of an invertible module along a finite quotient is again a
dualizing complex, with coherent biduality for finite complexes. Reading this
in the ambient projective space gives
[[lem-projective-embedding-dualizing-complex-existence]]: for every closed
embedding $i:X\hookrightarrow\mathbb P^N_k$, the complex
$D_i=i^!(\omega_{\mathbb P^N}[N])$ is dualizing, and evaluation realizes
coherent biduality. Composing the counit with the Laurent residue trace of
projective space gives the trace of
[[lem-projective-dualizing-complex-trace-and-embedding-independence]]: it is
the pairing $t_i(\alpha\circ\beta)$, and Yoneda uniqueness identifies the
complexes and traces of two different embeddings, so the normalized object
$D_X$ and its trace $t_X$ are well defined. The projective-space input is
[[lem-projective-space-derived-coherent-duality]], whose proof compares the
evaluation map with the twisting and residue pairings on finite locally free
resolutions and then extends along the long exact sequences of a
distinguished triangle.

Cohen–Macaulayness enters through
[[lem-cm-quotient-of-regular-local-ring-ext-concentration]]: for a
Cohen–Macaulay quotient $B$ of dimension $d$ of a polynomial-chart local ring
$R$ at a closed point, with $\dim R=N$, the ambient Ext groups
$\operatorname{Ext}_R^q(B,R)$ vanish except in degree $N-d$. Coherence of the
ambient Ext sheaves and detection of their support at closed points then give
[[lem-projective-pure-cm-dualizing-complex-concentration]]:
$D_X\cong\omega_X[d]$, and for an embedding into $\mathbb P^N_k$ the
normalized dualizing sheaf is the ambient sheaf Ext
$i_*\omega_X=\mathcal Ext^{N-d}_{\mathbb P^N}(i_*\mathcal O_X,\omega_{\mathbb P^N})$,
a coherent Cohen–Macaulay sheaf supported on all of $X$.

The main result is
[[thm-serre-duality-for-coherent-sheaves-on-projective-cm-scheme]]. For every
coherent sheaf $F$ the composition of Yoneda contraction with the trace is a
perfect pairing
$\operatorname{Ext}_X^{d-i}(F,\omega_X)\times H^i(X,F)\to k$, equivalently
$\operatorname{Ext}_X^{d-i}(F,\omega_X)\cong H^i(X,F)^\vee$; the same
statement holds in complex form,
$R\operatorname{Hom}_X(K,D_X)\cong R\operatorname{Hom}_k(R\Gamma(X,K),k)$,
and coherent derived biduality holds although $F$ need not be locally free or
perfect on the singular scheme. Negative Ext and negative sheaf cohomology are
zero, and coherent cohomology is finite-dimensional.

Two comparisons place the theorem against existing results rather than
reproving them. For smooth projective $X$,
[[rem-smooth-projective-locally-free-duality-is-the-ag-lie-special-case]]
identifies the normalized $\omega_X$ with the canonical line bundle through
the regular-immersion Koszul computation and recovers the locally free pairing
of the published smooth-projective theorem, including its trace, with the same
embedding and Laurent normalization. In dimension one,
[[rem-curve-residue-duality-is-the-dimension-one-case]] specializes to
$H^1(C,F)^\vee=\operatorname{Hom}_C(F,\omega_C)$ and
$H^0(C,F)^\vee=\operatorname{Ext}_C^1(F,\omega_C)$ for coherent $F$ on a
singular or smooth projective Cohen–Macaulay curve, and checks that the trace
normalization agrees with the local residue convention $\operatorname{res}(dz/z)=1$
at rational points.

The whole page assumes the Axiom of Choice, inherited from the supplied
injective resolutions, global-dimension and derived-composition results used
in the proofs; no step removes those hypotheses. The examples companion
[[coherent-duality-on-projective-cohen-macaulay-schemes-examples]] carries the
concrete computations.
