---
id: def-residue-two-cocycle-on-a-loop-algebra
kind: definition
title: Residue two cocycle on a loop algebra
deps: ["def-loop-algebra-of-a-simple-lie-algebra", "lem-finite-lie-engel-trace-criterion-and-killing-nondegeneracy", "lem-finite-semisimple-cartan-root-and-string-structure"]
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: Kleshchev, Lectures on Infinite Dimensional Lie Algebras, Sections 7.1-7.2
      url: https://darkwing.uoregon.edu/~klesh/teaching/IDLALN3.pdf
    - title: Perrin, Introduction to Kac-Moody Groups and Lie Algebras, Lemma 12.2.5
      url: https://lmv.math.cnrs.fr/wp-content/uploads/2019/09/km-suite.pdf
verification:
  audited: 2026-09-13
status: published
origin: pipeline
---

## Definition

Use [[def-loop-algebra-of-a-simple-lie-algebra]]. Fix the positive-real rescaling $B$ of the Killing form whose induced form on the real finite-root span makes every long root have square $2$. The Killing form is nondegenerate, invariant and symmetric by [[lem-finite-lie-engel-trace-criterion-and-killing-nondegeneracy]], and its restriction gives a positive definite real root form by [[lem-finite-semisimple-cartan-root-and-string-structure]], so this rescaling exists. In particular $B([x,y],z)=B(x,[y,z])$.

For $f=\sum_m a_mt^m$ put $f'=\sum_m ma_mt^{m-1}$ and $\operatorname{Res}(f\,dt)=a_{-1}$. Define the residue bilinear form by
$$\omega(x\otimes f,y\otimes q)=B(x,y)\operatorname{Res}(f'q\,dt).$$
The formula is balanced and complex bilinear, so extends uniquely to the tensor product. In particular,
$$\omega(x_m,y_n)=m\delta_{m,-n}B(x,y).$$
The Kronecker symbol is one when $m=-n$ and zero otherwise. This form is in fact an alternating Lie-algebra two-cocycle. For Laurent polynomials $f,q$, the residue of $(fq)'$ is zero, so $\operatorname{Res}(f'q\,dt)=-\operatorname{Res}(fq'\,dt)$; symmetry of $B$ gives skew-symmetry, and in characteristic zero also $\omega(a,a)=0$. For pure tensors $x\otimes f,y\otimes q,z\otimes h$, invariance and symmetry of $B$ make the three factors $B([x,y],z)$, $B([y,z],x)$, and $B([z,x],y)$ equal. The cyclic cocycle sum is therefore that common factor times
$$\operatorname{Res}\bigl(((fq)'h+(qh)'f+(hf)'q)\,dt\bigr)=2\operatorname{Res}((fqh)'\,dt)=0.$$
Trilinearity extends the identity to all loop-algebra elements. Thus the terminology “two-cocycle” records a proved property of the defined form, not merely an intended later use.

For any long root $\alpha$, opposite root vectors normalized by $[e_\alpha,f_\alpha]=\alpha^\vee$ satisfy
$$B(e_\alpha,f_\alpha)=\frac{2}{(\alpha,\alpha)}=1.$$
The equality follows by pairing $[e_\alpha,f_\alpha]$ with the Cartan and using invariance. A later result identifies the highest root and proves that it is long; no highest-root existence claim is used here.
