---
id: def-em-retarded-point-geometry
kind: definition
title: "Uniformly subluminal prescribed worldline, retarded root and retarded geometric data off the worldline"
domain: physics
status: published
origin: pipeline
dependency_level: 19
deps: [def-em-lab-geometry, def-em-si-conventions, def-em-relativistic-worldlines-frames, post-em-radiation-selection, lem-em-global-retarded-root, def-ck-euclidean-maps-and-diffeomorphisms, def-euclidean-inner-product, def-em-sources]
dependency_roles:
  def-em-lab-geometry: formulation-prerequisite
  def-em-si-conventions: formulation-prerequisite
  def-em-relativistic-worldlines-frames: formulation-prerequisite
  post-em-radiation-selection: formulation-prerequisite
  lem-em-global-retarded-root: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  def-em-sources: formulation-prerequisite
provenance:
  statement: ai-altered
  proof: not-applicable
physical_scope: "Kinematic definition of the retarded emission data of a prescribed uniformly subluminal $C^3$ worldline in the framework's laboratory chart: retarded root, distance, direction, speed ratio, emission-time Jacobian and emitted-sphere family off the worldline. Excluded: any field, Maxwell equation, dynamics, force law, self-force, radiation reaction, existence under a merely pointwise subluminal or finite-history curve, and every empirical or measurement claim."
sources:
  references:
    - title: "David Tong, Electromagnetism, University of Cambridge Part II Mathematical Tripos lecture notes (author-hosted 236-page PDF, title page dated Lent Term 2015)"
      url: "https://davidtong.org/pdfs/teaching/electromagnetism/electro.pdf"
      locator: "$\\S6.4.1$ printed pp. 158-159, equations (6.33)-(6.36): the retarded potentials and implicit retarded-time equation. The sufficient all-time uniform bound $v_*<c$ and its global-existence proof are supplied locally by the cited root lemma."
    - title: "N. Beisert, Elektrodynamik, ETH Zurich 2024 FS (author-hosted 176-page script)"
      url: "https://people.phys.ethz.ch/~nbeisert/lectures/ED-24FS-Skript.pdf"
      locator: "$\\S11.5$ printed pp. 11.15-11.17 (PDF pp. 135-137): point-source potentials and the implicit retarded root, equations (11.74)-(11.81). The source asserts global existence under pointwise subluminality on pp. 11.15-11.16; the counterexample and the sufficient uniform-bound repair are local library arguments, not cautions stated in the source."
    - title: "R. Fitzpatrick, Classical Electromagnetism: An intermediate level course, University of Texas at Austin (complete author-hosted HTML lecture notes, document dated 2006-02-02)"
      url: "https://farside.ph.utexas.edu/teaching/em/lectures/node50.html"
      locator: "Node 124 ('Potential due to a moving charge') of chapter 10: the retarded-time construction for a moving charge, with the particle speed assumed below $c$."
---

## Definition

Let the laboratory region, inertial chart, spatial Euclidean structure and SI units be those of [[def-em-lab-geometry]] and [[def-em-si-conventions]], in particular $c>0$, $\mu_0>0$, $\varepsilon_0=(\mu_0c^2)^{-1}$. A **retarded point-geometry datum** consists of a real charge parameter $q\in\mathbb R$ in coulombs ([[def-em-sources]](a)) and a prescribed map $z:\mathbb R\to\mathbb R^3$ of class $C^3$ ([[def-ck-euclidean-maps-and-diffeomorphisms]]) together with a constant $0\le v_*<c$ such that $|z'(s)|\le v_*$ for every $s\in\mathbb R$ ([[def-euclidean-inner-product]]); the spacetime curve $s\mapsto(z(s),s)$ is the laboratory reading of a prescribed massive future timelike worldline of the physical model ([[def-em-relativistic-worldlines-frames]]), and $v_*$ is a declared bound on its coordinate speed, not a measured quantity. Write $\Gamma:=\{(z(s),s):s\in\mathbb R\}$ and $D:=\{(x,t)\in\mathbb R^3\times\mathbb R:x\ne z(t)\}$ for the open off-worldline observation domain. Then:

(a) [Retarded root] For every observation event $(x,t)\in D$ there is exactly one $s=s(x,t)<t$ with $t-s=|x-z(s)|/c$; the map $s:D\to\mathbb R$ is of class $C^3$, and with the data of (b) below one has $\partial_ts=1/\kappa$ and $\nabla_xs=-n/(c\kappa)$ ([[lem-em-global-retarded-root]], whose $C^3$ branch applies because $z$ is $C^3$ and uniformly subluminal).

(b) [Retarded data] For $(x,t)\in D$ define $R:=x-z(s(x,t))$, $r:=|R|>0$, $n:=R/r$, $\beta:=z'(s(x,t))/c$, $\kappa:=1-n\cdot\beta$, $\dot\beta:=z''(s(x,t))/c$; then $r=c(t-s)$ and $\kappa\in[1-v_*/c,\,1+v_*/c]\subseteq(0,\infty)$. On $D$ the objects $r$ and $n$ are of class $C^3$, $\beta$ and $\kappa$ are of class $C^2$, and $\dot\beta$ is of class $C^1$ (each is a composition of the $C^3$ root with $z$ or its derivatives).

(c) [Emission-event data and emitted spheres] At an emission event $s_0\in\mathbb R$ and a direction $n\in S^2$ put $x_r:=z(s_0)+rn$, $t_r:=s_0+r/c$ for $r>0$, and $\beta_0:=z'(s_0)/c$, $\kappa_0:=1-n\cdot\beta_0$. Then $(x_r,t_r)\in D$ and $s(x_r,t_r)=s_0$ for every $r>0$: the sphere $\{x_r\}$ at observation time $t_r$ is emitted at the single event $s_0$.

(d) [Branches and scope] Only the all-time uniformly subluminal branch (a)-(c) is defined by this datum. For a curve prescribed on a finite interval $J$ the same formulas define retarded data only at observation events for which the root equation has a solution $s\in J$; each consumer must assume that cone intersection explicitly. Pointwise subluminality $|z'(s)|<c$ for every finite $s$ does not imply (a): the companion example on the examples page exhibits a smooth curve with $|z'|<c$ pointwise for which the retarded equation has no root at some event, so the uniform bound $v_*<c$, or an explicit cone-intersection hypothesis, is part of the datum. This definition is kinematic: it fixes the root, the retarded data and the notation, and asserts no field, no dynamics, no force law, no self-force and no empirical content. The identification of these data with the emission data of the physical field is made by the selection postulate [[post-em-radiation-selection]] together with the theorems of this page.

## Well-definedness notes

Clauses (a)-(b) are exactly the all-time uniformly subluminal $C^3$ branch of [[lem-em-global-retarded-root]]: that lemma supplies, for every event of $\mathbb R^3\times\mathbb R$, existence and uniqueness of the root, the identity of the equality case $s=t$ with $x=z(t)$, the strict inequality $s<t$ on $D$, the derivative formulas with $1-v_*/c\le\kappa\le1+v_*/c$, and the $C^k$ regularity of the root on $D$ for a $C^k$ trajectory; no new analysis is introduced here. Clause (c) is the elementary root check $t_r-s_0=|x_r-z(s_0)|/c=r/c$ combined with the uniqueness in clause (a); no boundedness of $z''$ is used. Clause (d) records the branch boundaries honestly: the finite-history and nonuniform cases are left to consumers, and the failure of existence under mere pointwise subluminality is exhibited on the examples page rather than asserted here. The phrase 'prescribed worldline' is licensed by [[def-em-relativistic-worldlines-frames]](a) and (c), which relate chart readings $t\mapsto r(t)$ of massive worldlines to the condition $|r'(t)|<c$. The definition introduces no physical field, so no Maxwell, self-force or empirical assertion is made; the cross-reference to [[post-em-radiation-selection]] records that the retarded root is the kinematic object that the adopted selection turns into an emission time. No choice principle is used in the root lemma or in these kinematic constructions; its higher-regularity branch is explicitly choice-free.
