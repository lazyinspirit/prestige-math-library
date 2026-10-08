---
id: ex-cg-moved-space-intersection-is-not-a-meet-in-a3
kind: example
title: "A moved-space intersection in $A_3$ that is not the meet"
status: draft
origin: pipeline
pipeline_run: frontier-42-coxeter-32
deps: [cor-double-orthogonal-complement-and-dimension, def-cg-canonical-reflection-homomorphism, def-cg-coxeter-diagram-components-and-finite-type, def-cg-real-coxeter-form-and-reflection, def-cg-reflection-length-absolute-order-and-moved-space, def-hh-coxeter-matrix-word-group-and-length, def-linear-isometry-and-orthogonal-or-unitary-operator, def-real-and-complex-inner-product-space, lem-cg-orthogonal-wall-form-and-subspace-restriction, lem-cg-reflection-factorizations-and-independent-normals, thm-cg-carter-reflection-length-and-absolute-order, thm-hh-parabolic-minimal-representatives-and-length-additivity, thm-quarter-turn-values-and-shift-formulas, thm-double-angle-and-power-reduction-identities, cor-trigonometric-parity-and-pythagorean-identity, thm-cosine-has-a-smallest-positive-zero, def-pi-via-first-positive-cosine-zero, lem-sine-positive-and-cosine-decreasing-on-zero-two]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "T. Brady and C. Watt, Lattices in finite real reflection groups (arXiv:math/0501502)"
      url: https://arxiv.org/pdf/math/0501502
      locator: "Introduction and section 2 (printed pp. 1-3: reflection length, absolute order, moved and fixed spaces M(A), F(A), M(A)=F(A)^perp, the main result of [7], and notes (1)-(7)); the opening of section 3 through Note 3.5 (printed pp. 3-6); and the opening paragraphs of section 4 (printed pp. 8-9) with the A_3 intersection example"
    - title: "R. W. Carter, Conjugacy classes in the Weyl group, Compositio Mathematica 25 (1972) 1-59 (Numdam full text)"
      url: https://www.numdam.org/item/CM_1972__25_1_1_0.pdf
      locator: "Section 2 'Products of reflections', printed pp. 2-5: the root-system setup (i)-(iv) and Lemmas 1-5 with the proofs of Lemmas 2, 3 and 4"
dependency_level: 18
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
---

## Example

Let $W$ be the Coxeter group of type $A_3$, with $S=\{s_1,s_2,s_3\}$, $V=\mathbb R^S$ with positive definite Coxeter form, reflection set $T$ and lengths $\ell_T,\ell$, and let $\varphi:W\to S_4$, $s_i\mapsto(i\ i+1)$, be the type-A isomorphism ([[def-cg-coxeter-diagram-components-and-finite-type]], [[def-cg-real-coxeter-form-and-reflection]], [[def-cg-canonical-reflection-homomorphism]], [[thm-hh-parabolic-minimal-representatives-and-length-additivity]] (4), [[def-cg-reflection-length-absolute-order-and-moved-space]], [[thm-cg-carter-reflection-length-and-absolute-order]]). Put

$$\gamma=\varphi^{-1}(1\,2\,3\,4),\quad \alpha=\varphi^{-1}\bigl((1\,2)(3\,4)\bigr),\quad \beta=\varphi^{-1}\bigl((1\,4)(2\,3)\bigr).$$

Then:

**(i)** $\ell_T(\gamma)=3$, $\ell_T(\alpha)=\ell_T(\beta)=2$, and $\alpha\le_T\gamma$, $\beta\le_T\gamma$: indeed $\alpha\gamma=\varphi^{-1}(2\ 4)$ and $\beta\gamma=\varphi^{-1}(1\ 3)$ are reflections, so $\gamma=\alpha\cdot\alpha^{-1}\gamma$ and $\gamma=\beta\cdot\beta^{-1}\gamma$ display the rank additivity $3=2+1$.

**(ii)** Under the isometry $e_{s_i}\mapsto\frac1{\sqrt2}(e_i-e_{i+1})$ of $V$ with $\mathbf H=\{x\in\mathbb R^4:\sum_ix_i=0\}$ and the standard inner product, one has

$$M(\alpha)=\{x\in\mathbf H:x_2=-x_1,\ x_4=-x_3\},\qquad M(\beta)=\{x\in\mathbf H:x_2=-x_3,\ x_4=-x_1\},$$

and $M(\alpha)\cap M(\beta)=\mathbb R(e_1-e_2+e_3-e_4)$ is a line containing no root of $A_3$.

**(iii)** No element of $W$ has moved space $M(\alpha)\cap M(\beta)$: a nonzero moved space of an element of $W$ contains a root ([[lem-cg-reflection-factorizations-and-independent-normals]] (1)), while this line contains none. Moreover the greatest common lower bound of $\alpha$ and $\beta$ in $(W,\le_T)$ is $1$: any common lower bound $\tau$ satisfies $M(\tau)\subseteq M(\alpha)\cap M(\beta)$ ([[thm-cg-carter-reflection-length-and-absolute-order]] (2)(iv)), so $\tau=1$ by the same root-existence clause; hence the moved space of the meet, $M(1)=0$, is strictly smaller than the intersection of the two moved spaces, and arbitrary subspace intersection does not compute the meet.

## Facts & Assumptions

**Given:** The type-$A_3$ Coxeter datum $W,S,V,B,\rho,\Phi,T$ and the isomorphism $\varphi:W\to S_4$ with $s_i\mapsto(i\ i+1)$; $\ell_T$, $M$, $F$ are as in [[def-cg-reflection-length-absolute-order-and-moved-space]], and $\sigma\in S_4$ acts on $\mathbb R^4$ by permuting coordinates.

[F1] $s_i\mapsto(i\ i+1)$ extends to an isomorphism $\varphi:W\to S_4$, and $S$ generates $W$. [[thm-hh-parabolic-minimal-representatives-and-length-additivity]]

[F2] $\ell_T(w)=\dim M(w)=\dim V-\dim F(w)$, and $M(w)=F(w)^\perp$ with $V=M(w)\oplus F(w)$. [[thm-cg-carter-reflection-length-and-absolute-order]] [[lem-cg-orthogonal-wall-form-and-subspace-restriction]]

[F3] If $M(w)\ne0$ for $w\in W$, then $M(w)$ contains a root of $\Phi$. [[lem-cg-reflection-factorizations-and-independent-normals]]

[F4] $u\le_Tv$ implies $M(u)\subseteq M(v)$. [[thm-cg-carter-reflection-length-and-absolute-order]]

[F5] $\rho(s_i)=r_{e_{s_i}}$, and each line of $V$ is the moved space of a unique reflection of the orthogonal group of $(V,B)$. [[def-cg-canonical-reflection-homomorphism]] [[lem-cg-orthogonal-wall-form-and-subspace-restriction]]

[F6] $\Phi=\{\rho(w)e_s:w\in W,\ s\in S\}$, $T=\{wsw^{-1}:w\in W,\ s\in S\}$, and $B(e_{s},e_{t})=-\cos(\pi/m(s,t))$ with $m(s,t)=3$ for adjacent and $2$ for non-adjacent generators of $A_3$. Also $u\le_Tv$ means $\ell_T(v)=\ell_T(u)+\ell_T(u^{-1}v)$, and $\ell_T(u)=0$ holds exactly when $u=1$, since only the empty product has length zero. [[def-cg-reflection-length-absolute-order-and-moved-space]] [[def-cg-canonical-reflection-homomorphism]] [[def-cg-real-coxeter-form-and-reflection]] [[def-cg-coxeter-diagram-components-and-finite-type]]

[F7] Write $\gamma=\pi/2$ for the smallest positive cosine zero; $0<\gamma<2$, and cosine is strictly decreasing on $[0,2]$. Also $\cos(\pi/2)=0$, $\cos(\pi-x)=-\cos x$, and $\cos(2x)=2\cos^2x-1$. [[def-pi-via-first-positive-cosine-zero]] [[thm-cosine-has-a-smallest-positive-zero]] [[lem-sine-positive-and-cosine-decreasing-on-zero-two]] [[thm-quarter-turn-values-and-shift-formulas]] [[thm-double-angle-and-power-reduction-identities]] [[cor-trigonometric-parity-and-pythagorean-identity]]

## Verification

**Proof technique:** direct.

1.1 Put $c:=\cos(\pi/3)$. By [F7], $0<\pi/3<\gamma<2$ gives $c>\cos\gamma=0$, while $2c^2-1=\cos(2\pi/3)=-c$, so $(2c-1)(c+1)=0$ and $c=\tfrac12$; also $\cos(\pi/2)=0$ by [F7]. Put $v_i:=\frac1{\sqrt2}(e_i-e_{i+1})\in\mathbf H$ for $i=1,2,3$. Then $\langle v_i,v_i\rangle=1$, $\langle v_i,v_{i+1}\rangle=-\tfrac12$ and $\langle v_i,v_j\rangle=0$ whenever $|i-j|\ge2$, which by [F6] and [F7] matches $B(e_{s_i},e_{s_j})=-\cos(\pi/m(s_i,s_j))$; the $v_i$ are linearly independent, since the coordinates of $a v_1+b v_2+c v_3$ are $(a,-a+b,-b+c,-c)/\sqrt2$, and every $x\in\mathbf H$ equals $\sqrt2(x_1v_1+(x_1+x_2)v_2+(x_1+x_2+x_3)v_3)$, so they form a basis of the three-dimensional space $\mathbf H$ and the linear map $\Theta:V\to\mathbf H$ with $\Theta(e_{s_i})=v_i$ is a linear isometry onto $\mathbf H$. For each $i$ the permutation $(i\ i+1)$ preserves $\mathbf H$, fixes ${v_i}^\perp\cap\mathbf H$ pointwise and sends $v_i$ to $-v_i$, so it acts on $\mathbf H$ as an orthogonal involution with moved space $\mathbb Rv_i$; the image $\Theta\rho(s_i)\Theta^{-1}$ is an orthogonal involution with the same moved space $\mathbb Rv_i$ by [F5], and by the uniqueness in [F5] the two are equal. Since $\varphi$ is an isomorphism [F1] and $S$ generates $W$, the two homomorphisms $\Theta\rho\Theta^{-1}$ and $\sigma\mapsto\sigma|_{\mathbf H}$ from $W$ to the orthogonal group of $\mathbf H$ agree on $S$, hence everywhere: $\Theta\rho(w)\Theta^{-1}=\varphi(w)|_{\mathbf H}$ for all $w\in W$. In particular $\Theta\Phi=\{\sigma v_i:\sigma\in S_4,\ i\le3\}=\{\pm\frac1{\sqrt2}(e_p-e_q):p\ne q\}$, because $\varphi$ is onto and the transpositions of $S_4$ are the images of the conjugate reflections. [F1, F5, F6, F7, given]

2.1 Under the identification of step 1.1, $F(w)=\Theta^{-1}\{x\in\mathbf H:\varphi(w)x=x\}$ and $\ell_T(w)=\dim V-\dim F(w)=3-\dim\{x\in\mathbf H:\varphi(w)x=x\}$ by [F2]. For $\gamma=\varphi^{-1}(1\,2\,3\,4)$ the fixed space in $\mathbb R^4$ of the $4$-cycle $(1\,2\,3\,4)$ is $\mathbb R(e_1+e_2+e_3+e_4)$, which meets $\mathbf H$ in $0$, so $\ell_T(\gamma)=3$. For $\alpha=\varphi^{-1}((1\,2)(3\,4))$ the fixed space in $\mathbb R^4$ is $\{x:x_1=x_2,\ x_3=x_4\}$, whose intersection with $\mathbf H$ is $\mathbb R(e_1+e_2-e_3-e_4)$, of dimension $1$; hence $\ell_T(\alpha)=2$, and the same computation with $x_1=x_4$, $x_2=x_3$ gives fixed space $\mathbb R(e_1-e_2-e_3+e_4)\cap\mathbf H$ of dimension $1$ and $\ell_T(\beta)=2$. Finally $\alpha\gamma=\varphi^{-1}(2\ 4)$ and $\beta\gamma=\varphi^{-1}(1\ 3)$ by the multiplication convention $(\sigma\tau)(x)=\sigma(\tau(x))$ applied in $S_4$: for instance $\alpha\gamma$ sends $1\mapsto1$, $2\mapsto4$, $3\mapsto3$, $4\mapsto2$, so it is the transposition $(2\ 4)$; and for a transposition $(p\ q)$ the fixed space in $\mathbb R^4$ has dimension $3$ (inside $\mathbf H$ its coordinates satisfy $x_p=x_q=a$ and $2a+x_r+x_s=0$ for the remaining indices $r,s$, leaving two free parameters), so $\ell_T(\varphi^{-1}(p\ q))=3-2=1$. [step 1.1, F1, F2]

2.2 Since $F(\alpha)$ is the line $\mathbb R(e_1+e_2-e_3-e_4)$ in the model of step 1.1 and $\Theta$ is an isometry, $M(\alpha)=F(\alpha)^\perp$ is, inside $\mathbf H$, the orthogonal complement of $e_1+e_2-e_3-e_4$, namely $\{x\in\mathbf H:x_1+x_2-x_3-x_4=0\}=\{x\in\mathbf H:x_2=-x_1,\ x_4=-x_3\}$; likewise $F(\beta)=\mathbb R(e_1-e_2-e_3+e_4)$ gives $M(\beta)=\{x\in\mathbf H:x_1-x_2-x_3+x_4=0\}=\{x\in\mathbf H:x_2=-x_3,\ x_4=-x_1\}$. Intersecting the two sets gives $x_2=-x_1$, $x_3=-x_2=x_1$, $x_4=-x_1$ (the sum condition is then automatic), so $M(\alpha)\cap M(\beta)=\mathbb R(e_1-e_2+e_3-e_4)$ is a line. [step 1.1, F2]

3.1 Since $\alpha^{-1}\gamma=\alpha\gamma=\varphi^{-1}(2\ 4)$ because $\alpha$ is an involution, step 2.1 gives $\ell_T(\gamma)=3=2+1=\ell_T(\alpha)+\ell_T(\alpha^{-1}\gamma)$, so $\alpha\le_T\gamma$ by the definition of $\le_T$ in [F6], and the analogous computation with $\beta\gamma=\varphi^{-1}(1\ 3)$ gives $\beta\le_T\gamma$. [step 2.1, F6]

3.2 By step 1.1 the roots of $A_3$ in the model are the twelve vectors $\pm\frac1{\sqrt2}(e_p-e_q)$, $p\ne q$, and none of these is a real multiple of $e_1-e_2+e_3-e_4$, so the line $\mathbb R(e_1-e_2+e_3-e_4)$ of step 2.2 contains no root; hence no $w\in W$ has $M(w)=\mathbb R(e_1-e_2+e_3-e_4)$, because a nonzero moved space contains a root by [F3]. [step 1.1, step 2.2, F3]

4.1 Let $\tau\in W$ be a common lower bound of $\alpha$ and $\beta$, so $M(\tau)\subseteq M(\alpha)\cap M(\beta)=\mathbb R(e_1-e_2+e_3-e_4)$ by [F4] and step 2.2. If $M(\tau)\ne0$, then $M(\tau)$ equals that line and $\tau$ is an element with moved space the line, contradicting step 3.2; hence $M(\tau)=0$ and $\tau=1$ by [F2]; since $1\le_T\alpha,\beta$, the greatest common lower bound of $\alpha$ and $\beta$ is $1$, and $M(1)=0$ is strictly smaller than the line $M(\alpha)\cap M(\beta)$. This verifies (i), (ii) and (iii). [step 2.2, step 3.1, step 3.2, F2, F4, F6] ∎
