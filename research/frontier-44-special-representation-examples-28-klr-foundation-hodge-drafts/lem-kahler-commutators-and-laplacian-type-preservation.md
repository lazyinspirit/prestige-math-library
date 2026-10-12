---
id: "lem-kahler-commutators-and-laplacian-type-preservation"
kind: "lemma"
title: "Kähler commutators and preservation of harmonic types"
status: "draft"
origin: "session"
deps: ["def-compact-kahler-manifold-and-hodge-polarization-conventions", "lem-hermitian-exterior-lefschetz-decomposition-and-weil-star-identity", "thm-d-dbar-decomposition-and-identities", "thm-general-stokes-theorem", "thm-holomorphic-inverse-function-theorem-several-variables"]
provenance: {"statement": "literature-derived", "proof": "ai-altered"}
sources: {"references": [{"title": "Christian Schnell, Complex Manifolds, MAT 545, Fall 2024, classes 16–18", "url": "https://www.math.stonybrook.edu/~cschnell/mat545/class18.pdf"}, {"title": "Jean-Pierre Demailly, Complex Analytic and Differential Geometry, VI §§5–6, pp300–306", "url": "https://www-fourier.univ-grenoble-alpes.fr/~demailly/manuscripts/agbook.pdf"}]}
proof_strategy: direct
---

## Statement

On a Kähler manifold, formal adjoints satisfy $[\Lambda,\partial]=i\bar\partial^*$, $[\Lambda,\bar\partial]=-i\partial^*$, $[\bar\partial^*,L]=i\partial$, $[\partial^*,L]=-i\bar\partial$. One has $\Delta_d=2\Delta_\partial=2\Delta_{\bar\partial}$, the mixed anticommutators $\partial\bar\partial^*+\bar\partial^*\partial$ and $\bar\partial\partial^*+\partial^*\bar\partial$ vanish, and $\Delta_d$ commutes with $L,\Lambda,\partial,\bar\partial,*$ and preserves each $(p,q)$ type.

## Facts & Assumptions

**Given:** The data and hypotheses of the Statement.

[F1] The type differential identities come from [[thm-d-dbar-decomposition-and-identities]]. Formal adjoints are obtained by [[thm-general-stokes-theorem]]; the pointwise star and Lefschetz conventions are [[lem-hermitian-exterior-lefschetz-decomposition-and-weil-star-identity]].

## Proof

1.1 At any point choose holomorphic coordinates with metric matrix $h_{j\bar l}(0)=\delta_{jl}$. Closedness of $\omega$ gives $\partial_a h_{b\bar c}(0)=\partial_bh_{a\bar c}(0)$. Make the holomorphic quadratic coordinate change whose coefficients are these symmetric first derivatives (with the sign chosen to subtract the linear Taylor terms in the transformation formula $h'=({\partial z}/{\partial w})h\overline{({\partial z}/{\partial w})}$). Explicitly, for original $h(z)=I+\sum A_a z_a+\sum A_a^*\bar z_a+O(|z|^2)$ take $z_b=w_b-\frac12\sum_{a,c}\partial_a h_{c\bar b}(0)w_aw_c$, after identifying indices by $h(0)$; the displayed covariant metric transformation gives $h'(w)=I+O(|w|^2)$. The holomorphic inverse exists near zero because the Jacobian there is $I$. Thus the metric, inverse metric and volume density have vanishing first derivatives at the point. Formal integration by parts therefore gives the flat adjoint formulas there. [given, algebra, construct]

2.1 Write $a_j=dz_j\wedge$, $b_j=d\bar z_j\wedge$ and their contractions $a_j^*,b_j^*$. Normalize the unitary coframe so that $L=i\sum a_jb_j$, $\Lambda=-i\sum b_j^*a_j^*$; wedge and contraction satisfy $a_j^*a_l+a_la_j^*=\delta_{jl}$, and the corresponding barred relation, with mixed anticommutators zero. At the normal point $\partial=\sum a_j\partial_{z_j}$, $\bar\partial=\sum b_j\partial_{\bar z_j}$, $\partial^*=-\sum a_j^*\partial_{\bar z_j}$, $\bar\partial^*=-\sum b_j^*\partial_{z_j}$. Substituting the anticommutators gives $[\Lambda,a_j]=-ib_j^*$ and $[\Lambda,b_j]=ia_j^*$, hence the first two stated identities. Their adjoints give the other two. Since all operators are first order or order zero and only first metric derivatives occur, equality at every normal point proves the global identities. [step 1.1, given, algebra]

3.1 Use the graded bracket, for which the bracket of two odd operators is their anticommutator. Put $A=\partial$, $B=\bar\partial$. Since $A^2=B^2=AB+BA=0$, substitution of $B^*=-i[\Lambda,A]$ gives $[A,B^*]=-i[A,[\Lambda,A]]=0$ by expansion: the two middle $A\Lambda A$ terms cancel and the remaining terms contain $A^2$. Its adjoint gives $[B,A^*]=0$. Graded Jacobi, or direct expansion using $AB=-BA$, gives $[B,[\Lambda,A]]=[A,[B,\Lambda]]$; therefore $[B,B^*]=-i[A,[B,\Lambda]]=[A,A^*]$, using $[B,\Lambda]=iA^*$. Expanding $(A+B)(A^*+B^*)+(A^*+B^*)(A+B)$ now gives $\Delta_d=2\Delta_A=2\Delta_B$. [step 2.1, algebra]

4.1 Closedness of $\omega$ gives $[A,L]=[B,L]=0$. Thus $[\Delta_A,L]=[A,[A^*,L]]=-i[A,B]=0$; adjunction gives commutation with $\Lambda$. Commutation with $A,B$ follows from their squares and the equal Laplacians. The real formal adjoint formula $d^*=(-1)^{2n(k+1)+1}*d*=-*d*$ in degree $k$ and $*^2=(-1)^k$ imply $\Delta_d*=*\Delta_d$ by substituting twice. Finally $\Delta_B$ has type $(0,0)$; hence $\Delta_d$ preserves type. [step 3.1, step 2.1, given, algebra] ∎
