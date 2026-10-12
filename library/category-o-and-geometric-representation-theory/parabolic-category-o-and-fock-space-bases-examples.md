---
page: parabolic-category-o-and-fock-space-bases-examples
title: "Parabolic Category O and Fock-Space Bases — Examples"
status: draft
requires: [parabolic-category-o-and-fock-space-bases]
items: []
examples: [ex-four-fock-bases-in-a-small-two-factor-tensor-space,
           cex-canonical-and-quasi-canonical-bases-need-not-coincide,
           ex-residue-translation-on-small-parabolic-o-standards,
           ex-opposite-parabolic-ringel-duality-on-a-finite-ideal]
---

**Objective.** This companion page works the smallest nontrivial instances of
the type-A parabolic/Fock dictionary of
[[parabolic-category-o-and-fock-space-bases]]: the four distinguished Fock
bases in a four-dimensional tensor square, the fact that the canonical and
quasi-canonical families genuinely differ, the residue translation action on
the four standard monomials, and the opposite-parabolic Ringel dictionary on a
two-label finite ideal.

**Four bases in a small tensor space.**
[[ex-four-fock-bases-in-a-small-two-factor-tensor-space]] takes $I=\{0\}$,
$\Lambda=2\Lambda_0$ and $F=V\otimes V$, computes the ordinary bar matrix
$B_\psi=\begin{pmatrix}1&s^{-1}-s\\0&1\end{pmatrix}$ in the mixed order, writes
the vectors $L_{10},T_{10},P_{01},P_{10}$ and the reverse vector
$\widetilde L_{01}$ explicitly, verifies both delta pairings
$\overline P^{t}SL=I$, $\widetilde L^{t}ST=I$ with $S=B_\psi^{-1}$, and checks
the highest-module rescaling $B_8(T_{10},T_{10})=1+t^2$,
$D_{01}=T_{10}/(s+s^{-1})$, $G_{\mathrm{up}}=sD_{01}$.

**The families do not coincide.**
[[cex-canonical-and-quasi-canonical-bases-need-not-coincide]] uses the same
model to refute the claim that the canonical and quasi-canonical families agree
on every label: $P_{10}=M_{10}$ while $T_{10}=M_{10}+s^{-1}M_{01}$, and the
coincidence $P_{01}=sT_{10}$ happens only at the rectified highest label
$01^{\uparrow}=10$ with power $a=1$, exactly as the global-basis comparison
predicts.

**Residue translations on small standards.**
[[ex-residue-translation-on-small-parabolic-o-standards]] computes the residue
$0$ functors on all four monomials, obtains the $\mathfrak{sl}_2$-Cartan
commutator $\operatorname{diag}(2,0,0,-2)$, exhibits the source crystal
component $00\to01\to11$ with isolated $10$, and shows how the categorical
translation of a simple has a unique head and socle even when its class is a
sum of two crystal labels.

**Ringel duality on a finite ideal.**
[[ex-opposite-parabolic-ringel-duality-on-a-finite-ideal]] works in
$\mathfrak{gl}_3$ with Levi $(2,1)$ and the distinct-entry regular block,
computes the target matrix
$D=\left(\begin{smallmatrix}1&0&0\\1&1&0\\0&1&1\end{smallmatrix}\right)$ and the
opposite matrix
$N=\left(\begin{smallmatrix}1&1&0\\0&1&1\\0&0&1\end{smallmatrix}\right)$, checks
the semiregular label shift and $F\bar M(A)=\nabla(A)$, $F\bar P(A)=T(A)$, and
shows that the proper target ideal $\{A_0,A_1\}$ has Ringel dual the opposite
highest-weight Serre quotient with standard/simple rows
$\left(\begin{smallmatrix}1&1\\0&1\end{smallmatrix}\right)$, not the unchanged
opposite down-set subcategory.
