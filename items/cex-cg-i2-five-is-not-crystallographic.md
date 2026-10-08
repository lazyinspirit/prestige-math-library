---
id: cex-cg-i2-five-is-not-crystallographic
kind: counterexample
title: "$I_2(5)$ admits no crystallographic scaling and no reduced crystallographic root system with that base pairing"
status: published
origin: pipeline
pipeline_run: frontier-42-coxeter-32
dependency_level: 16
deps: [def-cg-crystallographic-scaling-coroot-and-lattice, lem-cg-integer-pairings-and-allowed-dihedral-labels, thm-cg-crystallographic-finite-type-and-lattice-stability, def-cg-real-coxeter-form-and-reflection, lem-cg-reflection-form-invariance-and-rank-two-orders, thm-cg-finite-type-positive-definite-criterion, thm-cg-finite-coxeter-classification-including-h-and-dihedral, def-reduced-crystallographic-euclidean-root-system, def-positive-system-and-base-of-simple-roots, thm-simple-roots-form-a-basis-and-every-root-has-one-sign-of-integral-coordinates, thm-rank-two-root-system-classification, prop-distinct-simple-roots-have-nonpositive-inner-product, def-hh-coxeter-matrix-word-group-and-length, thm-double-angle-and-power-reduction-identities, thm-cofunction-supplementary-and-reflection-identities, thm-quarter-turn-values-and-shift-formulas, thm-sine-cosine-signs-monotonicity-and-ranges, def-pi-via-first-positive-cosine-zero]
justified_by: []
aliases: []
proof_strategy: counterexample
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Jean Michel, Lectures on Coxeter groups (Beijing lecture notes, April-May 2014)"
      url: "https://webusers.imj-prg.fr/~jean.michel/papiers/cox.pdf"
      locator: "Section 5, cosine table (printed p. 13): cos^2(pi/5)=(3+sqrt5)/8, and the classification of finite Weyl types excluding the label-5 extension"
    - title: "Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed. (author-hosted digital edition)"
      url: "https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf"
      locator: "Chapter II, Section 5, Proposition 2.48(c), printed pp. 152-153: for nonproportional roots the product of the two Cartan integers is an integer in {0,1,2,3}"
    - title: "J. S. Milne, Lie Algebras, Algebraic Groups, and Lie Groups (course notes, version 2.00)"
      url: "https://www.jmilne.org/math/CourseNotes/LAG.pdf"
      locator: "Chapter I, Section 7, rank-two discussion and Proposition 7.16, printed/PDF pp. 71-73: the possible Cartan-integer pairs 0,1,2,3 for distinct simple roots"
verification:
  audited: "2026-10-08"
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
---

## Statement refuted

**(a)** Every finite Coxeter matrix $(S,m)$ admits a crystallographic scaling
([[def-cg-crystallographic-scaling-coroot-and-lattice]]); in particular the
rank-two geometry with $S=\{s,t\}$ and $m(s,t)=5$ does.

**(b)** There is a reduced crystallographic Euclidean root system $\Psi$ with a
base $\{\alpha,\beta\}$ whose simple roots satisfy
$$\frac{(\alpha,\beta)}{|\alpha|\,|\beta|}=-\cos\frac{\pi}{5},$$
the normalized pairing of the two basis vectors of the $I_2(5)$ Coxeter form.

## Facts & Assumptions

**Given:** the rank-two Coxeter matrix on $S=\{s,t\}$ with $m(s,t)=5$, the space $V=\mathbb R^S$ with basis $e_s,e_t$ and the Coxeter form $B$, a scaling $c=(c_s,c_t)$ with scaled simple roots $a_s,a_t$ and Cartan numbers $a_{st}$, and, in the second refutation, a reduced crystallographic Euclidean root system $\Psi$ with a base $\{\alpha,\beta\}$.

[F1] $m(s,s)=1$, while $m(s,t)=m(t,s)\in\{2,3,\dots\}\cup\{\infty\}$ for $s\ne t$; in particular $m(s,t)=5$ is finite ([[def-hh-coxeter-matrix-word-group-and-length]]).

[F2] $B$ is the unique symmetric bilinear form on $V$ with $B(e_s,e_s)=1$, $B(e_t,e_t)=1$ and $B(e_s,e_t)=-\cos(\pi/5)$ ([[def-cg-real-coxeter-form-and-reflection]]).

[F3] For distinct $s,t$ with finite $m=m(s,t)$ and $c:=\cos(\pi/m)$, the plane $P=\mathbb Re_s+\mathbb Re_t$ has $B(x_se_s+x_te_t,\,x_se_s+x_te_t)=(x_s-cx_t)^2+\sin^2(\pi/m)\,x_t^2$, so $B|_P$ is positive definite ([[lem-cg-reflection-form-invariance-and-rank-two-orders]] (3)(i)).

[F4] $W$ is finite if and only if $B$ is positive definite ([[thm-cg-finite-type-positive-definite-criterion]] (1)).

[F5] $I_2(m)$ with $3\le m<\infty$ is the diagram of two vertices joined by one edge labelled $m$, $H_2=I_2(5)$, and $I_2(m)$ with $m\notin\{2,3,4,6\}$ admits no crystallographic scaling ([[thm-cg-finite-coxeter-classification-including-h-and-dihedral]] (1), (4); [[thm-cg-crystallographic-finite-type-and-lattice-stability]] (1)).

[F6] The scaling data are $a_s=c_se_s$, $a_s^\vee=2a_s/B(a_s,a_s)$, $a_{st}=B(a_s,a_t^\vee)=2B(a_s,a_t)/B(a_t,a_t)$, and $c$ is crystallographic exactly when $a_{st}\in\mathbb Z$ for all $s,t$ ([[def-cg-crystallographic-scaling-coroot-and-lattice]]).

[F7] For every scaling, $a_{st}a_{ts}=4\cos^2(\pi/m(s,t))$ and $a_{st}=-2\frac{c_s}{c_t}\cos(\pi/m(s,t))\le0$ for distinct $s,t$ with finite $m(s,t)$ ([[lem-cg-integer-pairings-and-allowed-dihedral-labels]] (1)).

[F8] If $B$ is positive definite and $c$ is crystallographic, then for all distinct $s,t$ one has $a_{st}a_{ts}\in\{0,1,2,3\}$ and $m(s,t)\in\{2,3,4,6\}$ ([[lem-cg-integer-pairings-and-allowed-dihedral-labels]] (2)).

[F9] A reduced crystallographic Euclidean root system is a finite spanning set $\Psi\subseteq E\setminus\{0\}$ closed under its root reflections, with integral Cartan integers $2(\beta,\alpha)/(\alpha,\alpha)$ and $\mathbb R\alpha\cap\Psi=\{\alpha,-\alpha\}$ ([[def-reduced-crystallographic-euclidean-root-system]]).

[F10] For nonproportional $\alpha,\beta\in\Psi$ with angle $\theta$ one has $n_{\alpha\beta}n_{\beta\alpha}=4\cos^2\theta\in\{0,1,2,3\}$, where $n_{\alpha\beta}=2(\beta,\alpha)/(\alpha,\alpha)$ and $n_{\beta\alpha}=2(\alpha,\beta)/(\beta,\beta)$; if $\{\alpha,\beta\}$ is a base of a rank-two system, then $(\alpha,\beta)\le0$ and $\theta$ is one of $90^\circ$, $120^\circ$, $135^\circ$, $150^\circ$ ([[thm-rank-two-root-system-classification]] (i), (iv)).

[F11] Distinct simple roots of a reduced crystallographic root system satisfy $(\alpha,\beta)\le0$ ([[prop-distinct-simple-roots-have-nonpositive-inner-product]]).

[F12] $\cos(2x)=2\cos^2x-1$ and $\cos^2x=(1+\cos2x)/2$ for all real $x$ ([[thm-double-angle-and-power-reduction-identities]]).

[F13] $\cos(\pi-x)=-\cos x$ and $\cos(\pi/2)=0$ ([[thm-cofunction-supplementary-and-reflection-identities]], [[thm-quarter-turn-values-and-shift-formulas]]).

[F14] Cosine is strictly decreasing on $[0,\pi]$, with $\cos\pi=-1$ and range $[-1,1]$ ([[thm-sine-cosine-signs-monotonicity-and-ranges]], [[thm-quarter-turn-values-and-shift-formulas]]).

[F15] $\pi>0$ ([[def-pi-via-first-positive-cosine-zero]]).

[F16] A base is the set of simple roots of a positive system, and the simple roots form a basis of the ambient space ([[def-positive-system-and-base-of-simple-roots]], [[thm-simple-roots-form-a-basis-and-every-root-has-one-sign-of-integral-coordinates]]).

## Counterexample

1.1 The geometry: by [F2] the form $B$ has $B(e_s,e_s)=B(e_t,e_t)=1$ and $B(e_s,e_t)=-\cos(\pi/5)$, and since $V=\mathbb Re_s+\mathbb Re_t$ is the plane $P$ of [F3] with $m=5$, [F3] makes $B$ positive definite; hence $W$ is finite by [F4], and the diagram is $I_2(5)$, conventionally also named $H_2$, by the classifier clauses (1), (4) in [F5]. The normalized pairing of the two basis vectors is $\frac{B(e_s,e_t)}{\sqrt{B(e_s,e_s)B(e_t,e_t)}}=-\cos(\pi/5)$. [F1, F2, F3, F4, F5]

1.2 The value $\cos(\pi/3)=\frac12$: put $q:=\cos(\pi/3)$. By [F13] at $x=\pi/3$ one has $\cos(2\pi/3)=\cos(\pi-\pi/3)=-q$, while [F12] gives $\cos(2\pi/3)=2q^2-1$; hence $2q^2-1=-q$, that is $(2q-1)(q+1)=0$. Since $0<\pi/3<\pi$ (as $\pi>0$ by [F15]) and cosine is strictly decreasing on $[0,\pi]$ with $\cos\pi=-1$ by [F14], one has $q>-1$, so $(2q-1)(q+1)=0$ forces $q=\frac12$. [F12, F13, F14, F15, algebra]

2.1 The product is strictly between $2$ and $3$: for every scaling $c$, [F7] gives $a_{st}a_{ts}=4\cos^2(\pi/5)$, and [F12] at $x=\pi/5$ rewrites this as $2+2\cos(2\pi/5)$. Since $\pi>0$ we have $\pi/3<2\pi/5<\pi/2$ (because $2\pi/5-\pi/3=\pi/15>0$ and $\pi/2-2\pi/5=\pi/10>0$), and cosine is strictly decreasing on $[0,\pi]$ with $\cos(\pi/2)=0$ and $\cos(\pi/3)=\frac12$ by [F13, F14] and step 1.2; therefore $0<\cos(2\pi/5)<\frac12$, and hence $2<a_{st}a_{ts}<3$. [F7, F12, F13, F14, step 1.2, algebra]

3.1 No crystallographic scaling exists: if $c$ were crystallographic, then $a_{st}$ and $a_{ts}$ would both be integers by [F6], so their product $a_{st}a_{ts}$ would be an integer; but step 2.1 places that product strictly between the consecutive integers $2$ and $3$. This contradiction refutes (a) for the geometry $S=\{s,t\}$, $m(s,t)=5$: at least one of $a_{st},a_{ts}$ is non-integral for every scaling. Equivalently, [F8] would force $m(s,t)\in\{2,3,4,6\}$, which $m(s,t)=5$ contradicts, and [F5] records the resulting exclusion of $I_2(5)$ from the crystallographic finite types. [F5, F6, F8, step 2.1]

3.2 No root system realizes (b): suppose $\Psi$ were a reduced crystallographic Euclidean root system with base $\{\alpha,\beta\}$ and $u:=\frac{(\alpha,\beta)}{|\alpha|\,|\beta|}=-\cos(\pi/5)$. By [F16], $\{\alpha,\beta\}$ is linearly independent, so the roots are nonproportional and [F10] applies. Unfolding the two Cartan integers, $$n_{\alpha\beta}n_{\beta\alpha}=\frac{2(\beta,\alpha)}{(\alpha,\alpha)}\cdot\frac{2(\alpha,\beta)}{(\beta,\beta)}=\frac{4(\alpha,\beta)^2}{(\alpha,\alpha)(\beta,\beta)}=4u^2=4\cos^2\frac{\pi}{5},$$ and by step 2.1 this number lies in $(2,3)$; but [F10] states $n_{\alpha\beta}n_{\beta\alpha}=4\cos^2\theta\in\{0,1,2,3\}$, a contradiction. Hence no reduced crystallographic root system has a base with the normalized pairing $-\cos(\pi/5)$. This is consistent with [F10] (iv) read together with [F11]: a rank-two base has nonacute angle $\theta$ among $90^\circ,120^\circ,135^\circ,150^\circ$, and each of those angles gives $4\cos^2\theta\in\{0,1,2,3\}$, never the value $4\cos^2(\pi/5)\in(2,3)$. [F9, F10, F11, F16, step 2.1, algebra]

4.1 The failure and its range: the dropped hypothesis identified by this counterexample is that a crystallographic scaling requires the cross product $a_{st}a_{ts}=4\cos^2(\pi/m(s,t))$ to be an integer, hence (for positive definite $B$) equal to one of $0,1,2,3$, equivalently a label $m\in\{2,3,4,6\}$; the value $m=5$ gives the non-integral number $4\cos^2(\pi/5)=2+2\cos(2\pi/5)\in(2,3)$ that is strictly between the admissible integer values of that product. Both refutations are independent of each other: (a) is a statement about scalings of one Coxeter geometry, (b) about bases of reduced crystallographic root systems, and their common obstruction is the same interval $(2,3)$ for $4\cos^2(\pi/5)$; the full exclusion of $I_2(5)$ from the Weyl types is the criterion (1) of [[thm-cg-crystallographic-finite-type-and-lattice-stability]]. No choice principle is used, and the computations are finite real arithmetic in a two-dimensional space. [F5, F6, F8, F10, given] ∎
