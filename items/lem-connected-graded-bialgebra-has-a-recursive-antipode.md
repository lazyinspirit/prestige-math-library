---
id: lem-connected-graded-bialgebra-has-a-recursive-antipode
kind: lemma
title: "A connected graded bialgebra has a unique antipode, given by the reduced-coproduct recursion"
status: published
origin: pipeline
pipeline_run: frontier-43-complex-representation-15
dependency_level: 1
deps:
  - def-graded-bialgebra-and-hopf-algebra
  - def-tensor-product-of-modules-by-generators-and-relations
  - thm-universal-property-of-module-tensor-products
  - thm-associativity-of-balanced-tensor-products
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: "2026-10-08"
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
sources:
  references:
    - title: "Darij Grinberg and Victor Reiner, Hopf Algebras in Combinatorics (complete author-hosted lecture-notes book, 2020)"
      url: "https://www.cip.ifi.lmu.de/~grinberg/algebra/HopfComb.pdf"
      locator: "Chapter 1 §1.4, Proposition 1.4.16 and complete proof; the preceding convention and §1 state that k is usually a commutative ring and that the book works over arbitrary commutative rings."
---

## Statement

Let $k$ be a commutative ring and let $H=\bigoplus_{n\ge0}H_n$ be a connected graded bialgebra over $k$ ([[def-graded-bialgebra-and-hopf-algebra]]), with multiplication $m$, unit $u$, comultiplication $\Delta$ and counit $\varepsilon$, so that $u:k\xrightarrow{\sim}H_0$. Then there is a unique $k$-linear map $S:H\to H$ satisfying

$$m(S\otimes\mathrm{id})\Delta=u\varepsilon=m(\mathrm{id}\otimes S)\Delta.$$

Thus $H$ is a graded Hopf algebra with antipode $S$. The map preserves the grading, $S(H_n)\subseteq H_n$. For every homogeneous $x\in H_n$ with $n\ge1$, the reduced coproduct

$$\widetilde\Delta(x):=\Delta(x)-x\otimes1_H-1_H\otimes x$$

lies in $\bigoplus_{i=1}^{n-1}H_i\otimes_kH_{n-i}$, and the recursion is

$$S(x)=-x-m(S\otimes\mathrm{id})\widetilde\Delta(x)=-x-m(\mathrm{id}\otimes S)\widetilde\Delta(x).$$

Equivalently, if $\widetilde\Delta(x)=\sum_i x_i'\otimes x_i''$, then $S(x)=-x-\sum_iS(x_i')x_i''=-x-\sum_ix_i'S(x_i'')$; this value is independent of the finite tensor expression used. No choice principle is used.

## Facts & Assumptions

**Given:** A commutative ring $k$ and a connected graded bialgebra $H$ over $k$ with the structure maps in the statement.

[F1] The multiplication is associative and unital; $\Delta$ and $\varepsilon$ are unital algebra maps; $\Delta$ is degree-zero and coassociative; $\varepsilon$ vanishes in positive degrees and satisfies both counit identities; and connectedness means $u:k\cong H_0$ ([[def-graded-bialgebra-and-hopf-algebra]]).

[F2] Every tensor is a finite sum of elementary tensors, with the defining additivity and balance relations ([[def-tensor-product-of-modules-by-generators-and-relations]]).

[F3] A balanced bilinear map induces a unique homomorphism from the module tensor product, so maps on tensor factors defined on elementary tensors are well defined ([[thm-universal-property-of-module-tensor-products]]).

[F4] The canonical tensor associator rebrackets $(M\otimes_RN)\otimes_SP$ as $M\otimes_R(N\otimes_SP)$ ([[thm-associativity-of-balanced-tensor-products]]).

[F5] The convolution product $f*g=m(f\otimes g)\Delta$ on $\operatorname{Hom}_k(H,H)$ is associative with unit $u\varepsilon$ ([[def-graded-bialgebra-and-hopf-algebra]]).

## Proof

**Proof technique:** direct.

1.1 If $x\in H_n$ with $n>0$, gradedness places $\Delta(x)$ in $\bigoplus_{i+j=n}H_i\otimes_kH_j$. Since $\varepsilon$ vanishes in positive degree and $H_0=k1_H$, the two counit identities force the bidegree $(0,n)$ and $(n,0)$ components to be $1_H\otimes x$ and $x\otimes1_H$. Hence $\widetilde\Delta(x)\in\bigoplus_{i=1}^{n-1}H_i\otimes_kH_{n-i}$, with $\widetilde\Delta(x)=0$ when $n=1$; for $c\in k$, $\Delta(u(c))=u(c)\otimes1_H$ and $\varepsilon(u(c))=c$. [F1, given, algebra]

1.2 For $f,g,h\in\operatorname{Hom}_k(H,H)$, the convolution bracketings are $(f*g)*h=m(m\otimes\mathrm{id})(f\otimes g\otimes h)(\Delta\otimes\mathrm{id})\Delta$ and $f*(g*h)=m(\mathrm{id}\otimes m)(f\otimes g\otimes h)(\mathrm{id}\otimes\Delta)\Delta$. Under the canonical rebracketing [F4], coassociativity of $\Delta$ and associativity of $m$ identify these maps. Hence convolution is associative, and its unit is $e:=u\varepsilon$ by [F5]. [F1, F3, F4, F5, algebra]

2.1 Set $S_\ell|_{H_0}=S_r|_{H_0}=\mathrm{id}_{H_0}$. Inductively, once both maps are defined on $\bigoplus_{j<n}H_j$, define for $x\in H_n$ by $S_\ell(x):=-x-m(S_{\ell,<n}\otimes\mathrm{id})\widetilde\Delta(x)$ and $S_r(x):=-x-m(\mathrm{id}\otimes S_{r,<n})\widetilde\Delta(x)$, where $S_{\ell,<n}$ and $S_{r,<n}$ are their restrictions to $\bigoplus_{j<n}H_j$. By step 1.1 both tensor factors of $\widetilde\Delta(x)$ have degree below $n$, so [F3] makes the displayed maps well defined on the tensor element itself, independently of any chosen finite expression as elementary tensors; they are $k$-linear in $x$ and extend to $H_n$. Induction over $n$ therefore defines $k$-linear maps $S_\ell,S_r:H\to H$. [F1, F2, F3, step 1.1, construct]

3.1 For homogeneous $x\in H_n$ with $n>0$, step 2.1 gives $m(S_\ell\otimes\mathrm{id})\Delta(x)=S_\ell(x)+x+m(S_{\ell,<n}\otimes\mathrm{id})\widetilde\Delta(x)=0=u\varepsilon(x)$. For $x=u(c)\in H_0$, $S_\ell$ is the identity and $\Delta(u(c))=u(c)\otimes1_H$, so the same convolution identity equals $u\varepsilon(x)$. By linearity, $S_\ell*\mathrm{id}=u\varepsilon$ on $H$. [F1, step 1.1, step 2.1, algebra]

3.2 For homogeneous $x\in H_n$ with $n>0$, the right recursion in step 2.1 gives $m(\mathrm{id}\otimes S_r)\Delta(x)=x+S_r(x)+m(\mathrm{id}\otimes S_{r,<n})\widetilde\Delta(x)=0=u\varepsilon(x)$. The identity holds on $H_0$ because $S_r|_{H_0}=\mathrm{id}_{H_0}$ and $\Delta(u(c))=u(c)\otimes1_H$. Thus $\mathrm{id}*S_r=u\varepsilon$ on all of $H$. [F1, step 1.1, step 2.1, algebra]

4.1 By steps 3.1 and 3.2, $S_\ell*\mathrm{id}=e=\mathrm{id}*S_r$. Associativity and the unit from step 1.2 yield $S_\ell=S_\ell*e=S_\ell*(\mathrm{id}*S_r)=(S_\ell*\mathrm{id})*S_r=e*S_r=S_r$. Their common value $S$ is therefore a two-sided convolution inverse of $\mathrm{id}$, so it satisfies both displayed antipode identities. [F5, step 3.1, step 3.2, step 1.2, algebra]

5.1 If $T$ is any other antipode, then $T*\mathrm{id}=e=\mathrm{id}*S$. Associativity and the unit imply $T=T*e=T*(\mathrm{id}*S)=(T*\mathrm{id})*S=e*S=S$, so the antipode is unique. [F5, step 1.2, step 4.1, algebra]

6.1 The recursion preserves degree: if $x\in H_n$, step 1.1 places every reduced-coproduct term in $H_i\otimes H_{n-i}$ with $1\le i<n$; induction gives $S(H_i)\subseteq H_i$, and the graded multiplication then puts every recursive product in $H_n$. The base case is $S|_{H_0}=\mathrm{id}$. The construction uses induction on $n$ and canonical maps on $\widetilde\Delta(x)$, never selected tensor representatives; thus no form of the axiom of choice is used. This proves the graded antipode claim. [F1, step 1.1, step 2.1, step 4.1, algebra] ∎
