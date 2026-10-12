---
id: ex-cm01-two-particle-rigid-rod-configuration
kind: example
title: "Configuration domains of two labeled particles: collision exclusion and a rigid rod as a regular holonomic constraint"
status: draft
origin: session
domain: physics
dependency_level: 7
deps: [def-cm01-configuration, post-cm01-worldlines, def-cm-constrained-configuration-and-mass-metric, thm-a-regular-level-set-is-an-embedded-submanifold, def-euclidean-inner-product]
dependency_roles:
  def-cm01-configuration: formulation-prerequisite
  post-cm01-worldlines: formulation-prerequisite
  def-cm-constrained-configuration-and-mass-metric: mathematical-premise
  thm-a-regular-level-set-is-an-embedded-submanifold: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
physical_scope: "A worked verification for two labeled particles of the model: openness of the collision-excluded configuration domain, and the rigid-rod holonomic constraint as a regular level set of the squared-distance function with five configuration degrees of freedom and the two-particle mass operator. The example is a computation inside the definition of the configuration stage; it adopts no force law, asserts no motion and contains no empirical claim."
sources:
  references:
    - title: "G. J. Sussman and J. Wisdom, Structure and Interpretation of Classical Mechanics, second edition (MIT Press, 2014/2015), Section 1.1 'Configuration Spaces', extracted chapter page 2: two point particles constrained to fixed distance have a five-dimensional configuration space"
      url: "https://mitp-content-server.mit.edu/books/content/sectbyfn/books_pres_0/9579/sicm_edition_2.zip"
    - title: "D. Tong, Classical Dynamics (Cambridge lecture notes, January 2015 printing), Section 2.1, printed pages 10-13 (PDF pages 16-19): holonomic constraints, their dimension count and the requirement of independent constraint functions"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
    - title: "J. M. Lee, Introduction to Smooth Manifolds (2003 first edition), Level Sets, printed pages 104-105: the regular level set theorem with its nonemptiness and rank hypotheses"
      url: "https://math.mit.edu/~hrm/palestine/lee-smooth-manifolds.pdf"
verification:
  precheck: pass
---

## Example

Let $N=2$ labeled particles carry masses $m_{1},m_{2}>0$
([[post-cm01-worldlines]]), fix one inertial frame, and write a position pair
as $x=(x_{1},x_{2})\in\mathbb R^{6}=(\mathbb R^{3})^{2}$ with the inner product

$$\langle x,y\rangle_{6}=\langle x_{1},y_{1}\rangle_{2}+\langle x_{2},y_{2}\rangle_{2}$$

of [[def-cm-constrained-configuration-and-mass-metric]], where
$\langle\,\cdot\,,\cdot\,\rangle_{2}$ is the Euclidean inner product of
[[def-euclidean-inner-product]].

**Singular-force branch.** For a force model undefined at coincident
positions, exclude the collision set
$\Delta=\{x\in\mathbb R^{6}:x_{1}=x_{2}\}$ and take
$Q_{0}:=\mathbb R^{6}\setminus\Delta$.

**Rigid rod.** Let $\ell>0$ (in metres) and take the constraint function

$$G(x):=\|x_{1}-x_{2}\|_{2}^{2}-\ell^{2},\qquad G:\mathbb R^{6}\longrightarrow\mathbb R,$$

with the ambient set $O=\mathbb R^{6}$ and $k=1$ in the notation of
[[def-cm01-configuration]]. The zero set $Q:=G^{-1}(0)$ is the configuration
space of two particles whose mutual distance is the fixed length $\ell$; the
case is a holonomic constraint branch of the definition.

## Facts & Assumptions

**Given:** The two labeled particles with masses $m_{1},m_{2}>0$, the position space $\mathbb R^{6}$ with the inner product $\langle\cdot,\cdot\rangle_{6}$, the collision set $\Delta$ and the function $G$ above with $\ell>0$.

[L1] Configuration domains: the unconstrained domain of the model is a stated open set $Q\subseteq\mathbb R^{3N}$, the collision exclusion removes the set $\Delta$ when the force law is undefined there, and the holonomic branch takes $Q=G^{-1}(0)$ for a smooth $G$ with nonempty zero set and $DG$ of rank $k$ on it; the degrees of freedom are $\dim Q=3N-k$, where $N$ is the number of labels and $k$ the number of independent constraint components ([[def-cm01-configuration]]).

[L2] Regular level set theorem: for a smooth map $F:M^{m}\to N^{n}$ with regular value $q$ and nonempty $F^{-1}(q)$, the level set is an embedded submanifold of codimension $n$, that is, of dimension $m-n$ ([[thm-a-regular-level-set-is-an-embedded-submanifold]]).

[L3] The particle configuration $(Q,X)$ with inclusion $X:Q\hookrightarrow\mathbb R^{6}$, the mass matrix $M(x_{1},x_{2})=(m_{1}x_{1},m_{2}x_{2})$ and the mass metric $G_{q}(u,v)=\langle dX_{q}(u),M\,dX_{q}(v)\rangle_{6}$ ([[def-cm-constrained-configuration-and-mass-metric]]).

[L4] The Euclidean inner product $\langle\cdot,\cdot\rangle_{2}$ is bilinear, symmetric and positive definite, and $\|z\|_{2}^{2}=\langle z,z\rangle_{2}$ ([[def-euclidean-inner-product]]).

## Verification

**Proof technique:** direct; exhibit the openness of the collision-excluded domain by an explicit radius, compute the differential of $G$ and apply the regular level set theorem.

1.1 $\Delta$ is closed, hence $Q_{0}=\mathbb R^{6}\setminus\Delta$ is open: for $x\notin\Delta$ the number $\delta:=\|x_{1}-x_{2}\|_{2}$ is positive, and every $y\in\mathbb R^{6}$ with $\|y-x\|_{2}<\delta/4$ satisfies $\|y_{1}-y_{2}\|_{2}\ge\|x_{1}-x_{2}\|_{2}-\|y_{1}-x_{1}\|_{2}-\|y_{2}-x_{2}\|_{2}>\delta-\delta/4-\delta/4=\delta/2>0$, so $y\notin\Delta$; the ball of radius $\delta/4$ about $x$ therefore lies in $Q_{0}$, and $Q_{0}$ is open as required by [L1]. [L1, L4, algebra]

1.2 The differential of $G$: for $x\in\mathbb R^{6}$ and $u=(u_{1},u_{2})\in\mathbb R^{6}$ one has $G(x+su)-G(x)=2s\langle x_{1}-x_{2},u_{1}-u_{2}\rangle_{2}+s^{2}\|u_{1}-u_{2}\|_{2}^{2}$ by bilinearity of the inner product [L4], so $DG(x)(u)=2\langle x_{1}-x_{2},\,u_{1}-u_{2}\rangle_{2}$; this linear functional is nonzero exactly when $x_{1}\ne x_{2}$, since it vanishes for all $u$ only if $x_{1}=x_{2}$, while if $x_{1}\ne x_{2}$ then $u=(x_{1}-x_{2},0)$ gives $DG(x)(u)=2\|x_{1}-x_{2}\|_{2}^{2}>0$; hence $DG(x)$ has rank $1$ exactly on the complement of $\Delta$. [L4, algebra]

2.1 On the zero set the rank condition holds: if $G(x)=0$ then $\|x_{1}-x_{2}\|_{2}^{2}=\ell^{2}>0$, so $x_{1}\ne x_{2}$ and $DG(x)$ is surjective by step 1.2; and $G^{-1}(0)\ne\varnothing$, for instance $x_{1}=0$ and $x_{2}=\ell e_{1}$ give $G(x)=\ell^{2}-\ell^{2}=0$; thus $0$ is a regular value of $G$ with nonempty level set. [step 1.2, L4, algebra]

3.1 By the regular level set theorem [L2], applied to the smooth map $G:\mathbb R^{6}\to\mathbb R$ with the regular value $0$, the set $Q=G^{-1}(0)$ is an embedded submanifold of $\mathbb R^{6}$ of dimension $6-1=5$; by [L1] the rigid-rod branch therefore has $5=3\cdot2-1$ configuration degrees of freedom, in agreement with the identification of the same constraint in the cited treatment. With the masses $m_{1},m_{2}$, the pair consisting of $Q$ and the inclusion is a particle configuration whose mass matrix is $M=\operatorname{diag}(m_{1}I_{3},m_{2}I_{3})$ and whose mass metric is that of [L3]; the constraint function $G$ has dimension $\ell^{2}$, and rescaling it by any nonzero constant leaves both its zero set and the rank condition on that set unchanged, as recorded in [L1]. [step 2.1, L1, L2, L3, algebra] ∎

## Remarks

- The example exhibits both branches of [[def-cm01-configuration]] for the same two-particle model: without the rod the model uses the open domain $Q_{0}$ with the collision configurations excluded; with the rod it uses the five-dimensional embedded submanifold $Q$. The two are alternatives of one model, not descriptions of one system at one time, and each would be paired with its own force law when the dynamics is adopted.

- A constraint expressed as $\|x_{1}-x_{2}\|_{2}-\ell=0$ has the same zero set $Q$ and, on it, the same regular-value property, since $\|x_{1}-x_{2}\|_{2}=\ell>0$ there and the squared-distance function is smooth near $Q$ with nonzero gradient; the choice $G=\|x_{1}-x_{2}\|_{2}^{2}-\ell^{2}$ keeps the computation polynomial and is the one displayed. No physical claim depends on which of the two representative functions is used.
