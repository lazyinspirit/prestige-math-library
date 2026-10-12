---
id: pthm-cm07-newton-equivalence
kind: physics-theorem
title: "Stationary curves of the mechanical action are exactly the restrictions of the model's motions (global potential branch)"
status: draft
origin: session
domain: physics
dependency_level: 15
deps: [def-cm07-action-and-mechanical-lagrangian, pthm-cm07-euler-lagrange-equations, pthm-cm07-first-variation-and-euler-lagrange-expression, thm-cm-stationarity-iff-euler-lagrange, def-cm-time-dependent-lagrangian-and-action, def-cm03-potential-and-mechanical-energy, post-cm02-force-superposition, def-cm02-newtonian-flow, pthm-cm02-ivp, pthm-cm02-continuation, def-cm01-configuration, def-cm01-velocity-acceleration, def-cm01-units, def-interval, thm-heine-borel-rn, thm-continuous-image-of-a-compact-space-is-compact, def-continuity-real, def-vector-valued-derivative-and-integral, def-ck-euclidean-maps-and-diffeomorphisms]
dependency_roles:
  def-cm07-action-and-mechanical-lagrangian: formulation-prerequisite
  pthm-cm07-euler-lagrange-equations: physical-result
  pthm-cm07-first-variation-and-euler-lagrange-expression: physical-result
  thm-cm-stationarity-iff-euler-lagrange: mathematical-premise
  def-cm-time-dependent-lagrangian-and-action: mathematical-premise
  def-cm03-potential-and-mechanical-energy: formulation-prerequisite
  post-cm02-force-superposition: physical-assumption
  def-cm02-newtonian-flow: formulation-prerequisite
  pthm-cm02-ivp: physical-result
  pthm-cm02-continuation: physical-result
  def-cm01-configuration: formulation-prerequisite
  def-cm01-velocity-acceleration: formulation-prerequisite
  def-cm01-units: formulation-prerequisite
  def-interval: mathematical-premise
  thm-heine-borel-rn: mathematical-premise
  thm-continuous-image-of-a-compact-space-is-compact: mathematical-premise
  def-continuity-real: mathematical-premise
  def-vector-valued-derivative-and-integral: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
physical_scope: "The stationary-action principle for the global potential branch of the force model: every motion of the model restricts to a stationary curve of the mechanical action on each closed subinterval, and conversely every C^2 stationary curve on a closed interval is the restriction of the unique maximal motion of the model through its initial datum, so that the stationary curves are exactly the restrictions of motions. The equivalence is conditional on the adopted force branch, on the declared potential presentation with no residual forces, and on the cited existence, uniqueness and continuation theorems; it asserts no global existence, no minimisation property and no empirical statement."
sources:
  references:
    - title: "D. Tong, Classical Dynamics (Cambridge lecture notes, January 2015 printing), Section 2.1, printed pages 10-13 (PDF pages 16-19): Lagrange's equations as the stationarity condition of the action, equivalent to Newton's equations for a particle in a potential"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
    - title: "D. Cline, Variational Principles in Classical Mechanics (2nd edition, University of Rochester River Campus Libraries, open textbook, CC BY-NC-SA 4.0), Section 6.2: the Newtonian plausibility argument identifying the stationary curves of the action T - U with the Newtonian trajectories"
      url: "https://downloads.libretexts.org/api/v1/download/phys-9557/pdf"
    - title: "I. Stewart, Advanced Classical Mechanics (MIT 8.09/8.309 Fall 2014 course text), Section 1.2 and Chapter 2: uniqueness of Newtonian evolution from initial data and the equivalence of the Lagrangian and Newtonian descriptions"
      url: "https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/d9bac33f6c60b304dc0398e99b327102_MIT8_09F14_full.pdf"
verification:
  precheck: pass
---
## Statement

Adopt the force model with potential presentation $(U,d)$ and mechanical
Lagrangian $L=K-U$ of [[def-cm07-action-and-mechanical-lagrangian]], with
masses $m_{1},\dots,m_{N}>0$, open configuration domain $Q\subseteq\mathbb R^{3N}$,
time window $I_{0}$, mass operator $\mathsf M$ and $C^{2}$ potential
$U:I_{0}\times Q\to\mathbb R$ ([[def-cm03-potential-and-mechanical-energy]]).
Assume the presentation has **no residual forces**, $d\equiv0$, so that the
force map itself is $F_{i}(t,x,v)=-\nabla_{x_{i}}U(t,x)$. Then:

1. **motions are stationary.** If $x:J\to Q$ is a motion of the model on an
   interval $J$ with nonempty interior ([[def-cm02-newtonian-flow]]) and
   $a<b$ with $[a,b]\subseteq J\cap I_{0}$, then the restriction $x|_{[a,b]}$
   is stationary for the action $S$ on $[a,b]$.

2. **stationary curves are restrictions of motions.** If $a<b$ with
   $[a,b]\subseteq I_{0}$ and $x:[a,b]\to Q$ is a $C^{2}$ admissible curve that
   is stationary for $S$, then $x$ is the restriction to $[a,b]$ of the
   maximal motion of the model through the initial datum
   $\bigl(a,x(a),x'(a)\bigr)$ (whose existence and uniqueness are
   [[pthm-cm02-ivp]] clause 4); in particular the maximal interval of that
   motion contains $[a,b]$.

3. **identification.** Consequently the $C^{2}$ curves $x:[a,b]\to Q$ that are
   stationary for the action are exactly the restrictions to $[a,b]$ of the
   motions of the model whose maximal interval contains $[a,b]$, and the model
   equation satisfied is $\mathsf M x''=-\nabla_{x}U$ on that interval.

The statement is conditional on the adopted force branch and on the declared
potential presentation with $d\equiv0$; it asserts no existence of stationary
curves for arbitrary endpoint data, no minimisation and no empirical value.

## Facts & Assumptions

**Given:** The model data and presentation of the statement with $d\equiv0$, reals $a<b$ with $[a,b]\subseteq I_{0}$, and the curves occurring in clauses 1-3.

[F1] The chart instance ([[def-cm07-action-and-mechanical-lagrangian]], [[def-cm-time-dependent-lagrangian-and-action]]): $(O,L)$ with $O=I_{0}\times Q\times\mathbb R^{3N}$ is a time-dependent Lagrangian chart, and stationarity of admissible curves is the stationarity of that chart.

[F2] The identification of stationarity with the model's potential-part equation on the interval ([[pthm-cm07-euler-lagrange-equations]]): for a $C^{2}$ admissible curve $x:[a,b]\to Q$, stationarity for $S$, the vanishing of $E_{L}(x)$ on $[a,b]$ and the equation $\mathsf M x''(t)=-\nabla_{x}U(t,x(t))$ on $[a,b]$ are equivalent.

[F3] Motions and the maximal motion ([[def-cm02-newtonian-flow]], [[post-cm02-force-superposition]] clause (iv), [[def-cm03-potential-and-mechanical-energy]] clause (a), [[pthm-cm02-ivp]]): a motion on an interval $J$ with nonempty interior is a $C^{2}$ curve $x:J\to Q$ with $J\subseteq I_{0}$ satisfying $\mathsf M x''(t)=F(t,x(t),x'(t))$ for all $t\in J$, i.e. with $F_{i}=-\nabla_{x_{i}}U$ the equation $\mathsf M x''=-\nabla_{x}U$; and through every datum $(t_{0},x_{0},v_{0})\in I_{0}\times Q\times\mathbb R^{3N}$ there is exactly one maximal motion, whose maximal interval $J_{\max}$ is an open interval containing $t_{0}$ and contained in $I_{0}$, and every motion with that datum is a restriction of it. In particular two motions with the same datum agree on the intersection of their intervals.

[F4] Continuation at a finite endpoint ([[pthm-cm02-continuation]], clauses 1-2): let $x_{\max}:J_{\max}\to Q$ be the maximal motion with a datum, $J_{\max}=(a_{0},b_{0})$, and $z_{\max}=(x_{\max},x_{\max}'):J_{\max}\to Q\times\mathbb R^{3N}$ its state curve, with time-state domain $D:=I_{0}\times Q\times\mathbb R^{3N}$. If $b_{0}<+\infty$, then for every compact $K\subseteq D$ and every $\eta>0$ with $(b_{0}-\eta,b_{0})\cap J_{\max}\neq\varnothing$ there is $t\in(b_{0}-\eta,b_{0})\cap J_{\max}$ with $(t,z_{\max}(t))\notin K$; equivalently, if a compact $K\subseteq D$ and $\delta>0$ satisfy $(t,z_{\max}(t))\in K$ for all $t\in(b_{0}-\delta,b_{0})\cap J_{\max}$, then $x_{\max}$ extends to a motion on a strictly larger interval than $J_{\max}$, so $J_{\max}$ cannot have right endpoint $b_{0}$.

[F5] Compactness of a $C^{2}$ graph in the state domain ([[thm-heine-borel-rn]], [[thm-continuous-image-of-a-compact-space-is-compact]], [[def-continuity-real]], [[def-vector-valued-derivative-and-integral]], [[def-ck-euclidean-maps-and-diffeomorphisms]], [[def-interval]]): if $x:[c,d]\to Q$ is $C^{2}$ then the graph $K:=\{(t,x(t),x'(t)):t\in[c,d]\}$ is the image of the compact interval $[c,d]$ under the continuous map $t\mapsto(t,x(t),x'(t))$, hence compact, and it is contained in the open state domain $D=I_{0}\times Q\times\mathbb R^{3N}$ because $[c,d]\subseteq I_{0}$ and $x$ takes values in $Q$.

## Proof

**Proof technique:** direct; read the equivalence of stationarity with the model equation from the preceding theorem, and compare a stationary curve with the maximal motion through its initial datum by uniqueness and the compact continuation criterion.

1.1 Clause 1: let $x:J\to Q$ be a motion with $[a,b]\subseteq J\cap I_{0}$. By [F3] the curve $x$ satisfies $\mathsf M x''(t)=-\nabla_{x}U(t,x(t))$ on $J$, in particular on $[a,b]$. The restriction $x|_{[a,b]}$ is a $C^{2}$ admissible curve of the chart instance [F1] (its values lie in $Q$), and condition 3 of [F2] holds on $[a,b]$; hence by [F2] it is stationary for $S$. [F1, F2, F3, given]

1.2 Clause 2, setup: let $x:[a,b]\to Q$ be stationary. By [F2] the curve satisfies $\mathsf M x''(t)=-\nabla_{x}U(t,x(t))$ for every $t\in[a,b]$; the datum $(a,x(a),x'(a))$ lies in $I_{0}\times Q\times\mathbb R^{3N}$ because $[a,b]\subseteq I_{0}$ and $x$ takes values in $Q$. Let $x_{\max}:J_{\max}\to Q$ be the maximal motion with this datum and $J_{\max}=(\alpha,\beta)$ its maximal interval; by [F3], $\alpha<a<\beta$. The restriction $x|_{[a,b]}$ is a motion on $[a,b]$ with the same datum, so by the uniqueness clause of [F3], $x_{\max}$ and $x$ agree on $J_{\max}\cap[a,b]$. [F2, F3, given]

2.1 The intersection $J_{\max}\cap[a,b]$ equals $[a,\beta)$ if $\beta\le b$ and $[a,b]$ if $\beta>b$, because $\alpha<a$; hence agreement in step 1.2 says that $x_{\max}=x$ on $[a,\min(\beta,b))$ with the intersection half-open when $\beta\le b$ and closed when $\beta>b$. [step 1.2, algebra]

3.1 Claim: $\beta>b$. Suppose first $\beta<b$. By step 2.1, $x_{\max}=x$ on $[a,\beta)$; by [F5] applied to $x|_{[a,\beta]}$ the set $K:=\{(t,x(t),x'(t)):t\in[a,\beta]\}$ is a compact subset of $D$. Choose $\eta:=\beta-a>0$; for every $t\in(\beta-\eta,\beta)\cap J_{\max}=(a,\beta)$ one has $(t,z_{\max}(t))=(t,x(t),x'(t))\in K$. The extension form of [F4] then extends $x_{\max}$ beyond $\beta$, contradicting the maximality of $J_{\max}$. Hence $\beta\ge b$. [F4, F5, step 2.1, algebra]

3.2 Claim: $\beta=b$ is impossible. If $\beta=b$, then by step 2.1 $x_{\max}=x$ on $[a,b)$ and $\{(t,x(t),x'(t)):t\in[a,b]\}$ is a compact subset $K$ of $D$ by [F5]; taking $\delta:=b-a>0$, every $t\in(b-\delta,b)\cap J_{\max}=(a,b)$ satisfies $(t,z_{\max}(t))\in K$, so the extension form of [F4] extends $x_{\max}$ beyond $b$, again contradicting maximality. [F4, F5, step 2.1, algebra]

4.1 By steps 3.1 and 3.2, $\beta>b$; with step 2.1 this gives $J_{\max}\cap[a,b]=[a,b]$, so $[a,b]\subseteq J_{\max}$ and $x=x_{\max}|_{[a,b]}$: the curve $x$ is the restriction of the maximal motion through its initial datum, which is clause 2. [step 2.1, step 3.1, step 3.2]

5.1 Clause 3: clause 1 shows that every restriction of a motion with $[a,b]\subseteq J\cap I_{0}$ is stationary, and clause 2 shows that every stationary curve is such a restriction; the equation satisfied is $\mathsf M x''=-\nabla_{x}U$ by [F2] and [F3]. [step 1.1, step 4.1, F2, F3] ∎

## Remarks

- **What the converse uses.** The passage from a stationary curve to a motion
  uses the local existence and uniqueness theorem, the compact continuation
  criterion and the compactness of a $C^{2}$ graph in the open state domain.
  None of these hypotheses is automatic for curves defined on open intervals
  with boundary singularities; the statement is confined to closed intervals
  inside the time window.

- **No global existence.** Clause 2 produces the maximal motion through the
  datum; its maximal interval is guaranteed to contain $[a,b]$ but need not be
  all of $I_{0}$. Finite-time breakdown of the model's dynamics is thereby
  compatible with the equivalence, which concerns only curves that exist on
  the given interval.
