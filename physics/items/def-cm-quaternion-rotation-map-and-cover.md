---
id: def-cm-quaternion-rotation-map-and-cover
kind: definition
title: "The quaternion rotation map $\\rho$: conjugation on the imaginary quaternions, the unit sphere $S^3$, and quaternion lifts"
status: published
origin: pipeline
domain: mathematics
dependency_level: 1
deps: [def-quaternions, thm-quaternions-form-a-division-ring, def-cm-special-orthogonal-group, ex-su-two-to-so-three-as-a-covering-homomorphism, def-euclidean-inner-product, def-countable-choice]
dependency_roles:
  def-quaternions: mathematical-premise
  thm-quaternions-form-a-division-ring: mathematical-premise
  def-cm-special-orthogonal-group: mathematical-premise
  ex-su-two-to-so-three-as-a-covering-homomorphism: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  def-countable-choice: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "P. Etingof, MIT 18.745 Lie Groups and Lie Algebras I (Fall 2020), Exercise 3.9 (conjugation action of SU(2) on traceless Hermitian matrices and the covering SU(2) -> SO(3)), printed page 26, and Proposition 6.7 (unit quaternions are isomorphic to SU(2)), printed page 40"
      url: "https://ocw.mit.edu/courses/18-745-lie-groups-and-lie-algebras-i-fall-2020/mit18_745_f20_lec_full.pdf"
    - title: "A. W. Knapp, Lie Groups Beyond an Introduction, Digital Second Edition (2023), Introduction, Problems 7-9 (construction of a smooth homomorphism SU(2) -> SO(3) with kernel {+I,-I}), printed pages 20-21, and Section I.8 (the quaternion division algebra, conjugation, Re xy = Re yx), printed pages 56-58"
      url: "https://www.math.stonybrook.edu/~aknapp/download/Beyond2.pdf"
    - title: "J. Sola, Quaternion kinematics for the error-state Kalman filter (arXiv:1711.02508), Section 2.3 (the rotation group and the rotation matrix: R^T R = I, det R = 1, the group SO(3)), printed pages 14-19, and Section 2.4.6 (the double cover of SO(3); R{-q} = R{q}), printed page 24"
      url: "https://arxiv.org/pdf/1711.02508"
verification:
  precheck: pass
---

## Definition

Let $\mathbb H$ be the quaternion algebra with its product, conjugation $x\mapsto\bar x$, real-valued norm $N:\mathbb H\to\mathbb R$, and real embedding $r\mapsto\hat r=(r,0,0,0)$, in the notation of [[def-quaternions]]. Thus $x=x_0+x_1i+x_2j+x_3k$ with the multiplication formula of [[def-quaternions]], and

$$N(x)=x_0^2+x_1^2+x_2^2+x_3^2,\qquad \widehat{N(x)}=x\bar x=\bar x x.$$

In particular, $N(x)>0$ for $x\ne0$, and the imported division-ring theorem gives the typed inverse formula $x^{-1}=\widehat{N(x)^{-1}}\,\bar x$ ([[thm-quaternions-form-a-division-ring]]). Under the identification of $\mathbb H$ with $\mathbb R^4$ by the coordinates $x_0,\dots,x_3$ one has $N(x)=\|x\|_2^2$ for the Euclidean norm of [[def-euclidean-inner-product]].

**Imaginary quaternions and the vector identification.** Put

$$\operatorname{Im}\mathbb H:=\{x\in\mathbb H:\bar x=-x\}=\mathbb Ri\oplus\mathbb Rj\oplus\mathbb Rk,\qquad \varphi:\mathbb R^3\to\operatorname{Im}\mathbb H,\quad \varphi(v_1,v_2,v_3):=v_1i+v_2j+v_3k .$$

Then $\varphi$ is a linear isomorphism with $N(\varphi(v))=\|v\|_2^2$ for every $v\in\mathbb R^3$. Throughout the collection, $\varphi$ translates between vectors of $\mathbb R^3$ (their inner product $\langle\cdot,\cdot\rangle_2$, norm $\|\cdot\|_2$ and cross product) and imaginary quaternions inside quaternion products.

**The unit sphere.** Define

$$S^3:=\{q\in\mathbb H:N(q)=1\},$$

the unit sphere of $\mathbb H\cong\mathbb R^4$. The identification of $S^3$ with $SU(2)$ is the one of the published covering example `ex-su-two-to-so-three-as-a-covering-homomorphism`, which is also the source of the covering statement recorded in the second remark below; that example is linked from the page summary of this pair.

**Conjugation and the rotation map.** For $q\in\mathbb H$ with $q\ne0$ let $c_q:\mathbb H\to\mathbb H$ be

$$c_q(x):=qxq^{-1}=qx\,\widehat{N(q)^{-1}}\,\bar q,$$

where the real scalar is embedded by $r\mapsto\hat r$, and define

$$\rho(q):=c_q|_{\operatorname{Im}\mathbb H}:\operatorname{Im}\mathbb H\longrightarrow\operatorname{Im}\mathbb H .$$

Both the $\mathbb R$-linear map $\rho(q)$ and its matrix in the ordered basis $(i,j,k)$ of $\operatorname{Im}\mathbb H$ are written $\rho(q)$; the equality $\rho(q)\in SO(3)$ for $q\in S^3$ is part of the cited covering statement, and the matrix is the one meant whenever $\rho(q)$ is composed with the identifications above. The map $\rho$ itself is never linear in $q$ and no such structure is used.

**Quaternion lifts.** Let $I\subseteq\mathbb R$ be an interval and let $R:I\to SO(3)$ be a map, with $SO(3)$ as in [[def-cm-special-orthogonal-group]]. A **quaternion lift** of $R$ is a map $q:I\to S^3$ with $\rho(q(t))=R(t)$ for every $t\in I$.

## Remark

- **Well-definedness of $\rho$.** For $q\ne0$ the map $c_q$ is a real algebra automorphism of $\mathbb H$: it is $\mathbb R$-linear, fixes $1$, and satisfies $c_q(xy)=qxyq^{-1}=(qxq^{-1})(qyq^{-1})=c_q(x)c_q(y)$, with inverse $c_{q^{-1}}$. It also commutes with conjugation. Since $\overline{\hat r}=\hat r$ for every real $r$, the anti-automorphism law and the typed inverse formula give $\overline{q^{-1}}=\widehat{N(q)^{-1}}q$; since embedded real scalars commute with quaternions,

$$\overline{c_q(x)}=\overline{q^{-1}}\,\bar x\,\bar q=\widehat{N(q)^{-1}}q\bar x\bar q=q\bar x\,\widehat{N(q)^{-1}}\bar q=c_q(\bar x).$$

Therefore $x\in\operatorname{Im}\mathbb H$ (that is, $\bar x=-x$) gives $c_q(x)=-\overline{c_q(x)}$, so $c_q(x)\in\operatorname{Im}\mathbb H$. Thus the displayed codomain of $\rho(q)$ is correct, and $\rho(1)$ is the identity of $\operatorname{Im}\mathbb H$.

- **The cited double cover.** By the published covering example `ex-su-two-to-so-three-as-a-covering-homomorphism` — whose statement assumes the countable axiom of choice $\mathrm{AC}_\omega$ ([[def-countable-choice]]) — the assignment $q\mapsto\rho(q)$ on $S^3$ is a surjective two-sheeted covering homomorphism $S^3\to SO(3)$ of Lie groups with kernel $\{1,-1\}$. Equivalently: $\rho(q_1q_2)=\rho(q_1)\rho(q_2)$ for $q_1,q_2\in S^3$, every $R\in SO(3)$ has exactly two preimages $q$ and $-q$ in $S^3$, and $\rho(-q)=\rho(q)$. This double-cover conclusion is supplied by that item and is not reproved here; the pages that follow retain only the differential-equation and reconstruction content, and every later item that uses the kernel $\{1,-1\}$ or the two-preimage statement does so under this same countable-choice hypothesis, which is recorded again in its contract. The item is a published canonical root item; the pair's page summary carries the wikilink to it.

- **Scaling.** For $\lambda\in\mathbb R\setminus\{0\}$ and $q\ne0$ one has $c_{\hat\lambda q}=c_q$, because $(\hat\lambda q)x(\hat\lambda q)^{-1}=qxq^{-1}$; hence $\rho(\hat\lambda q)=\rho(q)$. Normalizing $q$ by the real scalar $\widehat{N(q)^{-1/2}}$ gives a unit quaternion, so each rotation is represented in $S^3$ by exactly the antipodal pair $\pm\widehat{N(q)^{-1/2}}q$; $\rho(-q)=\rho(q)$ is the case $\lambda=-1$.

- **Terminology.** "Lift" is used only in the displayed sense; no topological path-lifting theorem is assumed anywhere on this page. Existence, uniqueness and the differential equation of lifts are proved in the items that follow.
