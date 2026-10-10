---
id: cor-sr-reverse-triangle-and-future-cone-convexity
kind: corollary
title: "The reversed triangle inequality and convexity of the future timelike cone"
status: draft
origin: pipeline
domain: mathematics
proof_strategy: direct
deps: [lem-sr-reverse-cauchy-schwarz-for-future-timelike-vectors, def-lorentz-form-and-inertia, def-causal-classification-of-lorentz-vectors, def-time-orientation-and-future-causal-sets, lem-timelike-cone-has-two-convex-components, def-inertial-frame-and-inertial-chart, def-spatial-euclidean-structure-of-an-inertial-frame, cor-triangle-inequality-for-inner-product-norm, thm-of-square-roots, lem-of-square-monotone, thm-induction-principle, lem-of-add-order, lem-of-sign-rules, def-ordered-field]
dependency_roles:
  lem-sr-reverse-cauchy-schwarz-for-future-timelike-vectors: mathematical-premise
  def-lorentz-form-and-inertia: mathematical-premise
  def-causal-classification-of-lorentz-vectors: mathematical-premise
  def-time-orientation-and-future-causal-sets: mathematical-premise
  lem-timelike-cone-has-two-convex-components: mathematical-premise
  def-inertial-frame-and-inertial-chart: mathematical-premise
  def-spatial-euclidean-structure-of-an-inertial-frame: mathematical-premise
  cor-triangle-inequality-for-inner-product-norm: mathematical-premise
  thm-of-square-roots: mathematical-premise
  lem-of-square-monotone: mathematical-premise
  thm-induction-principle: mathematical-premise
  lem-of-add-order: mathematical-premise
  lem-of-sign-rules: mathematical-premise
  def-ordered-field: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "B. Crowell, Special Relativity, revision 2020-12-10 (author-published undergraduate textbook): section 1.5 'Triangle and Cauchy-Schwarz inequalities' pp. 36-37 (the reversed triangle inequality is deferred to problem 18 there, so the complete equality-case argument is supplied locally); signature (+---) converted to (-+++) and c = 1 formulas converted to x^0 = c t"
      url: "https://archive.org/download/sr_20220102/sr.pdf"
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Chapter 3 pp. 68-73 (proper-time functional, geodesic variation, the maximality remark and its 'locally' caveat, the twin remark)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
    - title: "H. S. Reall, Mathematical Tripos Part III General Relativity (Cambridge, October 12, 2022), section 2.3 'Curves of extremal proper time' pp. 28-30; Internet Archive copy of the original https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
      url: "https://web.archive.org/web/20230323191108id_/https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
dependency_level: 7
aliases: []
---

## Statement

Let $(A,V,\eta,C^+)$ be the oriented time-oriented affine Minkowski space.

**(a) Sum of two future timelike vectors.** If $v,w\in V$ are future timelike,
then $v+w$ is future timelike and
$$\sqrt{-\eta(v+w,v+w)}\ \ge\ \sqrt{-\eta(v,v)}+\sqrt{-\eta(w,w)},$$
with equality if and only if $v$ and $w$ are positive proportional.

**(b) Convexity and concavity along segments.** If $v,w$ are future timelike,
then $tv+(1-t)w$ is future timelike for every real $t\in[0,1]$, so the set of
future timelike vectors is convex; moreover
$$\sqrt{-\eta\big(tv+(1-t)w,\ tv+(1-t)w\big)}\ \ge\ t\sqrt{-\eta(v,v)}+(1-t)\sqrt{-\eta(w,w)}$$
for every $t\in[0,1]$, with equality for $0<t<1$ if and only if $v$ and $w$ are
positive proportional.

**(c) Finite sums.** If $k\ge1$ and $v_1,\dots,v_k\in V$ are future timelike,
then $v_1+\cdots+v_k$ is future timelike and
$$\sqrt{-\eta\Big(\sum_{i=1}^k v_i,\ \sum_{i=1}^k v_i\Big)}\ \ge\ \sum_{i=1}^k\sqrt{-\eta(v_i,v_i)},$$
with equality if and only if all $v_i$ are positive multiples of one single
future timelike vector.

The inequalities are those of the model's $\eta$ and are independent of any
chart; they are the reversed (Lorentzian) forms of the triangle inequality of
the spatial Euclidean structure.

## Facts & Assumptions

**Given:** The oriented time-oriented affine Minkowski space $(A,V,\eta,C^+)$.

[F1] Inertial frames and cone coordinates: at every event there is an inertial frame, and in its coordinates $u=u^0e_0+u_s$ with spatial part $u_s\in S=\operatorname{span}(e_1,e_2,e_3)$ one has $\eta(u,u')=-u^0u'^0+\delta(u_s,u'_s)$ for all $u,u'\in V$ and $u\in C^+\iff u^0>|u_s|$ ([[def-inertial-frame-and-inertial-chart]], [[lem-timelike-cone-has-two-convex-components]], [[def-time-orientation-and-future-causal-sets]], [[def-lorentz-form-and-inertia]]).

[F2] The spatial form $\delta$ is positive definite on $S$, $(e_1,e_2,e_3)$ is $\delta$-orthonormal, $|z|:=\sqrt{\delta(z,z)}$ is the induced norm, and for $z,z'\in S$ one has $\delta(z,z')=\sum_{i=1}^3 z^iz'^i$ and $|z|=\sqrt{(z^1)^2+(z^2)^2+(z^3)^2}$; the norm satisfies $|z|\ge0$, $|z|=0\iff z=0$, $|\lambda z|=|\lambda|\,|z|$ and the triangle inequality $|z+z'|\le|z|+|z'|$ ([[def-spatial-euclidean-structure-of-an-inertial-frame]], [[cor-triangle-inequality-for-inner-product-norm]]).

[F3] Reversed Cauchy-Schwarz inequality ([[lem-sr-reverse-cauchy-schwarz-for-future-timelike-vectors]]): if $v,w$ are future timelike and $a:=\sqrt{-\eta(v,v)}$, $b:=\sqrt{-\eta(w,w)}$, then $-\eta(v,w)\ge ab>0$, and equality $-\eta(v,w)=ab$ holds if and only if $v$ and $w$ are positive proportional, that is $w=tv$ or $v=tw$ for some real $t>0$.

[L4] Square roots and monotonicity of squaring: every real $c\ge0$ has a unique $\sqrt c\ge0$ with $(\sqrt c)^2=c$ ([[thm-of-square-roots]]); for $x,y\ge0$ one has $x\le y\iff x^2\le y^2$ and $x<y\iff x^2<y^2$ ([[lem-of-square-monotone]]).

[L5] Order arithmetic of $\mathbb{R}$: inequalities may be added and a constant may be added to both sides of an inequality ([[lem-of-add-order]]); for $c>0$ one has $a<b\iff ac<bc$, and a product of two positive reals is positive ([[lem-of-sign-rules]]); and for reals $x,y$ exactly one of $x<y$, $x=y$, $x>y$ holds, while a product vanishes only if a factor vanishes ([[def-ordered-field]]).

[L6] Induction principle: if a property $P$ satisfies $P(1)$ and $P(k)\Rightarrow P(k+1)$ for every integer $k\ge1$, then $P(k)$ holds for every integer $k\ge1$ ([[thm-induction-principle]], applied to the shift $k\mapsto k-1$ of the natural-number form).

## Proof

**Proof technique:** direct.

1.1 Fix an event $o\in A$ and an inertial frame $(o;e_0,e_1,e_2,e_3)$ with its coordinates; by [F1] every vector $u$ is written uniquely as $u=u^0e_0+u_s$ with $u_s\in S$, the pairing is $\eta(u,u')=-u^0u'^0+\delta(u_s,u'_s)$, and $u\in C^+\iff u^0>|u_s|$. [given, F1, choose]

2.1 Let $v,w$ be future timelike. Then $(v+w)^0=v^0+w^0>|v_s|+|w_s|\ge|v_s+w_s|=|(v+w)_s|$: the first inequality adds the two strict inequalities $v^0>|v_s|$ and $w^0>|w_s|$ that [F1] gives from future timelikeness, the second is the triangle inequality of the spatial norm, and the displayed equalities are additivity of coordinates; hence $v+w$ is future timelike. [step 1.1, F1, F2, L5]

3.1 Let $a:=\sqrt{-\eta(v,v)}$, $b:=\sqrt{-\eta(w,w)}$ and $C:=\sqrt{-\eta(v+w,v+w)}$, which is a positive real by step 2.1; bilinearity and symmetry of $\eta$ give $C^2=-\eta(v+w,v+w)=-\eta(v,v)-2\eta(v,w)-\eta(w,w)=a^2+b^2+2\,(-\eta(v,w))$, and $-\eta(v,w)\ge ab$ by the reversed Cauchy-Schwarz inequality, so multiplying by the positive number $2$ and adding the constant $a^2+b^2$ yields $C^2\ge a^2+b^2+2ab=(a+b)^2$. [step 2.1, F1, F3, L5, algebra]

3.2 For $t\in(0,1)$ the vectors $tv$ and $(1-t)w$ are future timelike: $(tv)^0=tv^0>t|v_s|=|tv_s|$ because $t>0$ preserves the strict inequality and $|tv_s|=t|v_s|$ by the coordinate formula $|z|=\sqrt{(z^1)^2+(z^2)^2+(z^3)^2}$ of [F2] together with uniqueness of the nonnegative root, and symmetrically $(1-t)w^0>(1-t)|w_s|=|(1-t)w_s|$; for $t=0$ and $t=1$ the vector $tv+(1-t)w$ equals $w$ respectively $v$, which are future timelike. [step 2.1, F2, L4, L5]

3.3 For the base case $k=1$ of (c): a future timelike vector $v_1$ is its own sum, $\sqrt{-\eta(v_1,v_1)}\ge\sqrt{-\eta(v_1,v_1)}$ holds with equality, and $v_1=1\cdot v_1$ exhibits $v_1$ as a positive multiple of the single future timelike vector $u:=v_1$, so the equality characterization of (c) is satisfied for $k=1$. [step 2.1, L5, algebra]

4.1 Since $C\ge0$ and $a+b\ge0$ with $C^2\ge(a+b)^2$, monotonicity of squaring on the nonnegatives [L4] gives $C\ge a+b$: this is the inequality of (a). [step 3.1, L4]

4.2 For $t\in(0,1)$, (a) applied to the future timelike vectors $tv$ and $(1-t)w$ of step 3.2 gives $tv+(1-t)w$ future timelike and $\sqrt{-\eta(tv+(1-t)w,tv+(1-t)w)}\ge\sqrt{-\eta(tv,tv)}+\sqrt{-\eta((1-t)w,(1-t)w)}=t\sqrt{-\eta(v,v)}+(1-t)\sqrt{-\eta(w,w)}$, the two displayed equalities using bilinearity and uniqueness of the nonnegative root; this is the inequality of (b) on the open interval. [step 3.2, F1, F3, L4, algebra]

5.1 Equality holds in (a) if and only if $C=a+b$, which by monotonicity of squaring on the nonnegatives [L4] is equivalent to $C^2=(a+b)^2$, hence, subtracting the common term $a^2+b^2$ from the two displays of step 3.1 and multiplying by $1/2$, to $-\eta(v,w)=ab$, and by the equality case of the reversed Cauchy-Schwarz inequality [F3] to $v$ and $w$ being positive proportional; this proves (a). [step 4.1, F3, L4, L5, algebra]

5.2 Induction step, membership and inequality: assume $k\ge1$ and that the claim of (c) holds for the integer $k$; let $v_1,\dots,v_{k+1}$ be future timelike and put $s:=v_1+\cdots+v_k$, which is future timelike by the induction hypothesis; applying (a) of steps 2.1 and 4.1 to the future timelike vectors $s$ and $v_{k+1}$ gives $s+v_{k+1}=v_1+\cdots+v_{k+1}$ future timelike and $\sqrt{-\eta(s+v_{k+1},s+v_{k+1})}\ge\sqrt{-\eta(s,s)}+\sqrt{-\eta(v_{k+1},v_{k+1})}\ge\sum_{i=1}^{k}\sqrt{-\eta(v_i,v_i)}+\sqrt{-\eta(v_{k+1},v_{k+1})}$, the second inequality being the induction hypothesis. [step 4.1, L5, algebra]

6.1 Equality in the interior inequality of (b) for $0<t<1$ holds if and only if $tv$ and $(1-t)w$ are positive proportional, by the equality case of (a) established in step 5.1 applied to the interior inequality of (b) of step 4.2; since $t>0$ and $1-t>0$, this is equivalent to $v$ and $w$ being positive proportional; at $t=0$ and $t=1$ the inequality reduces to an identity $b\ge b$ or $a\ge a$, and the statement makes no interior equality claim there, so (b) is proved. [step 4.2, step 5.1, L5]

6.2 Induction step, equality characterization: with the notation of step 5.2, if equality holds for the $k+1$ vectors, then both inequalities in the chain of step 5.2 are equalities; the second equality means that the equality case of the induction hypothesis applies to $v_1,\dots,v_k$, so there are a future timelike $u$ and reals $c_1,\dots,c_k>0$ with $v_i=c_iu$ and $s=(\sum_{i=1}^kc_i)u$; the first equality is the equality case of (a) for $s$ and $v_{k+1}$, so $s$ and $v_{k+1}$ are positive proportional, and since $s\neq0$ this gives $v_{k+1}=c_{k+1}u$ for some real $c_{k+1}>0$, so all $k+1$ vectors are positive multiples of the single future timelike vector $u$; conversely, if $v_i=c_iu$ with $c_i>0$ and $u$ future timelike for $i=1,\dots,k+1$, then $v_1+\cdots+v_{k+1}=(\sum_ic_i)u$ and bilinearity with uniqueness of the nonnegative root give $\sqrt{-\eta(\sum_iv_i,\sum_iv_i)}=(\sum_ic_i)\sqrt{-\eta(u,u)}=\sum_i\sqrt{-\eta(v_i,v_i)}$, so equality holds. [step 5.2, step 5.1, F1, L4, L5, algebra]

7.1 By [L6], applied to the property "$v_1,\dots,v_k$ future timelike implies the conclusions of (c) for these vectors", the base case of step 3.3 and the induction steps 5.2 and 6.2 prove (c) for every integer $k\ge1$: membership and inequality from step 5.2, and the equality characterization from step 6.2. [step 3.3, step 5.2, step 6.2, L6] ∎
