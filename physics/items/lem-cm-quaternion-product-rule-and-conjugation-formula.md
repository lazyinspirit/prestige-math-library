---
id: lem-cm-quaternion-product-rule-and-conjugation-formula
kind: lemma
title: "The product rule for quaternion and matrix curves, multiplicativity of the quaternion norm, and the conjugation formula $q\\,\\varphi(v)\\,\\bar q=\\varphi\\bigl((a^{2}-\\|u\\|^{2})v+2\\langle u,v\\rangle u+2a\\,(u\\times v)\\bigr)$"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 2
deps: [def-cm-quaternion-rotation-map-and-cover, def-quaternions, thm-quaternions-form-a-division-ring, def-euclidean-inner-product, def-cross-product-in-r3, lem-cross-product-is-bilinear-alternating-and-orthogonal, def-vector-valued-derivative-and-integral, thm-algebra-of-derivatives, def-ck-euclidean-maps-and-diffeomorphisms, def-matrix-product-and-identity-matrix, thm-sine-and-cosine-addition-formulas, cor-trigonometric-parity-and-pythagorean-identity]
dependency_roles:
  def-cm-quaternion-rotation-map-and-cover: mathematical-premise
  def-quaternions: mathematical-premise
  thm-quaternions-form-a-division-ring: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  def-cross-product-in-r3: mathematical-premise
  lem-cross-product-is-bilinear-alternating-and-orthogonal: mathematical-premise
  def-vector-valued-derivative-and-integral: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  def-matrix-product-and-identity-matrix: mathematical-premise
  thm-sine-and-cosine-addition-formulas: mathematical-premise
  cor-trigonometric-parity-and-pythagorean-identity: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "J. Sola, Quaternion kinematics for the error-state Kalman filter (arXiv:1711.02508), Section 1.2 (quaternion product, conjugate, norm and inverse: equations (24)-(30)), printed page 8, and Section 2.5 (the quaternion-to-rotation-matrix formula R = (q_w^2 - q_v^T q_v) I + 2 q_v q_v^T + 2 q_w [q_v]_x, equation (117)), printed page 25"
      url: "https://arxiv.org/pdf/1711.02508"
    - title: "P. Etingof, MIT 18.745 Lie Groups and Lie Algebras I (Fall 2020), Section 6.2 (quaternions: conjugate, norm, anti-automorphism and multiplicativity |q_1 q_2| = |q_1||q_2|), printed pages 39-40"
      url: "https://ocw.mit.edu/courses/18-745-lie-groups-and-lie-algebras-i-fall-2020/mit18_745_f20_lec_full.pdf"
    - title: "A. W. Knapp, Lie Groups Beyond an Introduction, Digital Second Edition (2023), Introduction, Section I.8 (quaternion algebra: x xbar = |x|^2, Re xy = Re yx), printed pages 56-58"
      url: "https://www.math.stonybrook.edu/~aknapp/download/Beyond2.pdf"
verification:
  precheck: pass
---

## Statement

Let $I\subseteq\mathbb R$ be a nondegenerate open interval, let $\mathbb H$ be the quaternions, and let $\varphi:\mathbb R^3\to\operatorname{Im}\mathbb H$ be the identification of [[def-cm-quaternion-rotation-map-and-cover]].

1. **Product form and product rule.** For $p=s+\varphi(u)$ and $q=t+\varphi(w)$ with $s,t\in\mathbb R$ and $u,w\in\mathbb R^3$ one has $pq=\bigl(st-\langle u,w\rangle_2\bigr)+\varphi\bigl(sw+tu+u\times w\bigr)$. If moreover $p,q:I\to\mathbb H$ are of class $C^1$ (componentwise, [[def-ck-euclidean-maps-and-diffeomorphisms]]), then $pq:I\to\mathbb H$ is $C^1$ and $(pq)'=p'q+pq'$. Likewise, if $A,B:I\to M_3(\mathbb R)$ are of class $C^1$, then $AB$ is $C^1$ and $(AB)'=A'B+AB'$.
2. **Conjugation and norm.** For all $p,q\in\mathbb H$ one has $\overline{pq}=\bar q\,\bar p$ and $N(pq)=N(p)N(q)$, and $\operatorname{Re}(p\bar q)=\langle p,q\rangle_2$ for $\operatorname{Re}(x):=x_0$ and the Euclidean inner product of [[def-euclidean-inner-product]]. For a $C^1$ curve $q:I\to\mathbb H$, the curves $\bar q$ and $N\circ q$ are $C^1$ with $\overline{q}'=\overline{q'}$ and

$$(N\circ q)'=2\operatorname{Re}(q'\bar q)=2\langle q',q\rangle_2 .$$

3. **Conjugation formula.** If $q=a+\varphi(u)$ with $a\in\mathbb R$ and $u\in\mathbb R^3$, and $v\in\mathbb R^3$, then

$$q\,\varphi(v)\,\bar q=\varphi\Bigl((a^2-\|u\|_2^2)\,v+2\langle u,v\rangle_2\,u+2a\,(u\times v)\Bigr);$$

in particular $q\,\varphi(v)\,\bar q$ is imaginary for every $q\in\mathbb H$, that is, its real part is $0$.
4. **Axis-angle form.** If $N(q)=1$ and $q=\cos(\theta/2)+\varphi(\hat n)\sin(\theta/2)$ with $\theta\in\mathbb R$ and $\hat n\in\mathbb R^3$, $\|\hat n\|_2=1$, then for every $v\in\mathbb R^3$

$$\rho(q)\bigl(\varphi(v)\bigr)=\varphi\Bigl(\cos\theta\,v+(1-\cos\theta)\langle \hat n,v\rangle_2\,\hat n+\sin\theta\,(\hat n\times v)\Bigr).$$

## Facts & Assumptions

**Given:** The interval $I$, the identification $\varphi$ of [[def-cm-quaternion-rotation-map-and-cover]], curves and vectors as in the clauses, and $q=a+\varphi(u)\in\mathbb H$ with $a\in\mathbb R$, $u\in\mathbb R^3$.

[F1] Quaternion multiplication is given by the explicit bilinear formula of [[def-quaternions]]; writing $x=s+\varphi(w)$ and $y=t+\varphi(z)$ with $s,t\in\mathbb R$ and $w,z\in\mathbb R^3$ one has $xy=(st-\langle w,z\rangle_2)+\varphi(sz+tw+w\times z)$. The conjugate is $\bar x=s-\varphi(w)$, the real norm is $N(x)=s^2+\|w\|_2^2$, and $\widehat{N(x)}=x\bar x=\bar x x$; for $x\ne0$, $x^{-1}=\widehat{N(x)^{-1}}\bar x$. Every embedded real scalar $\hat r$ commutes with every quaternion ([[def-quaternions]], [[thm-quaternions-form-a-division-ring]]).

[F2] The Euclidean inner product is $\langle w,z\rangle_2=\sum_{j=1}^{3}w_jz_j$ with $\|w\|_2^2=\langle w,w\rangle_2$ ([[def-euclidean-inner-product]]), and the cross product is given by $u\times v=(u_2v_3-u_3v_2,\ u_3v_1-u_1v_3,\ u_1v_2-u_2v_1)$ with $\langle u\times v,w\rangle_2=\det[u\ v\ w]$, so that $(u\times v)\cdot u=(u\times v)\cdot v=0$ ([[def-cross-product-in-r3]], [[lem-cross-product-is-bilinear-alternating-and-orthogonal]]).

[F3] A curve $f:I\to\mathbb R^n$ is differentiable if and only if all its components are, and then $f'$ is the componentwise derivative; sums and scalar multiples are differentiated componentwise ([[def-vector-valued-derivative-and-integral]]), and for real functions $(fg)'=f'g+fg'$ ([[thm-algebra-of-derivatives]]). A curve is of class $C^1$ when all components have continuous first derivatives, and a composition with a $C^1$ map is $C^1$ ([[def-ck-euclidean-maps-and-diffeomorphisms]]).

[F4] The entries of a matrix product are $(AB)_{ij}=\sum_{k=1}^{3}A_{ik}B_{kj}$ ([[def-matrix-product-and-identity-matrix]]).

[F5] For all real $x,y$: $\sin(x+y)=\sin x\cos y+\cos x\sin y$, $\cos(x+y)=\cos x\cos y-\sin x\sin y$, and $\sin^2x+\cos^2x=1$ ([[thm-sine-and-cosine-addition-formulas]], [[cor-trigonometric-parity-and-pythagorean-identity]]).

[F6] For unit $q\in S^3$ one has $q^{-1}=\bar q$ and $\rho(q)=c_q|_{\operatorname{Im}\mathbb H}$ is $c_q(x)=qx\bar q$ ([[def-cm-quaternion-rotation-map-and-cover]]).

## Proof

**Proof technique:** direct; finite coordinate expansions for the algebraic identities, then the product rule.

1.1 The multiplication formula of [F1] is bilinear over $\mathbb R$ with integer coefficients, and in the form $x=s+\varphi(w)$, $y=t+\varphi(z)$ it reads $xy=(st-\langle w,z\rangle_2)+\varphi(sz+tw+w\times z)$: the scalar part is $st-(x_1y_1+x_2y_2+x_3y_3)=st-\langle w,z\rangle_2$ and the three vector coordinates are $sz_j+tw_j+(w\times z)_j$ by the coordinate formula of the cross product in [F2]. [F1, F2, algebra]

1.2 From [F1] the scalar part of $p\bar q$ is $\sum_{j=0}^{3}p_jq_j=\langle p,q\rangle_2$, which is the displayed identity $\operatorname{Re}(p\bar q)=\langle p,q\rangle_2$. If $q:I\to\mathbb H$ is $C^1$ with components $q_0,\dots,q_3$, then $\bar q$ has components $q_0,-q_1,-q_2,-q_3$, which are $C^1$ with derivatives $q_0',-q_1',-q_2',-q_3'$, so $\bar q$ is $C^1$ and $\overline{q}'=\overline{q'}$ by [F3]. [F1, F2, F3, algebra]

2.1 Both maps $(p,q)\mapsto\overline{pq}$ and $(p,q)\mapsto\bar q\bar p$ from $\mathbb H\times\mathbb H$ to $\mathbb H$ are $\mathbb R$-bilinear; on the sixteen pairs of basis elements $1,i,j,k$ they agree — for instance $\overline{ij}=\bar k=-k$ and $\bar j\bar i=(-j)(-i)=ji=-k$, and the remaining pairs are the same computation with signs — hence they agree on all of $\mathbb H$. Using the real embedding in [F1], $\widehat{N(pq)}=(pq)\overline{(pq)}=pq\bar q\bar p=p\widehat{N(q)}\bar p=\widehat{N(q)}p\bar p=\widehat{N(q)}\widehat{N(p)}=\widehat{N(p)N(q)}$. The embedded scalar commutes with $p,\bar p$ by [F1], and $r\mapsto\hat r$ is injective by its first coordinate, so $N(pq)=N(p)N(q)$ in $\mathbb R$. [step 1.1, F1, algebra]

2.2 Write $q=a+\varphi(u)$, $\bar q=a-\varphi(u)$. By [step 1.1], $q\,\varphi(v)=-\langle u,v\rangle_2+\varphi(av+u\times v)$, so with $x:=-\langle u,v\rangle_2+\varphi(av+u\times v)$ and $y:=a-\varphi(u)$ the product formula of [step 1.1] gives $q\,\varphi(v)\,\bar q=xy=\bigl(-\langle u,v\rangle_2a-\langle av+u\times v,-u\rangle_2\bigr)+\varphi\bigl(\langle u,v\rangle_2u+a(av+u\times v)-(av+u\times v)\times u\bigr)$. The scalar part is $-a\langle u,v\rangle_2+\bigl(a\langle v,u\rangle_2+(u\times v)\cdot u\bigr)=0$, because $(u\times v)\cdot u=0$ by [F2]. In the vector part, $-a(v\times u)=a(u\times v)$. Writing $u=(u_1,u_2,u_3)$ and $v=(v_1,v_2,v_3)$, the coordinate formula [F2] gives $(u\times v)\times u=\bigl((u_2^2+u_3^2)v_1-u_1u_2v_2-u_1u_3v_3,\ (u_1^2+u_3^2)v_2-u_1u_2v_1-u_2u_3v_3,\ (u_1^2+u_2^2)v_3-u_1u_3v_1-u_2u_3v_2\bigr)=\|u\|_2^2v-\langle u,v\rangle_2u$. Substitution makes the vector part $(a^2-\|u\|_2^2)v+2\langle u,v\rangle_2u+2a(u\times v)$. This proves clause 3. [step 1.1, F1, F2, algebra]

2.3 Let $p,q:I\to\mathbb H$ be $C^1$. Each component of $pq$ is, by [step 1.1], a finite sum of terms $\pm p_iq_j$; each such term is differentiable with derivative $\pm(p_i'q_j+p_iq_j')$ by the real product rule in [F3], and derivatives of sums are sums of derivatives; the resulting components are continuous because $p_i',q_j'$ are. Hence $pq$ is $C^1$ and $(pq)'=p'q+pq'$. For $C^1$ curves $A,B:I\to M_3(\mathbb R)$ the same argument applies to the entries $(AB)_{ij}=\sum_kA_{ik}B_{kj}$ of [F4], giving $(AB)'=A'B+AB'$. If $q:I\to\mathbb H$ is $C^1$, the real-valued coordinate formula $N(q)=\sum_{j=0}^3q_j^2$ and the real product rule give $(N\circ q)'=2\sum_{j=0}^3q_j'q_j=2\langle q',q\rangle_2=2\operatorname{Re}(q'\bar q)$ by [step 1.2]; thus $N\circ q$ is $C^1$. The conjugate curve is $C^1$ by [step 1.2]. [step 1.1, step 1.2, F1, F2, F3, F4, algebra]

3.1 Under the hypotheses of clause 4, $N(q)=1$ gives $a^2+\|\varphi(\hat n)\sin(\theta/2)\|_2^2=1$ and $q=a+\varphi(\hat n)\sin(\theta/2)$ with $a=\cos(\theta/2)$; by [F6] and [step 2.2], $\rho(q)(\varphi(v))=q\,\varphi(v)\,\bar q=\varphi\bigl((\cos^2(\theta/2)-\sin^2(\theta/2))v+2\sin^2(\theta/2)\langle \hat n,v\rangle_2\hat n+2\cos(\theta/2)\sin(\theta/2)(\hat n\times v)\bigr)$. The addition formula of [F5] with $x=y=\theta/2$ gives $\cos\theta=\cos^2(\theta/2)-\sin^2(\theta/2)$ and $\sin\theta=2\sin(\theta/2)\cos(\theta/2)$; and $\sin^2(\theta/2)+\cos^2(\theta/2)=1$ gives $2\sin^2(\theta/2)=1-\cos\theta$. Substituting these three identities proves clause 4. [step 2.2, F5, F6, algebra] ∎

## Remarks

- Clause 3 is stated for arbitrary $q$ and is a purely algebraic identity; only in clause 4 and in the definition of $\rho$ is the unit condition used, through $q^{-1}=\bar q$. No division by $\|u\|_2$ or by the vector part of $q$ occurs anywhere, so $q=\pm1$ is included.

- The identity of clause 4 is the Rodrigues axis-angle formula in quaternion form: for $N(q)=1$, the linear map $\rho(q)$ fixes $\varphi(\hat n)$ and rotates the plane $\hat n^{\perp}$ by the angle $\theta$. This is a computation about the map $\rho$; no statement about any physical rotation, its rate, or a choice of orientation is made by the lemma itself.

- The multiplicativity $N(pq)=N(p)N(q)$ is used in the following lemma to estimate the quaternion angular-velocity equation, and the product rule is used to differentiate curves of rotations and of unit quaternions. Both are recorded here once in the form in which they are consumed.
