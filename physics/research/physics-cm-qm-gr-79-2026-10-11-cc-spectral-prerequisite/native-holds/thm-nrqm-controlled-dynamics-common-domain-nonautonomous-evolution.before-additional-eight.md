---
id: thm-nrqm-controlled-dynamics-common-domain-nonautonomous-evolution
aliases: [nrqm-controlled-dynamics-common-domain-nonautonomous-evolution]
kind: theorem
domain: mathematics
title: "Common-domain nonautonomous evolution"
status: draft
origin: pipeline
dependency_level: 0
deps: [thm-bounded-inverse-theorem, def-bounded-linear-operator, def-operator-norm, lem-self-adjoint-operator-generates-a-strongly-continuous-unitary-group, thm-stone-one-parameter-unitary-groups, def-symmetric-self-adjoint-and-essentially-self-adjoint, def-hilbert-space, lem-fundamental-theorem-of-calculus-for-banach-valued-continuous-curves, def-countable-choice]
dependency_roles:
  thm-bounded-inverse-theorem: mathematical-premise
  def-bounded-linear-operator: mathematical-premise
  def-operator-norm: mathematical-premise
  lem-self-adjoint-operator-generates-a-strongly-continuous-unitary-group: mathematical-premise
  thm-stone-one-parameter-unitary-groups: mathematical-premise
  def-symmetric-self-adjoint-and-essentially-self-adjoint: mathematical-premise
  def-hilbert-space: mathematical-premise
  lem-fundamental-theorem-of-calculus-for-banach-valued-continuous-curves: mathematical-premise
  def-countable-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "G. Teschl, Mathematical Methods in Quantum Mechanics, 1st edition 2009, Chapter 5 pp. 123-131 (generators of unitary groups) and Section 6.6 pp. 153-159 (norm resolvent convergence)"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
    - title: "T. Kato, Linear Operators and Their Applications, Chapter 2 (evolution equations with a constant domain; standard reference for the propagator construction)"
      url: "https://sci.mu.edu.iq/wp-content/uploads/2021/08/FUNCTIONAL-ANALYSIS-freebookcenter.net_.pdf"
---

## Statement

Assume the Axiom of Countable Choice ([[def-countable-choice]]). Let $H$ be a
complex Hilbert space, let $Y$ be a dense linear subspace of $H$ that is itself
a Hilbert space continuously embedded in $H$ (for instance $Y=D(A_0)$ with the
graph norm of a self-adjoint $A_0$), let $T>0$, and let $A(t)$ for
$t\in[0,T]$ be an operator with $D(A(t))=Y$, self-adjoint as an operator on $H$,
such that $t\mapsto A(t)$ belongs to $C^1([0,T];\mathcal B(Y,H))$
([[def-bounded-linear-operator]], [[def-operator-norm]],
[[def-symmetric-self-adjoint-and-essentially-self-adjoint]]). Put $L:=\sup_t\|A'(t)\|_{\mathcal B(Y,H)}$.
Then:

(a) *Existence and uniqueness of a strong propagator.* There is a family
$U(t,s)$, $0\le s\le t\le T$, of unitary operators on $H$ with:
$U(s,s)=I$; $U(t,s)U(s,r)=U(t,r)$; $(t,s)\mapsto U(t,s)\xi$ continuous on
$\{s\le t\}$ for each $\xi\in H$; $U(t,s)Y=Y$ with
$\|U(t,s)y\|_Y\le C_T\|y\|_Y$ for a constant $C_T$ independent of
$(s,t)\in[0,T]^2$; and for every $y\in Y$ the map $t\mapsto U(t,s)y$ is $C^1$
in $H$ with
$$i\,\partial_tU(t,s)y=A(t)U(t,s)y,\qquad s\le t\le T.$$

(b) *Uniqueness.* If $V(t,s)$ is another family with the same strong equation
on $Y$, $V(s,s)=I$ and $\sup_{r}\|V(r,s)y\|_{H}<\infty$, then $V=U$.

(c) *Equations for the reverse and adjoint.* $U(t,s)Y=Y$ for all $0\le s\le t\le T$
and $U(s,t):=U(t,s)^{-1}$ satisfies $i\partial_sU(s,t)y=-U(s,t)A(s)y$ for
$y\in Y$; $U(t,s)^*=U(s,t)$.

The theorem is stated for the abstract family $A$; a physical generator is
obtained by $A=H_{\mathrm{energy}}/\hbar$ after choosing a time unit.

## Facts & Assumptions

**Given:** the Hilbert spaces $Y\subseteq H$, the family $A(t)$ self-adjoint on the common domain $Y$ with $C^1$ dependence in $\mathcal B(Y,H)$, $L$ the Lipschitz constant of $t\mapsto A(t)$.

[F1] $Y$ is complete in its own norm and $A(t):Y\to H$ is bounded with $D(A(t))=Y$, and $A(t)$ is self-adjoint; the adjoint is taken with respect to $H$ ([[def-symmetric-self-adjoint-and-essentially-self-adjoint]], [[def-bounded-linear-operator]]).

[F2] Bounded inverse theorem: a bounded bijection between Banach spaces has bounded inverse ([[thm-bounded-inverse-theorem]]).

[F3] For each $t$, $A(t)\pm i:Y\to H$ is a bounded bijection (self-adjointness gives $\operatorname{ran}(A(t)\pm i)=H$ and injectivity), so $K(t):=A(t)-i:Y\to H$ has a bounded inverse $K(t)^{-1}\in\mathcal B(H,Y)$ by [F2]; the Neumann series $K(t)^{-1}=K(s)^{-1}\bigl(I+(A(t)-A(s))K(s)^{-1}\bigr)^{-1}$ converges in $\mathcal B(H,Y)$ for $|t-s|<1/L$ by [F1], giving $K(t)^{-1}$ locally of class $C^1$ in $\mathcal B(H,Y)$; compactness of $[0,T]$ gives uniform bounds and a constant $C_1$ with $\|K(t)K(s)^{-1}\|\le1+C_1|t-s|$.

[F4] Fundamental theorem of calculus for Banach-valued curves and completeness of $H$ ([[lem-fundamental-theorem-of-calculus-for-banach-valued-continuous-curves]], [[def-hilbert-space]]).

## Proof

1.1 [Product approximation] For a partition $0=t_0<\cdots<t_N=T$ of mesh $\delta$ define $U_\delta(t,s)$ on each subinterval by products of the autonomous unitaries $e^{-i\Delta_jA(t_j)}$ (left endpoints), using the $[0,T]$-parametrization. Each factor preserves $Y$ and commutes with $K(t_j)$; inserting the factors $K(t_{j+1})K(t_j)^{-1}$ between consecutive steps and using [F3] gives $\|U_\delta(t,s)y\|_Y\le C_T\|y\|_Y$ uniformly in the partition and in $y\in Y$. For two partitions of meshes $\delta,\varepsilon$ one differentiates $U_\delta(t,r)U_\varepsilon(r,s)y$ between grid points (where both factors solve the autonomous equation on the intervening interval) and integrates, obtaining $\|(U_\delta(t,s)-U_\varepsilon(t,s))y\|\le C_TL\,T(\delta+\varepsilon)\|y\|_Y$. [F1, F3, F4, algebra, F2]

2.1 [The limit family] By step 1.1 the net $U_\delta(t,s)y$ is Cauchy in $H$ for every $y\in Y$ as the mesh tends to $0$; completeness [F4] gives a limit $U(t,s)y$ satisfying the uniform $Y$-bound, and the estimate is linear in $y$, so $U(t,s)$ extends uniquely to a bounded operator on $H$ with norm at most $1$ by density and by the uniform bound on the dense set $Y$. Passing to the limit in the product identities and in the estimates for fixed vectors gives $U(s,s)=I$, the cocycle identity, joint strong continuity and the reverse family $U(s,t):=U(t,s)^{-1}$ by the same construction with the reversed orientation. [step 1.1, F4, algebra]

3.1 [The strong equation] The stepwise equation paired against a fixed $v\in Y$ passes to the limit and yields the weak identity $\langle U(t,s)y,v\rangle-\langle y,v\rangle=-i\int_s^t\langle U(r,s)y,A(r)v\rangle dr$ for $y,v\in Y$, then for $y\in Y$, $v\in H$ by density. To upgrade it, put $K(t)=A(t)-i$, $B(t):=K'(t)K(t)^{-1}\in\mathcal B(H)$ (norm-continuous by [F3]) and solve the Volterra equation $W(t,s)y=U(t,s)y+\int_s^tU(t,r)B(r)W(r,s)y\,dr$ by the factorial ordered-series bounds; the function $g(t):=W(t,s)K(s)y$ satisfies the weak equation $g'=-iA(t)g+B(t)g$, and $\psi(t):=K(t)^{-1}g(t)$ is continuous in $Y$. Testing against the $C^1(Y)\cap C^1(H)$ test family $h(t)=(A(t)+i)^{-1}v$ (extended across the endpoint by reflection and mollified in time), the terms $B$ and $h'$ cancel by [F3] and self-adjointness of $A(t)$, and the remaining identity is $\frac{d}{dt}\langle\psi(t),v\rangle=-i\langle A(t)\psi(t),v\rangle$ for all $v\in H$. Since $t\mapsto A(t)\psi(t)$ is continuous $H$-valued [F1], Bochner integration and separation of the dual give $\psi'=-iA\psi$ strongly in $H$; hence $U(t,s)Y\subseteq Y$ and the strong equation holds. [step 2.1, F1, F3, F4, algebra]

4.1 [Uniqueness] If $\eta=U-V$ is the difference of two strong solutions, then $\frac{d}{dt}\|\eta(t)y\|^2=2\operatorname{Re}\langle-iA(t)\eta(t)y,\eta(t)y\rangle=0$ by self-adjointness of $A(t)$, so $\eta(t)y=0$; density of $Y$ gives $\eta=0$. The adjoint identity follows from the cocycle and unitarity. [step 3.1, F1, F4, algebra] ∎
