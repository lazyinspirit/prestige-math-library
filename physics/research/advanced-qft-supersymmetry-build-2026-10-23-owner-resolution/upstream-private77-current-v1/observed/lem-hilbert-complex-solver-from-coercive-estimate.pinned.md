---
id: lem-hilbert-complex-solver-from-coercive-estimate
kind: lemma
title: A coercive Hilbert-complex estimate solves the closed equation
status: published
origin: pipeline
deps:
  - def-hilbert-space
  - thm-riesz-representation-for-hilbert-space
  - thm-orthogonal-decomposition-by-a-closed-subspace
  - thm-cauchy-schwarz-in-an-inner-product-space
  - def-hilbert-space-adjoint
  - def-self-adjoint-positive-unitary-and-normal-operator
  - def-space-of-bounded-linear-operators
  - def-densely-defined-closed-and-closable-operator
  - thm-double-orthogonal-complement-is-closure
  - def-countable-choice
  - def-axiom-of-choice
justified_by: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Jean-Pierre Demailly, Complex Analytic and Differential Geometry"
      url: https://www-fourier.univ-grenoble-alpes.fr/~demailly/manuscripts/agbook.pdf
      locator: "Ch. VIII §1, Theorem 1.2 and proof, printed pp. 364-365 (von Neumann Theorem 1.1 on p. 364); the coercivity hypothesis is (1.3). Ch. VIII §4, Theorem 4.5 and its proof, printed pp. 370-372: the Cauchy-Schwarz inequality with the A-weight and the Hahn-Banach step repeated from Th. 1.2."
    - title: "Mohammad Jabbari, Several Complex Variables course notes"
      url: https://www.cimat.mx/~mohammad.jabbari/course-SCV.pdf
      locator: "§4.1.2, Theorem 72 and its proof, PDF pp. 85-87, with the energy estimate (4.4) and the orthogonal-decomposition argument."
    - title: "Harold P. Boas, Lecture Notes on Several Complex Variables"
      url: https://haroldpboas.gitlab.io/courses/650-2019c/notes.pdf
      locator: "§3.3.3, printed pp. 81-82: the basic estimate implies existence of a solution of the dbar equation in L2."
verification:
  audited: 2026-10-02
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
---

## Statement

Assume the Axiom of Choice (AC). Let $H_0,H_1,H_2$ be complex Hilbert
spaces and let $T:H_0\supseteq D(T)\to H_1$ and $S:H_1\supseteq D(S)\to H_2$
be closed densely defined linear operators with $T(D(T))\subseteq\ker S$, so
that $S\circ T=0$ on $D(T)$. Suppose there is a constant $C>0$ with
$$\|T^*x\|^2+\|Sx\|^2\ge C\|x\|^2\qquad\text{for all }x\in D(T^*)\cap D(S),$$
where $T^*$ is the Hilbert adjoint of $T$. Then for every $f\in\ker S$:

(i) there exists $u\in D(T)$ with $Tu=f$;
(ii) among all such $u$ there is exactly one of least norm, and it lies in
$(\ker T)^\perp$;
(iii) that least-norm solution $u_0$ satisfies
$\|u_0\|\le C^{-1/2}\|f\|$.

Independently of the constant $C$, the following $A$-weighted form of the
argument holds.

(iv) Suppose $A\in\mathcal B(H_1)$ is a bounded self-adjoint operator with
$\langle Ax,x\rangle\ge0$ for every $x\in H_1$, that
$$\langle Ax,x\rangle\le\|T^*x\|^2+\|Sx\|^2\qquad\text{for all }x\in D(T^*)\cap D(S),$$
and that $f\in\ker S$ has the form $f=Ag$ for some $g\in H_1$. Then there
exists $u\in D(T)$ with $Tu=f$, and the least-norm such $u_0$ satisfies
$$\|u_0\|^2\le\langle f,g\rangle .$$

No closedness of the range of $T$ and no surjectivity of $S$ is assumed.

## Facts & Assumptions

**Given:** The Axiom of Choice; complex Hilbert spaces $H_0,H_1,H_2$; closed densely defined linear operators $T:H_0\supseteq D(T)\to H_1$ and $S:H_1\supseteq D(S)\to H_2$ with $T(D(T))\subseteq\ker S$; a constant $C>0$ with $\|T^*x\|^2+\|Sx\|^2\ge C\|x\|^2$ for every $x\in D(T^*)\cap D(S)$; and an element $f\in\ker S$. For the independent part (iv) assume in addition a bounded self-adjoint operator $A\in\mathcal B(H_1)$ with $\langle Ax,x\rangle\ge0$ for every $x\in H_1$ and $\langle Ax,x\rangle\le\|T^*x\|^2+\|Sx\|^2$ for every $x\in D(T^*)\cap D(S)$, together with an element $g\in H_1$ satisfying $f=Ag$.

[F1] For the operator $T:D(T)\subseteq H_0\to H_1$, define $D(T^*)$ to be the set of $y\in H_1$ for which $x\mapsto\langle Tx,y\rangle$ is bounded in the $H_0$ norm. Density of $D(T)$, [F5] and [F4] give a unique $T^*y\in H_0$ with $\langle Tx,y\rangle=\langle x,T^*y\rangle$ for every $x\in D(T)$. The graph identities needed below are proved in step 1.3.

[F2] For a linear subspace $M$ of a Hilbert space, $M^{\perp\perp}=\overline M$ ([[thm-double-orthogonal-complement-is-closure]]).

[F3] If $M$ is a closed linear subspace of a real or complex Hilbert space $H$, then every $x\in H$ has a unique decomposition $x=m+n$ with $m\in M$ and $n\in M^\perp$ ([[thm-orthogonal-decomposition-by-a-closed-subspace]]).

[F4] For a bounded linear functional on a complex Hilbert space there is a unique representing vector of the same norm ([[thm-riesz-representation-for-hilbert-space]]).

[F5] A bounded functional on a dense linear subspace extends uniquely by limits to the ambient Hilbert space: boundedness makes values on a convergent approximating sequence Cauchy and makes the limit independent of the sequence. The resulting functional has a Riesz vector by [F4].

[F6] An operator is densely defined when its domain is dense, and closed when its graph $\Gamma(T)$ is a closed subset of $H\oplus H$ ([[def-densely-defined-closed-and-closable-operator]]).

[F7] In a real or complex inner-product space $|\langle x,y\rangle|\le\|x\|\,\|y\|$ for all vectors $x,y$ ([[thm-cauchy-schwarz-in-an-inner-product-space]]).

[F8] A complex Hilbert space is a complex inner-product space whose induced norm is complete ([[def-hilbert-space]]).

[F9] AC states that every family of nonempty sets has a choice function ([[def-axiom-of-choice]]), and it supplies its countable instance ([[def-countable-choice]]).

[F10] A bounded self-adjoint operator $A\in\mathcal B(H_1)$ satisfies $\langle Ax,y\rangle=\langle x,Ay\rangle$ for all $x,y\in H_1$, so in particular $\langle Ax,x\rangle\in\mathbb R$ ([[def-hilbert-space-adjoint]], [[def-self-adjoint-positive-unitary-and-normal-operator]], [[def-space-of-bounded-linear-operators]]).

**Choice use.** AC is used only through the countable instance consumed by the operator, decomposition and representation facts [F1], [F2], [F3] and [F4]. The adjoint graph argument, functional extension, minimal-norm projection and the $A$-weighted variant select nothing further.

## Proof

**Proof technique:** direct.

1.1 Since $S$ is closed, its kernel is closed: if $x_k\in\ker S$ and $x_k\to x$ in $H_1$ then $(x_k,Sx_k)=(x_k,0)\to(x,0)$ lies in the closed graph of $S$, so $x\in D(S)$ and $Sx=0$; the same argument shows that $\ker T$ is a closed subspace of $H_0$, and $T(D(T))\subseteq\ker S$ says exactly that the composition $S\circ T$ is zero on $D(T)$. [F6, given, algebra]

1.2 Semidefinite Cauchy–Schwarz. For all $x,y\in H_1$ one has $|\langle Ax,y\rangle|\le\langle Ax,x\rangle^{1/2}\langle Ay,y\rangle^{1/2}$: fix $x,y$ and note that for every real $t$, using [F10] and $\langle Ax,x\rangle\ge0$, $0\le\langle A(x+ty),x+ty\rangle=\langle Ax,x\rangle+2t\operatorname{Re}\langle Ax,y\rangle+t^2\langle Ay,y\rangle$; if $\langle Ay,y\rangle>0$ the discriminant of this nonnegative quadratic is $\le0$, so $(\operatorname{Re}\langle Ax,y\rangle)^2\le\langle Ax,x\rangle\langle Ay,y\rangle$, while if $\langle Ay,y\rangle=0$ the same quadratic forces $\operatorname{Re}\langle Ax,y\rangle=0$ and the inequality holds trivially; choosing $\lambda$ with $|\lambda|=1$ and $\lambda\langle Ax,y\rangle=|\langle Ax,y\rangle|$ and applying the real-part inequality to the pair $(\lambda x,y)$, whose quadratic values are unchanged because $A$ is linear and $\langle A(\lambda x),\lambda x\rangle=\langle Ax,x\rangle$, gives the stated modulus bound. [F10, given, algebra]

1.3 The adjoint defined in [F1] has a linear domain. Directly from its defining identity, $(\operatorname{ran}T)^\perp=\ker T^*$: vanishing of $\langle Tx,y\rangle$ for every $x\in D(T)$ is equivalent to $T^*y=0$. More precisely, in $H_0\oplus H_1$ one has $$\Gamma(T)^\perp=\{(-T^*y,y):y\in D(T^*)\},$$ because $(a,y)$ is orthogonal to every $(x,Tx)$ exactly when $\langle Tx,y\rangle=\langle x,-a\rangle$ for every $x\in D(T)$. Since $T$ is closed, [F2] gives $\Gamma(T)=\Gamma(T)^{\perp\perp}$. [F1, F2, F4, F6, given]

2.1 For $x\in D(T^*)$ decompose $x=x'+x''$ with $x'\in\ker S$ and $x''\in(\ker S)^\perp$ by [F3] applied to the closed subspace $\ker S$ of step 1.1; since $T(D(T))\subseteq\ker S$, taking orthogonal complements gives $(\ker S)^\perp\subseteq(\operatorname{ran}T)^\perp=\ker T^*$ by step 1.3, so $x''\in\ker T^*\subseteq D(T^*)$, hence $x'=x-x''\in D(T^*)$ as well, with $T^*x'=T^*x-T^*x''=T^*x$; moreover $\langle x,f\rangle=\langle x',f\rangle+\langle x'',f\rangle=\langle x',f\rangle$ because $x''\perp\ker S\ni f$. [F3, step 1.1, step 1.3, given, algebra]

3.1 For every $x\in D(T^*)$ the vector $x'$ of step 2.1 lies in $D(T^*)\cap D(S)$ and $Sx'=0$, so the hypothesis and step 2.1 give $\|x'\|^2\le C^{-1}(\|T^*x'\|^2+\|Sx'\|^2)=C^{-1}\|T^*x\|^2$, and [F7] together with step 2.1 gives $|\langle x,f\rangle|^2=|\langle x',f\rangle|^2\le\|x'\|^2\|f\|^2\le C^{-1}\|f\|^2\|T^*x\|^2$. [F7, step 2.1, given, algebra]

4.1 Define $\ell$ on the subspace $V_0:=T^*(D(T^*))\subseteq H_0$ by $\ell(T^*x):=\langle x,f\rangle$; if $T^*x=0$ then step 3.1 gives $|\langle x,f\rangle|\le C^{-1/2}\|f\|\cdot0=0$, so $\ell$ is well defined, and step 3.1 says $|\ell(w)|\le C^{-1/2}\|f\|\,\|w\|$ for every $w\in V_0$, so $\ell$ is linear and bounded on $V_0$; let $V:=\overline{V_0}\subseteq H_0$ and define $\widetilde\ell(y):=\lim_k\ell(w_k)$ for $y\in V$ and any sequence $w_k\in V_0$ with $w_k\to y$: the sequence $(\ell(w_k))$ is Cauchy because $|\ell(w_k)-\ell(w_l)|\le C^{-1/2}\|f\|\,\|w_k-w_l\|$, and the limit exists by [F8]; the countable instance of [F9] is the choice principle consumed by [F1], [F3], [F4] and [F8] here, and the construction selects nothing further; it is independent of the sequence because two sequences for the same $y$ have difference tending to $0$, and passing to limits of the defining inequalities preserves linearity (limits of sums and scalar multiples) and gives $|\widetilde\ell(y)|\le C^{-1/2}\|f\|\,\|y\|$. [F8, F9, step 3.1, given, algebra]

4.2 $A$-weighted estimate. For every $x\in D(T^*)$, with $x=x'+x''$ as in step 2.1, the vector $x'$ lies in $D(T^*)\cap D(S)$ with $Sx'=0$ and $T^*x'=T^*x$ (step 3.1 for the first two, step 2.1 for the third), so by step 1.2 applied to the pair $(x',g)$, by [F10], by $f=Ag$ and by the domination hypothesis for (iv) on $x'$: $|\langle x,f\rangle|=|\langle x',f\rangle|=|\langle x',Ag\rangle|=|\langle Ax',g\rangle|\le\langle Ax',x'\rangle^{1/2}\langle Ag,g\rangle^{1/2}\le(\|T^*x'\|^2+\|Sx'\|^2)^{1/2}\langle f,g\rangle^{1/2}=\|T^*x\|\,\langle f,g\rangle^{1/2}$, where $\langle Ag,g\rangle=\langle f,g\rangle$ and $\langle f,g\rangle\ge0$ by positivity of $A$. [F10, step 2.1, step 3.1, step 1.2, given, algebra]

5.1 Let $P:H_0\to V$ be the orthogonal projection onto the closed subspace $V$, defined for $y\in H_0$ by the unique decomposition $y=Py+(y-Py)$ with $y-Py\in V^\perp$ of [F3], and put $\Lambda:=\widetilde\ell\circ P$; then $\Lambda$ is linear and $|\Lambda(y)|\le C^{-1/2}\|f\|\,\|y\|$ for all $y\in H_0$, so by [F4] there is a unique $u\in H_0$ with $\Lambda(y)=\langle y,u\rangle$ for all $y\in H_0$ and $\|u\|=\|\Lambda\|\le C^{-1/2}\|f\|$. [F3, F4, step 4.1, given, algebra]

6.1 For every $x\in D(T^*)$, steps 4.1 and 5.1 give $\langle T^*x,u\rangle=\langle x,f\rangle$. Therefore $(u,f)$ is orthogonal to every $(-T^*x,x)\in\Gamma(T)^\perp$ by step 1.3 (take complex conjugates of the displayed identity). Since $T$ is closed, $(u,f)\in\Gamma(T)^{\perp\perp}=\Gamma(T)$; hence $u\in D(T)$ and $Tu=f$, proving (i). [F2, step 1.3, step 4.1, step 5.1]

6.2 Define $\ell$ on $V_0:=T^*(D(T^*))$ by $\ell(T^*x):=\langle x,f\rangle$ for $x\in D(T^*)$ and put $\beta:=\langle f,g\rangle^{1/2}$: step 4.2 with $T^*x=0$ shows $\ell$ is well defined, and it shows $|\ell(w)|\le\beta\|w\|$ for every $w\in V_0$, so $\ell$ is linear and bounded; the extension $\widetilde\ell$ of $\ell$ to $V:=\overline{V_0}$ by limits along sequences in $V_0$, its independence of the chosen sequence, its linearity and its bound $|\widetilde\ell(y)|\le\beta\|y\|$ are verified by the same computation as in step 4.1 with $\beta$ in place of $C^{-1/2}\|f\|$, with the Cauchy property supplied by [F8] and the same countable instance of [F9]; letting $P$ be the orthogonal projection of [F3] onto $V$ as in step 5.1, the functional $\Lambda:=\widetilde\ell\circ P$ is linear with $|\Lambda(y)|\le\beta\|y\|$ on $H_0$, so [F4] gives a unique $u\in H_0$ with $\Lambda(y)=\langle y,u\rangle$ for all $y\in H_0$ and $\|u\|=\|\Lambda\|\le\beta=\langle f,g\rangle^{1/2}$. [F3, F4, F8, F9, step 4.1, step 4.2, given, algebra]

7.1 By step 1.1 the subspace $\ker T$ is closed, so [F3] decomposes the solution $u$ of step 6.1 as $u=u_1+u_2$ with $u_1\in\ker T$ and $u_2\in(\ker T)^\perp$; then $Tu_2=Tu-Tu_1=f$, so $u_2$ is a solution lying in $(\ker T)^\perp$, every solution has the form $u_2+k$ with $k\in\ker T$, and since $k\perp u_2$ the Pythagorean identity gives $\|u_2+k\|^2=\|u_2\|^2+\|k\|^2\ge\|u_2\|^2$ with equality only for $k=0$; thus $u_2$ is the unique least-norm solution and $\|u_2\|\le\|u\|\le C^{-1/2}\|f\|$ by step 5.1, proving (ii) and (iii). [F3, step 1.1, step 5.1, step 6.1, given, algebra]

7.2 For every $x\in D(T^*)$, step 6.2 gives $\langle T^*x,u\rangle=\langle x,f\rangle$. As in step 6.1, the graph identity of step 1.3 and closedness of $T$ yield $(u,f)\in\Gamma(T)$, so $u\in D(T)$ and $Tu=f$. This proves existence in (iv). [F2, step 1.3, step 6.1, step 6.2]

8.1 By step 1.1 the subspace $\ker T$ is closed, so [F3] decomposes the solution $u$ of step 7.2 as $u=u_1+u_0$ with $u_1\in\ker T$ and $u_0\in(\ker T)^\perp$; then $Tu_0=Tu-Tu_1=f$ and the argument of step 7.1 shows that $u_0$ is the unique least-norm solution, with $\|u_0\|\le\|u\|\le\langle f,g\rangle^{1/2}$ by step 6.2, hence $\|u_0\|^2\le\langle f,g\rangle$, which proves (iv); moreover with $A:=C\,\mathrm{id}$ and $g:=f/C$ the hypotheses of (iv) hold by the coercivity assumption, and its conclusion specializes to $\|u_0\|^2\le\langle f,f/C\rangle=C^{-1}\|f\|^2$, in agreement with (iii). [F3, step 1.1, step 7.1, step 6.2, step 7.2, given, algebra] ∎
