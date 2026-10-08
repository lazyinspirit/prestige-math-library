---
id: ex-cg-a2-root-and-weight-lattices
kind: example
title: "The $A_2$ root and weight lattices: $P/Q$ has order three"
status: published
origin: pipeline
pipeline_run: frontier-42-coxeter-32
dependency_level: 10
deps: [def-cg-crystallographic-scaling-coroot-and-lattice, lem-cg-integer-pairings-and-allowed-dihedral-labels, def-cg-real-coxeter-form-and-reflection, def-hh-coxeter-matrix-word-group-and-length, def-cg-canonical-reflection-homomorphism, ex-classical-root-systems-in-euclidean-coordinates, def-positive-system-and-base-of-simple-roots, def-root-lattice-coroot-lattice-weight-lattice-and-coweight-lattice, def-fundamental-weights, def-coroot-and-dual-root-system, thm-double-angle-and-power-reduction-identities, thm-cofunction-supplementary-and-reflection-identities, thm-sine-cosine-signs-monotonicity-and-ranges, thm-quarter-turn-values-and-shift-formulas, def-pi-via-first-positive-cosine-zero]
aliases: []
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct reflection-orbit and coordinate-lattice calculations
sources:
  references:
    - title: "J. S. Milne, Lie Algebras, Algebraic Groups, and Lie Groups (course notes, version 2.00)"
      url: "https://www.jmilne.org/math/CourseNotes/LAG.pdf"
      locator: "Chapter I, Section 7, 7.22-7.25, printed pp. 75-76: root and weight lattices, the dual definition of P, and fundamental weights; Milne notes that some proofs in this section are omitted"
    - title: "Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed. (author-hosted digital edition)"
      url: "https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf"
      locator: "Chapter II, (2.43) and (2.50), printed pp. 150-155, for the standard A2, B2, and C2 coordinate root sets and simple roots; Chapter IV, Section 7, Propositions 4.62 and 4.64, printed pp. 266-267, for the root-lattice/index context (used here only as context; the indices below are calculated locally)"
verification:
  audited: "2026-10-08"
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
---

## Statement

Let $S=\{s,t\}$, $m(s,t)=3$, and choose the scaling $c_s=c_t=1$. A label-$3$
edge forces $c_s=c_t$ for every crystallographic scaling, so this is the unique
scaling up to a common positive factor. Its scaled simple roots have
$a_{st}=a_{ts}=-1$ and
$$A=\begin{pmatrix}2&-1\\-1&2\end{pmatrix},\qquad \Phi_c=\{\pm a_s,\pm a_t,\pm(a_s+a_t)\},$$
and its scaled root and coroot lattices are
$$Q=\mathbb Za_s+\mathbb Za_t,\qquad Q^\vee=\mathbb Z(2a_s)+\mathbb Z(2a_t)=2Q.$$
The weight lattice is
$$P=\{\lambda\in V:B(\lambda,a_s^\vee),B(\lambda,a_t^\vee)\in\mathbb Z\}.$$

**(1) Standard coordinates.** The isometry
$V\to E=\{x\in\mathbb R^3:x_1+x_2+x_3=0\}$ sending
$$a_s\mapsto\frac{1}{\sqrt2}(\varepsilon_1-\varepsilon_2),\qquad a_t\mapsto\frac{1}{\sqrt2}(\varepsilon_2-\varepsilon_3)$$
identifies $\Phi_c$ with $1/\sqrt2$ times the standard $A_2$ root system. It
carries $Q$ to $Q_0/\sqrt2$ and $P$ to $P_0/\sqrt2$, where
$$Q_0=\{x\in\mathbb Z^3:x_1+x_2+x_3=0\},\qquad P_0=\left\{x\in\left(\tfrac13\mathbb Z\right)^3:x_1+x_2+x_3=0,\ x_i-x_j\in\mathbb Z\text{ for all }i,j\right\}.$$
The fundamental weights
$$\omega_1=\frac13(2\varepsilon_1-\varepsilon_2-\varepsilon_3),\qquad \omega_2=\frac13(\varepsilon_1+\varepsilon_2-2\varepsilon_3)$$
form a basis of $P_0$ dual to the simple coroots.

**(2) Indices and comparison.** One has
$$P_0/Q_0\cong\mathbb Z/3,\qquad [P:Q]=3=\det A.$$
For comparison, direct calculation in the standard coordinates gives
$$Q(B_2)=\mathbb Z\varepsilon_1+\mathbb Z\varepsilon_2,\qquad P(B_2)=\mathbb Z\varepsilon_1+\mathbb Z\frac{\varepsilon_1+\varepsilon_2}{2},$$
so $[P(B_2):Q(B_2)]=2$. For $C_2$ one has
$$Q(C_2)=\mathbb Z(\varepsilon_1-\varepsilon_2)+\mathbb Z(2\varepsilon_2),\qquad P(C_2)=\mathbb Z\varepsilon_1+\mathbb Z\varepsilon_2,$$
so $[P(C_2):Q(C_2)]=2$. These are the two standard root-system realizations
of the Coxeter diagram $I_2(4)=B_2=C_2$.

## Facts & Assumptions

**Given:** the two-generator Coxeter system with label $m(s,t)=3$, the scaling $c_s=c_t=1$, its Coxeter form $B$, and the standard coordinate root systems $A_2$, $B_2$, and $C_2$.

[F1] For a scaling, $a_s=c_se_s$, $a_s^\vee=2a_s/B(a_s,a_s)$, and $a_{st}=B(a_s,a_t^\vee)$ ([[def-cg-crystallographic-scaling-coroot-and-lattice]]).

[F2] A scaling is crystallographic exactly when its Cartan numbers are all integers; in that case, $Q$ and $Q^\vee$ are the integer spans of the simple roots and simple coroots, $P$ is their coroot-pairing dual, and $\Phi_c=\{\rho(w)a_s:w\in W,s\in S\}$ is the scaled root set ([[def-cg-crystallographic-scaling-coroot-and-lattice]]).

[F3] If $B$ is positive definite, a crystallographic scaling on a connected diagram with no edge of label $\ge4$ has equal $c$-values on all vertices ([[lem-cg-integer-pairings-and-allowed-dihedral-labels]]).

[F4] The Coxeter form has $B(e_s,e_s)=1$ and $B(e_s,e_t)=-\cos(\pi/m(s,t))$ for finite $m(s,t)$ ([[def-cg-real-coxeter-form-and-reflection]]).

[F5] For a nonisotropic normal $a$, its reflection is $r_a(v)=v-2B(v,a)a/B(a,a)$ ([[def-cg-real-coxeter-form-and-reflection]]).

[F6] The canonical homomorphism satisfies $\rho(s)=r_s$ for every generator, where $r_s:=r_{e_s}$ ([[def-cg-canonical-reflection-homomorphism]]).

[F7] Every element of the presented Coxeter group $W$ is represented by a finite word in $S$ ([[def-hh-coxeter-matrix-word-group-and-length]]).

[F8] The standard $A_2$ coordinate root set is $\{\varepsilon_i-\varepsilon_j:i\ne j\}$ in the sum-zero hyperplane ([[ex-classical-root-systems-in-euclidean-coordinates]]).

[F9] The standard $B_2$ coordinate root set is $\{\pm\varepsilon_i\}\cup\{\pm\varepsilon_1\pm\varepsilon_2\}$ ([[ex-classical-root-systems-in-euclidean-coordinates]]).

[F10] The standard $C_2$ coordinate root set is $\{\pm2\varepsilon_i\}\cup\{\pm\varepsilon_1\pm\varepsilon_2\}$ ([[ex-classical-root-systems-in-euclidean-coordinates]]).

[F11] For a regular vector $v$, the positive roots are those with $(v,\alpha)>0$, and a positive root is simple when it is not a sum of two positive roots ([[def-positive-system-and-base-of-simple-roots]]).

[F12] The root and coroot lattices are the integer spans of roots and coroots, and the weight lattice is the lattice dual to the coroot lattice ([[def-root-lattice-coroot-lattice-weight-lattice-and-coweight-lattice]]).

[F13] For a root $\alpha$, its coroot is $\alpha^\vee=2\alpha/(\alpha,\alpha)$ ([[def-coroot-and-dual-root-system]]).

[F14] The fundamental weights for a base of simple roots are the vectors dual to the simple coroots ([[def-fundamental-weights]]).

[F15] For every real $x$, $\cos(2x)=2\cos^2x-1$ and $\cos(\pi-x)=-\cos x$; cosine strictly decreases on $[0,\pi]$, $\cos(\pi/2)=0$ and $\pi>0$ ([[thm-double-angle-and-power-reduction-identities]], [[thm-cofunction-supplementary-and-reflection-identities]], [[thm-sine-cosine-signs-monotonicity-and-ranges]], [[thm-quarter-turn-values-and-shift-formulas]], [[def-pi-via-first-positive-cosine-zero]]).

## Proof

**Proof technique:** direct computation of the simple-reflection orbit and dual lattices in the three standard coordinate models.

1.1 Put $z=\cos(\pi/3)>0$ by [F15]. The double-angle and supplementary identities give $2z^2-1=-z$, hence $(2z-1)(z+1)=0$ and $z=1/2$. Since $m(s,t)=3$, [F4] gives the Gram matrix $\begin{pmatrix}1&-1/2\\-1/2&1\end{pmatrix}$ in $(e_s,e_t)$. With $a_s=e_s$ and $a_t=e_t$, one has $a_s^\vee=2a_s$, $a_t^\vee=2a_t$, $a_{ss}=a_{tt}=2$, $a_{st}=a_{ts}=-1$, and the displayed Cartan matrix. The form is positive definite because its quadratic form is $(x-y/2)^2+3y^2/4$. Thus the chosen scaling is crystallographic, and [F3] shows every crystallographic scaling has $c_s=c_t$, so this is unique up to a common positive multiple. [F1, F2, F3, F4, F15, algebra]

1.2 By bilinearity, the reflection formula [F5] defines linear maps and gives $r_{a_s}(a_s)=-a_s$, $r_{a_s}(a_t)=a_s+a_t$, $r_{a_t}(a_t)=-a_t$, $r_{a_t}(a_s)=a_s+a_t$, $r_{a_s}(a_s+a_t)=a_t$, and $r_{a_t}(a_s+a_t)=a_s$; by linearity the set $R=\{\pm a_s,\pm a_t,\pm(a_s+a_t)\}$ is stable under both reflections. By [F6], $\rho(s)=r_{a_s}$ and $\rho(t)=r_{a_t}$, since the reflection formula is unchanged by scaling its normal; by [F7], every $w\in W$ is a word in $s,t$, so $\Phi_c\subseteq R$. Conversely, $a_s,a_t$ belong to $\Phi_c$, while $-a_s=\rho(s)a_s$, $-a_t=\rho(t)a_t$, $a_s+a_t=\rho(s)a_t$, and $-(a_s+a_t)=\rho(t)\rho(s)a_s$. Thus $\Phi_c=R$. [F2, F5, F6, F7, algebra]

1.3 For $B_2$, set the roots $\beta_1=\varepsilon_1-\varepsilon_2$ and $\beta_2=\varepsilon_2$ from the coordinate model [F9]. Their coroots are $\beta_1^\vee=\beta_1$, $\beta_2^\vee=2\varepsilon_2$. The full coordinate root set in [F9] contains $\varepsilon_1,\varepsilon_2$, so $Q(B_2)=\mathbb Z\varepsilon_1+\mathbb Z\varepsilon_2$. Its coroot set consists of $\pm(\varepsilon_1\pm\varepsilon_2)$ and $\pm2\varepsilon_i$; these span exactly $Q^\vee(B_2)=\mathbb Z\beta_1+\mathbb Z(2\varepsilon_2)$, since both displayed generators are coroots and every listed coroot lies in their span. Thus [F12] gives $P(B_2)=\{(x,y):x-y\in\mathbb Z,\ 2y\in\mathbb Z\}= \mathbb Z\varepsilon_1+\mathbb Z\frac{\varepsilon_1+\varepsilon_2}{2}$. The nontrivial coset is generated by $(\varepsilon_1+\varepsilon_2)/2$, of order two, so $[P(B_2):Q(B_2)]=2$. [F9, F12, F13, algebra]

1.4 For $C_2$, set the roots $\gamma_1=\varepsilon_1-\varepsilon_2$ and $\gamma_2=2\varepsilon_2$ from the coordinate model [F10]. Their coroots are $\gamma_1^\vee=\gamma_1$ and $\gamma_2^\vee=\varepsilon_2$. The full root set in [F10] yields $Q(C_2)=\mathbb Z(\varepsilon_1-\varepsilon_2)+\mathbb Z(2\varepsilon_2)$: the two generators are roots and each other root is an integer combination of them. Its coroot set contains $\varepsilon_1-\varepsilon_2$ and $\varepsilon_2$ and is contained in $\mathbb Z^2$, so $Q^\vee(C_2)=\mathbb Z(\varepsilon_1-\varepsilon_2)+ \mathbb Z\varepsilon_2=\mathbb Z^2$. Thus [F12] gives $P(C_2)=\{(x,y):x-y\in\mathbb Z,\ y\in\mathbb Z\}=\mathbb Z^2$. The quotient is generated by $[\varepsilon_2]$, which has order two because $2\varepsilon_2\in Q(C_2)$ and $\varepsilon_2\notin Q(C_2)$; hence $[P(C_2):Q(C_2)]=2$. [F10, F12, F13, algebra]

1.5 In each coordinate model, the reflection formula [F5] gives the maps $s_1(x,y)=(y,x)$ and $s_2(x,y)=(x,-y)$ for the displayed $B_2$ and $C_2$ root pairs; the second map is unchanged when its normal is $2\varepsilon_2$ instead of $\varepsilon_2$. Both maps are involutions. Their product sends $(x,y)\mapsto(-y,x)$; its square is $-I$ and its fourth power is $I$, so its order is four. Thus both standard systems realize the Coxeter diagram $I_2(4)$, giving the stated $B_2=C_2$ diagram coincidence. [F5, F9, F10, algebra]

2.1 Put $\alpha_1=\varepsilon_1-\varepsilon_2$ and $\alpha_2=\varepsilon_2-\varepsilon_3$. The linear map sending $a_s\mapsto\alpha_1/\sqrt2$ and $a_t\mapsto\alpha_2/\sqrt2$ is an isometry: the images have squared lengths $1,1$ and inner product $-1/2$, matching their Gram matrix from [F4]. By step 1.2 it sends $\Phi_c$ to $\frac1{\sqrt2}\{\pm\alpha_1,\pm\alpha_2,\pm(\alpha_1+\alpha_2)\}$, the standard $A_2$ coordinate root system of [F8]. For $v=(1,0,-1)$, its positive roots are $\alpha_1,\alpha_2,\alpha_1+\alpha_2$; thus [F11] makes $\alpha_1,\alpha_2$ its simple roots. [F4, F8, F11, step 1.2, algebra]

3.1 The two simple roots have squared length $1$, so [F13] gives their simple coroots $2a_s,2a_t$; hence $Q=\mathbb Za_s+\mathbb Za_t=\mathbb Z\Phi_c$ and $Q^\vee=\mathbb Z(2a_s)+\mathbb Z(2a_t)=2Q$. Since every root in the standard $A_2$ coordinate set has squared length $2$, its coroot lattice is $Q_0$ by [F8,F11,F12,F13]. The isometry of step 2.1 sends $Q$ to $Q_0/\sqrt2$ and $Q^\vee$ to $\sqrt2 Q_0$, where $Q_0=\mathbb Z\alpha_1+\mathbb Z\alpha_2= \{x\in\mathbb Z^3:x_1+x_2+x_3=0\}$. By [F12], the image of $P$ is the lattice dual to $\sqrt2Q_0$, namely $P_0/\sqrt2$, where $P_0=\{x\in E:(x,\alpha_1),(x,\alpha_2)\in\mathbb Z\}$. [F2, F8, F11, F12, F13, step 2.1, algebra]

4.1 For $x=(x_1,x_2,x_3)\in E$, the pairings defining $P_0$ are $x_1-x_2$ and $x_2-x_3$. Thus membership is equivalent to having integral coordinate differences. If those differences are integers, write $x_1=x_3+m$ and $x_2=x_3+n$ with $m,n\in\mathbb Z$; the sum-zero condition gives $3x_3=-m-n$, so all coordinates lie in $\frac13\mathbb Z$. Conversely the displayed conditions make both pairings integral. Hence $P_0=\{x\in(\frac13\mathbb Z)^3:\sum_i x_i=0, x_i-x_j\in\mathbb Z\text{ for all }i,j\}$. [step 3.1, algebra]

4.2 The vectors $\omega_1=(2\varepsilon_1-\varepsilon_2-\varepsilon_3)/3$ and $\omega_2=(\varepsilon_1+\varepsilon_2-2\varepsilon_3)/3$ satisfy $(\omega_i,\alpha_j^\vee)=\delta_{ij}$, since $\alpha_j^\vee=\alpha_j$ by [F13]. They are the fundamental weights by [F14] and form a basis of $P_0$: any $x\in P_0$ has integer pairings with the basis $\alpha_1^\vee,\alpha_2^\vee$ and therefore is the corresponding integer linear combination of $\omega_1,\omega_2$. In this basis $\alpha_1=2\omega_1-\omega_2$ and $\alpha_2=-\omega_1+2\omega_2$; hence $[\omega_2]=2[\omega_1]$ and $3[\omega_1]=0$ in $P_0/Q_0$. The quotient is nontrivial because $\omega_1\notin Q_0$, so it is cyclic of order three. Therefore $P_0/Q_0\cong\mathbb Z/3$, $[P:Q]=3$, and $\det A=2\cdot2-(-1)(-1)=3$. [F11, F12, F13, F14, step 2.1, step 3.1, algebra]

5.1 The $A_2$ lattices satisfy $Q\subsetneq P$ and $[P:Q]=3=\det A$, whereas both standard $B_2$ and $C_2$ coordinate systems have weight/root index two. No Choice is used: every step is a finite coordinate calculation on the displayed bases and finite root sets. [step 3.1, step 4.2, step 1.3, step 1.4, step 1.5, algebra] ∎
