---
id: lem-qc-symplectic-transvections-generate
kind: lemma
title: Symplectic transvections generate the binary symplectic group
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
deps:
  - def-qc-binary-symplectic-form
  - def-linear-map
  - thm-rank-nullity
  - def-linear-basis
  - def-dimension
  - thm-induction-principle
  - def-natural-numbers
justified_by: []
dependency_level: 9
sources:
  references:
    - title: "M. Hein et al., Entanglement in Graph States and Its Applications"
      url: https://arxiv.org/pdf/quant-ph/0602096
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes"
      url: https://arxiv.org/pdf/1907.09415
provenance:
  statement: literature-derived
  proof: ai-generated
axiom_use: "None; the reduction uses finite-dimensional linear algebra and finite induction, with no choice principle."
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
---

## Statement

Let $V$ be any finite-dimensional vector space over $\mathbb F_2$ with a nondegenerate alternating form $\omega$, and let $\dim V=2n$. Call an invertible linear map $T:V\to V$ **symplectic** when $\omega(Tu,Tw)=\omega(u,w)$ for all $u,w\in V$. For each $v\in V$, define the transvection $\tau_v(w)=w+\omega(w,v)v$. Every symplectic map is a finite composition of these transvections. The form on $V_n$ from [[def-qc-binary-symplectic-form]] is the application needed here. This is a choice-free finite-dimensional reduction.

## Facts & Assumptions

**Given:** $n\in\mathbb N$, $V$ is a finite-dimensional vector space over $\mathbb F_2$ with $\dim V=2n$, and $\omega$ is a nondegenerate alternating bilinear form.

[F1] [[def-qc-binary-symplectic-form]]: the coordinate form used in the application is nondegenerate, alternating, and symmetric.

[F2] [[thm-rank-nullity]]: for a linear map between finite-dimensional vector spaces, dimension of domain equals rank plus nullity.

[F3] [[def-linear-basis]] and [[def-dimension]]: finite-dimensional spaces have finite bases, and dimension is the size of a basis.

[F4] [[def-linear-map]]: a function between vector spaces is linear when it preserves finite linear combinations.

[F5] [[thm-induction-principle]] and [[def-natural-numbers]]: induction proves a statement for every natural number from a base case and a successor step.

## Proof


1.1 For $s\in\{0,1,2,3\}$, the standard coordinate vectors form a basis of $\mathbb F_2^s$ by coordinate expansion and coordinatewise independence, so $\dim\mathbb F_2^s=s$. Let $d\in\{2,3\}$ and let $U$ be a proper subspace of $\mathbb F_2^d$. Since $U$ is finite, choose a linearly independent subset $B\subseteq U$ maximal under inclusion; maximality makes it span $U$, since any vector outside its span could be adjoined while preserving independence. If $r=|B|$, its $2^r$ binary coefficient lists give distinct vectors by independence and exhaust $U$ by spanning, so $|U|=2^r$. But $|\mathbb F_2^d|=2^d$ and $U$ is proper, hence $r<d$. Enumerate $B=(q_1,\ldots,q_r)$ and define $A_B:\mathbb F_2^d\to\mathbb F_2^r$ by $A_B(\alpha)=(\alpha\cdot q_1,\ldots,\alpha\cdot q_r)$. Each coordinate dot product is linear in $\alpha$, so $A_B$ is linear [F4]. Its domain and codomain have dimensions $d$ and $r$ by the coordinate-basis calculation. Its image is a finite subspace; a maximal independent subset spans it as above, and its $2^{\operatorname{rank}A_B}$ distinct binary combinations lie among the $2^r$ vectors of $\mathbb F_2^r$, so its rank is at most $r$. Thus rank-nullity [F2] gives $\dim\ker A_B=d-\operatorname{rank}A_B\ge d-r>0$. For nonzero $\alpha\in\ker A_B$, every basis vector $q_i$ satisfies $\alpha\cdot q_i=0$, so linearity and spanning give $\alpha\cdot u=0$ for every $u\in U$. The functional $u\mapsto\alpha\cdot u$ is nonzero because its value on a coordinate vector with nonzero corresponding coordinate of $\alpha$ is $1$. [F2, F3, F4, algebra, choose, construct]

1.2 Alternation and bilinearity imply $0=\omega(u+w,u+w)=\omega(u,w)+\omega(w,u)$ for all $u,w$; since subtraction equals addition in $\mathbb F_2$, $\omega$ is symmetric. For $v=0$, $\tau_v$ is the identity. For any $v$, alternation gives $\omega(v,v)=0$, so applying $\tau_v$ twice adds $\omega(w,v)v$ twice and returns $w$. For $u,w\in V$, bilinearity gives $$\omega(\tau_vu,\tau_vw)=\omega(u,w)+\omega(w,v)\omega(u,v)+\omega(u,v)\omega(v,w).$$ Symmetry from the first sentence makes the last two terms the same product, which sums to zero in $\mathbb F_2$; therefore $\tau_v$ preserves $\omega$. [given, algebra]

1.3 At $n=0$, $\dim V=0$ implies $V=\{0\}$ by [F3]. Its identity is the only symplectic map and is the empty composition of transvections. [given, F3, base]

2.1 These maps act transitively on nonzero vectors. If $a=b$, no map is needed. If $\omega(a,b)=1$, then $v=a+b$ satisfies $\omega(a,v)=1$, hence $\tau_v(a)=b$. If $a\ne b$ and $\omega(a,b)=0$, then $a,b$ are independent over $\mathbb F_2$. Their pairing functionals are independent: a relation $r\omega(a,\cdot)+s\omega(b,\cdot)=0$ gives $\omega(ra+sb,w)=0$ for every $w$, so nondegeneracy gives $ra+sb=0$, and independence gives $r=s=0$. The map $L(w)=(\omega(a,w),\omega(b,w))$ is linear by bilinearity. If its image were proper, step 1.1 would give a nonzero $\alpha\in\mathbb F_2^2$ with $\alpha\cdot L(w)=0$ for every $w$. This would make a nontrivial linear combination of the pairing functionals zero, a contradiction. Thus $L$ is onto; choose $c$ with both pairings $1$. By symmetry from step 1.2, $\omega(c,b)=1$, so $\tau_{a+c}(a)=c$ and $\tau_{c+b}(c)=b$. [given, step 1.1, step 1.2, algebra, choose]

3.1 Fix $e,f$ with $\omega(e,f)=1$. If $y$ and $f$ both pair to $1$ with $e$, then transvections fixing $e$ send $y$ to $f$ as follows. If $y=f$, use the identity. If $\omega(y,f)=1$, the center $y+f$ lies in $e^\perp$ and $\tau_{y+f}(y)=f$. If $y\ne f$ and $\omega(y,f)=0$, the vectors $e,y,f$ are independent: pairing a relation $r e+s y+t f=0$ with $e$ gives $s=t$ by symmetry from step 1.2; if $s=t=1$, then $y+f=r e$, which would give either $y=f$ or $\omega(y,f)=\omega(f+r e,f)=r=1$, both impossible. Their pairing functionals are independent because a relation among them is the pairing with the corresponding linear combination of $e,y,f$, which nondegeneracy forces to be zero. The map $L(w)=(\omega(e,w),\omega(y,w),\omega(f,w))$ is linear by bilinearity. If its image were proper, step 1.1 would give a nonzero $\alpha\in\mathbb F_2^3$ annihilating every value of $L$, contradicting independence of the three pairing functionals. Hence $L$ is onto; choose $c$ with all three values $1$. The centers $y+c$ and $c+f$ lie in $e^\perp$, and $\tau_{c+f}\tau_{y+c}(y)=f$; both transvections fix $e$. [given, step 1.1, step 1.2, step 2.1, algebra, choose]

4.1 Assume $n\ge1$ and the result for dimension $2(n-1)$. For the application $V=V_n$, the nondegenerate alternating form hypotheses hold by [F1]; the following argument is for any such $V$. Since $\dim V=2n>0$, choose $e\ne0$; nondegeneracy gives $f$ with $\omega(e,f)=1$. Let $T_0$ be symplectic. By step 2.1, choose a finite product $A$ of transvections with $A(T_0e)=e$, and set $T_1=AT_0$. The vector $y=T_1f$ satisfies $\omega(e,y)=1$, so step 3.1 gives a finite product $B$ of transvections fixing $e$ and sending $y$ to $f$. Thus $G=BT_1$ is symplectic and fixes both $e$ and $f$. Let $W=\{w:\omega(w,e)=\omega(w,f)=0\}$. Bilinearity makes $W$ a subspace and $\Phi:V\to\mathbb F_2^2$, $\Phi(u)=(\omega(u,f),\omega(u,e))$, linear by [F4]; it is onto because $\Phi(e)=(1,0)$ and $\Phi(f)=(0,1)$, and its kernel is $W$. Step 1.1 gives $\dim\mathbb F_2^2=2$, so rank-nullity [F2] yields $\dim W=\dim V-2=2(n-1)$. For any $u$, bilinearity and $\omega(e,f)=1$ show that $w=u+\omega(u,f)e+\omega(u,e)f$ lies in $W$, so every $u$ is a sum of an element of $E=\{r e+s f:r,s\in\mathbb F_2\}$ and an element of $W$; the intersection is zero since pairing $r e+s f\in W$ with $f$ and $e$ gives $r=s=0$. Thus $V=E\oplus W$. The restriction of $\omega$ to $W$ is nondegenerate: a vector in its radical is orthogonal to $W,e,f$, hence to all of $V$, and is zero. Since $G$ and $G^{-1}$ fix $e,f$ and preserve $\omega$, both map $W$ to itself, so $G|_W$ is an invertible symplectic map. By the induction hypothesis, $G|_W$ is a finite product of transvections centered in $W$. Those same transvections fix $e,f$ in $V$ and agree with $G$ on $W$, so their product is $G$ on $V=E\oplus W$. Since each transvection is its own inverse by step 1.2, $T_0=A^{-1}B^{-1}G$ is a finite product of transvections. All choices are finite-stage existential choices; the proof uses no choice principle. [given, F1, F2, F3, F4, F5, step 1.1, step 1.2, step 2.1, step 3.1, step 1.3, algebra, choose, induction, discharge-induction] ∎

