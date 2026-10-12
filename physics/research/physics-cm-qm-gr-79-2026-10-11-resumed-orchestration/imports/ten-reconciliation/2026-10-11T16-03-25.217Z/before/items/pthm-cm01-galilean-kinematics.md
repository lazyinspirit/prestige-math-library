---
id: pthm-cm01-galilean-kinematics
kind: physics-theorem
title: "Galilean transformation of worldlines: velocity and acceleration laws, frame-independence of zero coordinate acceleration, and the group of frame changes"
status: draft
origin: session
domain: physics
dependency_level: 7
deps: [post-cm01-spacetime, post-cm01-frames, post-cm01-worldlines, def-cm01-velocity-acceleration, def-cm01-units, def-cm-affine-time-space, lem-cm-adapted-charts-and-galilean-transformations, def-cm-special-orthogonal-group, lem-cm-so3-is-a-matrix-group, thm-chain-rule-for-total-derivatives]
dependency_roles:
  post-cm01-spacetime: formulation-prerequisite
  post-cm01-frames: formulation-prerequisite
  post-cm01-worldlines: formulation-prerequisite
  def-cm01-velocity-acceleration: formulation-prerequisite
  def-cm01-units: formulation-prerequisite
  def-cm-affine-time-space: mathematical-premise
  lem-cm-adapted-charts-and-galilean-transformations: mathematical-premise
  def-cm-special-orthogonal-group: mathematical-premise
  lem-cm-so3-is-a-matrix-group: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
physical_scope: "The kinematic theorem of the framework: the transformation law between two inertial frames of the Newtonian model, the induced laws for the coordinate velocity and acceleration of a worldline, the frame-independence of the property of zero coordinate acceleration, and the group structure of the Galilean transformations. The result is a conditional deduction from the adopted spacetime, frame and worldline assumptions and the cited mathematical transformation law; it asserts no force law, no conservation law and no empirical claim, and it does not by itself identify free motion with zero coordinate acceleration."
sources:
  references:
    - title: "D. Tong, Dynamics and Relativity (Cambridge lecture notes, Lent 2013), Section 1.2.1, printed page 5 (PDF page 11): all translations, rotations and boosts map inertial frames to inertial frames, and d^2x/dt^2 = 0 is preserved by each of them"
      url: "https://www.davidtong.org/pdfs/teaching/dynamics-and-relativity/dynrel.pdf"
    - title: "D. Tong, Classical Dynamics (Cambridge lecture notes, January 2015 printing), Section 1.2, printed pages 2-5 (PDF pages 8-11): the ten transformations relating inertial frames, comprising rotations, translations, boosts and time translation"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
    - title: "K. K. Likharev, Essential Graduate Physics, Part CM: Classical Mechanics (title page last edited September 1, 2026), Section 1.1 point (v) and Section 1.2, chapter pages 2-3 (PDF pages 6-7): transfer of the radius vector, velocity and acceleration between frames moving by translation without rotation, and inertial frames as those moving without rotation or acceleration"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"
verification:
  precheck: pass
---

## Statement

Adopt the spacetime assumptions of [[post-cm01-spacetime]], the frame
assumptions of [[post-cm01-frames]] and the worldline assumptions of
[[post-cm01-worldlines]]. Let

$$F=\bigl(o,u,(e_{1},e_{2},e_{3})\bigr),\qquad F'=\bigl(o',u',(e_{1}',e_{2}',e_{3}')\bigr)$$

be two inertial frames of the model with adapted coordinates $(t,x)$ and
$(t',x')$, and let $\gamma:I\to A$ be a worldline of a particle label described
in $F$, with coordinate curve $x:I\to\mathbb R^{3}$ and coordinate velocity and
acceleration $w=x'$ and $a=x''$ in the sense of
[[def-cm01-velocity-acceleration]]. Then:

1. There are $b\in\mathbb R$, $a_{0},v\in\mathbb R^{3}$ and $R\in SO(3)$
   ([[def-cm-special-orthogonal-group]]) such that for every event $p\in A$

$$t'(p)=t(p)+b,\qquad x'(p)=R\,x(p)+v\,t(p)+a_{0}.$$

   The parameters have dimensions $[b]=\tau$, $[a_{0,j}]=\ell$ and
   $[v_{j}]=\ell\tau^{-1}$, and $R$ is dimensionless
   ([[def-cm01-units]]); they are the ones that occur in the adopted class of
   frame changes of [[post-cm01-frames]].

2. Let $\eta:I+b\to\mathbb R^{3}$ be the coordinate curve of the same label in
   $F'$, defined by $\eta(t'):=x'(\gamma(t'-b))$ for $t'\in I+b$. Then $\eta$
   is of class $C^{2}$ and

$$\eta'(t')=R\,w(t'-b)+v,\qquad \eta''(t')=R\,a(t'-b)\qquad(t'\in I+b).$$

3. The coordinate acceleration vanishes identically in one frame exactly when
   it does in the other:

$$a\equiv0\ \text{on}\ I\qquad\Longleftrightarrow\qquad \eta''\equiv0\ \text{on}\ I+b.$$

   Equivalently, the property "the coordinate curve is an affine function of
   the frame time" is an inertial-frame-independent property of the motion.

4. Write $G(b,a_{0},v,R)$ for the transformation
   $(t,x)\mapsto(t+b,\,Rx+v\,t+a_{0})$ of the coordinate space. Then

$$G(b_{2},a_{2},v_{2},R_{2})\circ G(b_{1},a_{1},v_{1},R_{1})=G\bigl(b_{1}+b_{2},\ R_{2}a_{1}+v_{2}b_{1}+a_{2},\ R_{2}v_{1}+v_{2},\ R_{2}R_{1}\bigr)$$

and

$$G(b,a_{0},v,R)^{-1}=G\bigl(-b,\ -R^{\mathsf T}(a_{0}-vb),\ -R^{\mathsf T}v,\ R^{\mathsf T}\bigr),$$

   with all parameters again in $\mathbb R\times\mathbb R^{3}\times\mathbb R^{3}\times SO(3)$. Consequently the Galilean transformations form a group of transformations of the coordinate space, and the relation on inertial frames "the two charts differ by a Galilean transformation" is an equivalence relation.

## Facts & Assumptions

**Given:** Two inertial frames $F,F'$ of the model with coordinates $(t,x)$ and $(t',x')$, a worldline $\gamma:I\to A$ described in $F$ with coordinate curve $x$, coordinate velocity $w$ and coordinate acceleration $a$.

[L1] Transformation law and kinematic consequences for adapted charts: there are $b\in\mathbb R$, $a_{0},v\in\mathbb R^{3}$ and $R\in O(3)$ with $t'=t+b$ and $x'=Rx+vt+a_{0}$ on $A$; if both bases are positively oriented then $R\in SO(3)$; and for a curve $\gamma$ with $t(\gamma(s))=s$ the map $y(s):=x'(\gamma(s))$ satisfies $y'(s)=Rx'(s)+v$ and $y''(s)=Rx''(s)$, with $x''=0$ if and only if $y''=0$ ([[lem-cm-adapted-charts-and-galilean-transformations]]).

[L2] The set $SO(3)$ is closed under products and transposes, $R^{\mathsf T}R=I_{3}$, and $R^{\mathsf T}\in SO(3)$ for $R\in SO(3)$ ([[lem-cm-so3-is-a-matrix-group]], [[def-cm-special-orthogonal-group]]).

[L3] A worldline described in $F$ is a $C^{2}$ curve with $\tau(\gamma(s)-o)=s$, that is, $t(\gamma(s))=s$, for every $s\in I$; the description in a second frame is the reparametrized curve of clause (ii) of [[post-cm01-worldlines]] ([[post-cm01-worldlines]]).

[L4] Coordinate velocity and acceleration are $w=x'$ and $a=x''$, and the description of the motion in the second frame is $\eta(t')=x'(\gamma(t'-b))$ ([[def-cm01-velocity-acceleration]], clause (e)).

[L5] Chain rule for total derivatives: if $f$ is totally differentiable at $a$ and $g$ at $f(a)$, then $g\circ f$ is totally differentiable at $a$ with $D(g\circ f)(a)=Dg(f(a))\circ Df(a)$; applied to the one-variable composition $t'\mapsto x(t'-b)$ with the affine inner map, whose derivative is the identity, it gives the derivative $x'(t'-b)$ of the composition ([[thm-chain-rule-for-total-derivatives]]).

## Proof

**Proof technique:** direct.

1.1 By clause 1 of [L1] applied to the two adapted charts $F,F'$, there are $b\in\mathbb R$, $a_{0},v\in\mathbb R^{3}$ and $R\in O(3)$ with $t'(p)=t(p)+b$ and $x'(p)=Rx(p)+vt(p)+a_{0}$ for all $p\in A$; both bases of an inertial frame are positively oriented by definition, so the orientation clause of [L1] gives $R\in SO(3)$; this proves clause 1. [L1, given]

1.2 For the composition, apply $G(b_{1},a_{1},v_{1},R_{1})$ and then $G(b_{2},a_{2},v_{2},R_{2})$ to a point $(t,x)$: the intermediate point is $(s,y)=(t+b_{1},\,R_{1}x+v_{1}t+a_{1})$, and the final point is $(s+b_{2},\,R_{2}y+v_{2}s+a_{2})=\bigl(t+b_{1}+b_{2},\ R_{2}R_{1}x+(R_{2}v_{1}+v_{2})t+R_{2}a_{1}+v_{2}b_{1}+a_{2}\bigr)$, which is the displayed composite by associativity of matrix multiplication and bilinearity of the matrix–vector product. [L2, algebra]

1.3 For the inverse, let $(s,y)=G(b,a_{0},v,R)(t,x)$ with $R\in SO(3)$. Then $t=s-b$ and $x=R^{-1}(y-vt-a_{0})=R^{\mathsf T}\bigl(y-v(s-b)-a_{0}\bigr)=R^{\mathsf T}y-R^{\mathsf T}v\,s+R^{\mathsf T}(vb-a_{0})$, so the inverse map is $(s,y)\mapsto\bigl(s-b,\ R^{\mathsf T}y+(-R^{\mathsf T}v)s+R^{\mathsf T}(vb-a_{0})\bigr)$, the displayed transformation, and substituting it into the forward transformation returns $(s,y)$. [L2, algebra]

2.1 By [L3], $t(\gamma(s))=s$ for all $s\in I$; hence $t'(\gamma(s))=s+b$ by step 1.1, and substituting $p=\gamma(s)$ into the second display of step 1.1 gives $x'(\gamma(s))=Rx(s)+vs+a_{0}$ for all $s\in I$. [step 1.1, L3, algebra]

2.2 In the composites of steps 1.2 and 1.3 the rotation parameters are $R_{2}R_{1}$ and $R^{\mathsf T}$, both in $SO(3)$ by [L2], and the other parameters lie in $\mathbb R\times\mathbb R^{3}\times\mathbb R^{3}$; the identity transformation $G(0,0,0,I_{3})$ is present, so the set of Galilean transformations is closed under composition and inversion and the frame-change relation is reflexive, symmetric and transitive; this proves clause 4. [step 1.2, step 1.3, L2, algebra]

3.1 Define $\eta(t'):=x'(\gamma(t'-b))$ on $I+b$ as in [L4]. By step 2.1, $\eta(s+b)=x'(\gamma(s))=Rx(s)+vs+a_{0}$, so substituting $s=t'-b$ gives $\eta(t')=Rx(t'-b)+v(t'-b)+a_{0}$ there; a composition of the $C^{2}$ curve $x$ with the affine map $t'\mapsto t'-b$ is $C^{2}$, so $\eta$ is of class $C^{2}$, and differentiating the display with the chain rule [L5], whose inner derivative is $1$, gives $\eta'(t')=Rx'(t'-b)+v=Rw(t'-b)+v$ and $\eta''(t')=Rx''(t'-b)=Ra(t'-b)$; this proves clause 2. [step 2.1, L4, L5, algebra]

4.1 If $a\equiv0$ on $I$, then $\eta''(t')=Ra(t'-b)=0$ for every $t'\in I+b$ by step 3.1; conversely, if $\eta''\equiv0$ on $I+b$, then for every $s\in I$ step 3.1 gives $Ra(s)=\eta''(s+b)=0$, and multiplying by $R^{\mathsf T}$ on the left and using $R^{\mathsf T}R=I_{3}$ from [L2] gives $a(s)=R^{\mathsf T}\eta''(s+b)=0$; this proves clause 3. [step 3.1, L2, algebra] ∎
