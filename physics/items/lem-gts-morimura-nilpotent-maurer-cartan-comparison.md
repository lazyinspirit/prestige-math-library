---
id: lem-gts-morimura-nilpotent-maurer-cartan-comparison
kind: lemma
title: Small-extension comparison for nilpotent Maurer–Cartan gauge classes
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: physics
category: string-theory
page: gts-classical-deformation-cotangent-theory
deps:
  - def-gts-cohomological-differential-graded-lie-algebra
dependency_roles:
  def-gts-cohomological-differential-graded-lie-algebra: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: Marco Manetti, Deformation theory via differential graded Lie algebras
      url: https://arxiv.org/pdf/math/0507284
      locator: Section 3, Theorem 3.1(2), PDF pp. 14–16; nilpotent exponential and gauge action, Section 1, PDF pp. 5–6.
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
dependency_level: 1
---

## Statement

Let $f:L\to M$ be a morphism of cohomological differential graded Lie algebras over a characteristic-zero field $k$. Suppose $H^0(f)$ is surjective, $H^1(f)$ is bijective, and $H^2(f)$ is injective. For a finite-dimensional commutative local Artin $k$-algebra $R$ with residue field $k$ and maximal ideal $\mathfrak m_R$, put
$$\operatorname{MC}_L(R)=\{x\in L^1\otimes_k\mathfrak m_R:dx+\tfrac12[x,x]=0\}.$$
The nilpotent exponential group $\exp(L^0\otimes_k\mathfrak m_R)$, with Baker–Campbell–Hausdorff multiplication, acts by
$$e^a*x=e^{\operatorname{ad}a}x-\sum_{n\ge0}\frac{(\operatorname{ad}a)^n}{(n+1)!}\,da.$$
All series are finite because $\mathfrak m_R$ is nilpotent. The map induced by $f$ on the sets of gauge orbits is bijective for every $R$, naturally in all local $k$-algebra morphisms. This assertion concerns these Maurer–Cartan orbit functors; identifying a scheme or Morita deformation functor with either orbit functor is a separate prerequisite.

## Statement references

[[def-gts-cohomological-differential-graded-lie-algebra]]

[Manetti, Theorem 3.1(2)](https://arxiv.org/pdf/math/0507284)

## Facts & Assumptions

**Given:** $f$, $L$, $M$, $k$, and their stated cohomology maps.

[F1] [[def-gts-cohomological-differential-graded-lie-algebra]] supplies the differential, signed Jacobi identity, differential Leibniz rule, and morphism convention.

## Proof

**Given:** the data in the Statement and [F1].

1.1 Adjoin a formal degree-one element $D$ to $L$, with $[D,u]=du$ and $[D,D]=0$. The differential Leibniz rule and $d^2=0$ give the Jacobi identity for this extension. A Maurer–Cartan element satisfies $[D+x,D+x]=0$. Conjugation by $e^{\operatorname{ad}a}$ carries $D+x$ to $D+e^a*x$, with the displayed formula obtained by expanding the exponential and using $[a,D]=-da$. Thus the formula preserves Maurer–Cartan elements and gives a group action. The exponential composition identity is the Baker–Campbell–Hausdorff identity; here it is a finite identity, evaluated in the nilpotent ideal of coefficients. In particular, if $a\in L^0\otimes I$ and $\mathfrak m_R I=0$, then $e^a*x=x-da$. [F1, algebra]

1.2 We need the stabilizers over the whole base, not only the kernel gauges. For a local Artin $k$-algebra $B$, fix $z\in\operatorname{MC}_L(B)$ and put $d_z=d+[z,-]$ on $L\otimes\mathfrak m_B$ and $d_{f(z)}=d+[f(z),-]$ on $M\otimes\mathfrak m_B$. Their squares vanish by the Maurer–Cartan equation and Jacobi identity. Form the mapping cone $C^i=(M^i\otimes\mathfrak m_B)\oplus(L^{i+1}\otimes\mathfrak m_B)$ with differential $(b,a)\mapsto(d_{f(z)}b+f(a),-d_z a)$. Filter by powers of $\mathfrak m_B$. Its associated graded pieces are the ordinary cone of $f$ tensored with $\mathfrak m_B^j/\mathfrak m_B^{j+1}$. Each has zero degree-zero cohomology: a cocycle $(b,a)$ has $da=0$ and $db=-f(a)$; injectivity of $H^1(f)$ gives $a=dv$, and surjectivity of $H^0(f)$ then expresses $b+f(v)$ as $f(w)+du$ with $dw=0$, which makes $(b,a)$ a cone boundary. The finite filtration therefore also has $H^0(C)=0$: subtract a primitive of the leading filtered term of any degree-zero cocycle, and repeat until the filtration vanishes. Applying this to $(b,0)$ proves that every $d_{f(z)}$-closed degree-zero $b$ is $f(a)+d_{f(z)}c$, with $d_z a=0$ and $c\in M^{-1}\otimes\mathfrak m_B$. [F1, algebra]

2.1 Let $R\twoheadrightarrow B$ have kernel $I$ with $\mathfrak m_R I=0$, and let $x_B\in\operatorname{MC}_L(B)$. For any linear lift $\widetilde x\in L^1\otimes\mathfrak m_R$, its curvature $c=d\widetilde x+\frac12[\widetilde x,\widetilde x]$ lies in $L^2\otimes I$. The differential Leibniz rule and Jacobi identity give $dc+[\widetilde x,c]=0$; the second term vanishes because $\mathfrak m_R I=0$. Replacing $\widetilde x$ by $\widetilde x+u$, with $u\in L^1\otimes I$, replaces $c$ by $c+du$. Thus $[c]\in H^2(L)\otimes I$ is independent of the lift, vanishes exactly when a Maurer–Cartan lift exists, and maps to the corresponding class for $M$. If a lift $x$ exists, every other lift is uniquely $x+u$ with $u\in Z^1(L)\otimes I$; quotienting by gauges reducing to the identity over $B$ identifies $u$ modulo $d(L^0\otimes I)$, giving a torsor under $H^1(L)\otimes I$. Gauges in this kernel which fix $x$ are exactly $Z^0(L)\otimes I$. These are assertions with a fixed reduction representative, before quotienting by stabilizers over $B$. [F1, step 1.1, algebra]

2.2 The stabilizer of $z$ is $\exp Z^0(L\otimes\mathfrak m_B,d_z)$. Indeed the difference $e^a*z-z$ is $-P(\operatorname{ad}a)d_z a$, where $P(t)=\sum_{n\ge0}t^n/(n+1)!$ is invertible because its constant term is one and $\operatorname{ad}a$ is nilpotent. Boundaries $d_z(L^{-1}\otimes\mathfrak m_B)$ form a Lie ideal in these closed degree-zero elements, since $[u,d_zv]=d_z[u,v]$ when $d_z u=0$. Exponentiating that ideal gives a normal stabilizer subgroup. The quotient is the exponential group of the degree-zero cohomology Lie algebra, as follows by applying the finite Baker–Campbell–Hausdorff formula to the quotient by the ideal. Step 1.2 makes the map on these quotient groups surjective. Consequently every target stabilizer is a product $f(h)k$ where $h$ is a source stabilizer and $k=\exp(d_{f(z)}c)$ is a boundary stabilizer. If $z$ lifts to $x$ over $R$, any lift of $c$ gives the boundary stabilizer $\exp(d_{f(x)}\widetilde c)$ of $f(x)$ over $R$, lifting $k$. [F1, step 1.1, step 1.2, algebra]

3.1 Induct on $\dim_k R$. For $R=k$ both orbit sets have one element. For $R\ne k$, choose a one-dimensional $k$-subspace $I$ in the last nonzero power of $\mathfrak m_R$. It is an ideal annihilated by $\mathfrak m_R$; write $B=R/I$. Given $y\in\operatorname{MC}_M(R)$, induction supplies $x_B\in\operatorname{MC}_L(B)$ and a target gauge identifying $f(x_B)$ with $y_B$. Lift that gauge linearly to $R$ and apply its inverse to $y$, so $y_B=f(x_B)$. The curvature obstruction of $x_B$ maps to zero because $y$ exists. Injectivity of $H^2(f)\otimes I$ and step 2.1 give a lift $x\in\operatorname{MC}_L(R)$. The difference $y-f(x)$ is closed in $M^1\otimes I$. Surjectivity of $H^1(f)\otimes I$ writes it as $f(u)-dv$, with $u\in Z^1(L)\otimes I$ and $v\in M^0\otimes I$. Then $x+u$ is Maurer–Cartan and $e^v*f(x+u)=y$. This proves surjectivity on orbits. [F1, step 1.1, step 2.1, algebra]

4.1 For injectivity let $x,y\in\operatorname{MC}_L(R)$ and $g*f(x)=f(y)$. Induction gives a source gauge carrying $x_B$ to $y_B$. Lift it and replace $x$ by its action, adjusting $g$ accordingly; now $x_B=y_B=z$, and $g_B$ stabilizes $f(z)$. By step 2.2 write $g_B=f(h)k$. Lift $k$ to a boundary stabilizer $\widetilde k$ of $f(x)$, and lift $h$ to an arbitrary source gauge $\widetilde h$. Replace $x$ by $\widetilde h*x$ and $g$ by $g\widetilde k^{-1}f(\widetilde h)^{-1}$. This retains $g*f(x)=f(y)$ and makes $g_B=1$. Hence $g=e^v$ for $v\in M^0\otimes I$ and $f(y-x)=-dv$. The difference $y-x$ is closed in $L^1\otimes I$, so injectivity of $H^1(f)\otimes I$ writes $y-x=-da$ for some $a\in L^0\otimes I$. Therefore $e^a*x=y$. This completes the induction and proves injectivity on orbits. [F1, step 1.1, step 2.1, step 2.2, step 3.1, algebra]

5.1 A morphism of Artin bases sends maximal ideals to maximal ideals and commutes with $d$, the bracket, and every finite exponential term. It therefore induces the orbit maps, and these commute with the maps induced by $f$. The bijections proved above consequently form a natural isomorphism. No choice of a small-extension filtration occurs in the definition of this transformation. [F1, step 3.1, step 4.1, algebra] ∎
