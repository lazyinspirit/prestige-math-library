---
id: thm-nrqm-controlled-dynamics-common-domain-nonautonomous-evolution
aliases: [nrqm-controlled-dynamics-common-domain-nonautonomous-evolution]
kind: theorem
domain: mathematics
title: "Common-domain nonautonomous evolution"
status: published
origin: pipeline
dependency_level: 0
deps: [thm-orthogonal-decomposition-by-a-closed-subspace, thm-self-adjoint-resolvent-estimate, def-bounded-linear-operator, def-operator-norm, def-symmetric-self-adjoint-and-essentially-self-adjoint, def-hilbert-space, lem-fundamental-theorem-of-calculus-for-banach-valued-continuous-curves, def-countable-choice]
dependency_roles:
  thm-orthogonal-decomposition-by-a-closed-subspace: mathematical-premise
  thm-self-adjoint-resolvent-estimate: mathematical-premise
  def-bounded-linear-operator: mathematical-premise
  def-operator-norm: mathematical-premise
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

(b) *Uniqueness.* If $V(t,s)$ is another family of bounded linear operators on $H$ with the same strong equation
on $Y$, $V(s,s)=I$ and $\sup_{r}\|V(r,s)y\|_{H}<\infty$, then $V=U$.

(c) *Equations for the reverse and adjoint.* $U(t,s)Y=Y$ for all $0\le s\le t\le T$
and $U(s,t):=U(t,s)^{-1}$ satisfies $i\partial_sU(s,t)y=A(s)U(s,t)y$ for
$y\in Y$; $U(t,s)^*=U(s,t)$. Equivalently, differentiating the second
argument of the forward propagator gives $i\partial_sU(t,s)y=-U(t,s)A(s)y$.
The domain maps are jointly strongly continuous in $Y$.

The theorem is stated for the abstract family $A$; a physical generator is
obtained by $A=H_{\mathrm{energy}}/\hbar$ after choosing a time unit.

## Facts & Assumptions

**Given:** CC, $H,Y,A,T$ as above. Inner products are linear in the first
argument. Strong integrals of continuous Hilbert-valued curves are their
norm limits of Riemann sums; uniform continuity gives existence, and the
elementary fundamental theorem of calculus holds for them
([[lem-fundamental-theorem-of-calculus-for-banach-valued-continuous-curves]]).

[F1] The actual CC self-adjoint resolvent estimate [[thm-self-adjoint-resolvent-estimate]] gives
$R_z=(A-z)^{-1}\in\mathcal B(H)$, $\|R_z\|\le|\operatorname{Im}z|^{-1}$,
its exact range $D(A)$, adjoint $R_z^*=R_{\overline z}$, and commuting
resolvents. A self-adjoint operator is closed. The CC orthogonal projection
theorem [[thm-orthogonal-decomposition-by-a-closed-subspace]] is available; it gives Riesz representation for
bounded functionals by projecting onto their closed kernels. No Stone
theorem, Banach open mapping theorem, or arbitrary Hilbert basis is used.

## Proof

1.1 [A CC Hilbert inverse lemma] A bounded bijection $C:E\to F$ between Hilbert spaces has bounded inverse under CC, as follows. The image $F_n=C\{x:\|x\|\le n\}$ is closed: if $Cx_j\to z$, choose the unique preimages $x_j$ with $\|x_j\|\le n$. In the closed span of this specified countable sequence, Gram-Schmidt applied in order to $x_j$ gives a finite or countable ONB. Successive canonical subsequences make all its scalar coordinates converge (bisect bounded real and imaginary coordinate ranges, retain the first half containing infinitely many indices, then use least indices and take the diagonal). Bessel's inequality gives a vector $x$ of norm at most $n$ with those coordinates. Finite-coordinate approximation and the uniform norm bound show $x_j$ along this subsequence converges weakly to $x$ against every vector of the span; orthogonal projection gives weak convergence against every vector of $E$. Testing $Cx_j$ against each fixed vector of $F$ shows $Cx=z$. Hence $F_n$ is closed, convex and symmetric, and $F=\bigcup_nF_n$. If no $F_n$ contains a neighborhood of zero, CC chooses $z_{nm}\in F\setminus F_n$ with $\|z_{nm}\|<1/m$. The closed span $F_0$ of this countable family has a specified countable dense list of rational-complex finite combinations. Each $F_n\cap F_0$ has empty interior in $F_0$: otherwise its convexity and symmetry would imply a ball about zero lies in it, contradicting $z_{nm}\to0$. The Baire contradiction on this specified separable complete space needs no DC: given closed sets with empty interior, construct nested closed balls of radii at most $2^{-j}$, with each contained in the previous ball's interior and avoiding the $j$th closed set, by taking the first eligible center in the fixed dense list and the first eligible positive rational radius. The centers are Cauchy and completeness supplies a point avoiding every closed set. This contradicts $F_0=\bigcup_n(F_n\cap F_0)$. Thus some $F_n$ contains a ball of radius $r>0$ about zero; scaling gives $\|C^{-1}z\|\le 2n\|z\|/r$. All subsequences, dense lists and nested-ball recursions above are uniquely specified; only the countable family $z_{nm}$ requires CC. [given, F1, construct, algebra]

1.2 [Resolvent autonomous groups on arbitrary H] For a fixed self-adjoint $A$, let $J_n=n^2R_{in}R_{-in}$ and $A_n=AJ_n=(n^2/2)(R_{in}+R_{-in})$. Resolvent algebra gives $J_n=(n/(2i))(R_{in}-R_{-in})$, $\|J_n\|\le1$, and bounded self-adjoint $A_n$ with $\|A_n\|\le n$. They and their bounded power-series exponentials commute with one another. For $y\in D(A)$, $(I-J_n)y=\tfrac12(R_{in}+R_{-in})Ay$, so $\|(I-J_n)y\|\le\|Ay\|/n$. Density and $\|J_n\|\le1$ give $J_n\to I$ strongly on all $H$; on $D(A)$, $A_ny=J_nAy\to Ay$. Define $E_n(t)=\exp(-itA_n)$ by its norm-convergent series. Differentiation of that series, self-adjointness and the group law prove unitarity. The bounded Duhamel formula and commutation give $\|(E_n(t)-E_m(t))y\|\le |t|\|(A_n-A_m)y\|$, uniformly on bounded $t$ intervals. Therefore $E_n(t)$ has a strong limit $E(t)$ uniformly on bounded intervals, first on $D(A)$ and then on all $H$. The opposite-time limits and products give $E(t)E(-t)=I$; limits preserve norms, so it is a strongly continuous unitary group. Resolvent commutation shows $E_n(t)D(A)\subset D(A)$ and $AE_n(t)y=E_n(t)Ay$ (use graph-norm convergence of the power series). Closedness of $A$ then gives $E(t)y\in D(A)$ and $AE(t)y=E(t)Ay$. Passing through the integral identity for $E_n$ gives $E(t)y=y-i\int_0^tE(r)Ay\,dr$, hence $E'(t)y=-iAE(t)y$. In the norm $\|(A-i)y\|$, this group is isometric and strongly continuous. No separability of $H$ or spectral-measure selection was used. [F1, construct, algebra]

2.1 [Uniform moving graph equivalence] Put $K(t)=A(t)-i:Y\to H$. It is a bounded bijection by [F1], so step 1.1 gives $K(t)^{-1}\in\mathcal B(H,Y)$. Around a fixed $s$, $K(t)^{-1}=K(s)^{-1}[I+(K(t)-K(s))K(s)^{-1}]^{-1}$ whenever $\|K(t)-K(s)\|_{Y\to H}\|K(s)^{-1}\|_{H\to Y}<1$. The Neumann series and its differentiated inverse identity prove $K^{-1}\in C^1([0,T];\mathcal B(H,Y))$, with $(K^{-1})'=-K^{-1}K'K^{-1}$. Finite covering of the compact time interval gives $M=\sup_t\|K(t)^{-1}\|_{H\to Y}<\infty$ and $N=\sup_t\|K(t)\|_{Y\to H}<\infty$. Let $L=\sup_t\|K'(t)\|_{Y\to H}$. Then $\|K(t)K(s)^{-1}-I\|_{H\to H}\le LM|t-s|$. Thus the given $Y$ norm and every moving graph norm $\|K(t)y\|_H$ are uniformly equivalent. The function $B(t)=K'(t)K(t)^{-1}$ is norm-continuous on $H$, with norm at most $LM$. [step 1.1, F1, construct, algebra]

3.1 [Frozen products with their true graph bounds] Use the prescribed uniform partitions of mesh $h_n=T/n$, with left-endpoint function $\tau_n(r)=h_n\lfloor r/h_n\rfloor$ (including $\tau_n(T)=T$) and frozen generator $A_n^{\mathrm{fr}}(r)=A(\tau_n(r))$. Distinguish this notation from step 1.2's autonomous approximants. Define $U_n(t,s)$ by the finite time-ordered product of step 1.2's exact autonomous groups, for any orientation of $s,t$. Each factor preserves $Y$ and is isometric for the graph norm at its own frozen time. Between successive factors insert $K(t_{j+1})K(t_j)^{-1}$; step 2.1 bounds their product by $\prod_j(1+LMh_n)\le e^{LMT}$. Endpoint graph conversions use the same estimate. Hence, for all $n,s,t$, $\|U_n(t,s)y\|_Y\le C_T\|y\|_Y$, for example $C_T=MN e^{LMT}$, enlarged if necessary for endpoints. Between grid points the products satisfy both endpoint equations with $A_n^{\mathrm{fr}}$. Differentiating $U_n(t,r)U_m(r,s)y$ is legitimate because every factor preserves $Y$ and has the autonomous strong derivative there. Integration over the combined finite partition gives $\|(U_n(t,s)-U_m(t,s))y\|_H\le C_TLT(h_n+h_m)\|y\|_Y$. This proves strong convergence uniformly in $(t,s)$ on $Y$, and density and unitarity extend it to each fixed $H$ vector. Write the limit $U(t,s)$. Norm preservation, opposite-orientation products, cocycles and joint continuity pass to the strong limit, yielding unitary inverses and a joint strongly continuous $H$ evolution. No $Y$ membership has yet been inferred from this limit. [step 1.2, step 2.1, construct, algebra]

4.1 [The bounded graph-coordinate evolution] For fixed $s$ and $g_0\in H$, solve $g(t)=U(t,s)g_0+\int_s^tU(t,r)B(r)g(r)\,dr$ on $s\le t\le T$. Iterating this integral produces norm-continuous functions; the $j$th term has norm at most $\|g_0\|(\|B\|_\infty|t-s|)^j/j!$. Uniform summability supplies a continuous solution and repeated integral estimation proves uniqueness. It also gives $\|g(t)\|\le e^{\|B\|_\infty T}\|g_0\|$. Joint continuity of $U$ and uniform series convergence give joint continuity of this solution in $(t,s)$ for fixed $g_0$. These are bounded Hilbert-space Volterra operations. They do not assume that the resulting $g$ belongs to $D(A(t))$ or solves an unbounded strong equation. [step 2.1, step 3.1, construct, algebra]

5.1 [Convergence of the actual graph coordinates] Fix $y\in Y$. Define $g_n(t)=K(\tau_n(t))U_n(t,s)y$, using the right value at grid points, and $g_n(t_j-)$ using the preceding frozen time. On each open frozen interval, commutation with its $K$ gives the exact autonomous evolution of $g_n$. At a grid point the jump is $g_n(t_j)=J_{nj}g_n(t_j-)$, where $J_{nj}=K(t_j)K(t_{j-1})^{-1}$ and $J_{nj}-I=\int_{t_{j-1}}^{t_j}K'(r)K(t_{j-1})^{-1}dr$. Successive insertion of these jumps gives the exact finite formula $g_n(t)=U_n(t,s)K(\tau_n(s))y+\sum_{s<t_j\le t}U_n(t,t_j)(J_{nj}-I)g_n(t_j-)$. The first incomplete interval produces no jump until its right end; assigning the full preceding-cell jump at that end adds an interval of length at most $h_n$ to a quadrature compared with $[s,t]$, whose bounded contribution tends to zero. Uniform continuity of $K'$ and $K^{-1}$ gives $\|(J_{nj}-I)-h_nB(t_j)\|\le h_n\epsilon_n$, with $\epsilon_n\to0$, and $\|J_{nj}-I\|\le LMh_n$. Let $g$ be step 4.1's solution with $g_0=K(s)y$. Replace the sum's $g_n(t_j-)$ by $g(t_j)$; the resulting expression converges uniformly in $s\le t\le T$ to the Volterra expression for $g(t)$. To justify this assertion, $U_n\to U$ uniformly on every compact set of input vectors: a finite norm-net and the uniform norm-one bound reduce this to step 3.1's fixed-vector convergence. Apply it to the compact image of the continuous curve $B(r)g(r)$, then use joint continuity of $U(t,r)B(r)g(r)$ on the compact triangle for its uniform Riemann-sum convergence. The displayed jump error sums to at most $T\epsilon_n\sup_r\|g(r)\|$, and the initial term converges uniformly. Denote the total consistency error by $a_n\to0$. The exact jump formula therefore bounds every right or left value error by $a_n+LMh_n\sum_{s<t_j\le t}\|g_n(t_j-)-g(t_j)\|$, with the current endpoint omitted for a left value. Induction over nodes gives the discrete Gronwall bound $\sup_t\|g_n(t)-g(t)\|$, including left values, at most $a_n\prod_j(1+LMh_n)\le a_ne^{LMT}$. Thus the graph coordinates converge uniformly in $H$. [step 2.1, step 3.1, step 4.1, construct, algebra]

6.1 [Domain membership by uniform Y convergence] Since $K(\tau_n(t))^{-1}\to K(t)^{-1}$ uniformly in $\mathcal B(H,Y)$, step 5.1 gives $U_n(t,s)y=K(\tau_n(t))^{-1}g_n(t)\to\psi(t):=K(t)^{-1}g(t)$ uniformly in $Y$. The continuous embedding identifies this limit with step 3.1's $H$ limit, so $U(t,s)y=\psi(t)\in Y$. The same convergence passes the bound $C_T\|y\|_Y$ to the limit, and the formula gives strong $Y$ continuity in $t$. Repeating the construction with $A(T-r)$ and the generator sign reversed handles backward orientation and proves $U(s,t)Y\subset Y$. Since these operators are inverses on $H$, $U(t,s)Y=Y$. Joint $Y$ continuity follows from the cocycle, continuity at each diagonal and the uniform $Y$ bound: continuity of $U(t,s)y$ in both endpoints reduces to strong continuity of $U(t,t_0)$ and $U(s_0,s)$ on each fixed vector of $Y$. [step 2.1, step 3.1, step 5.1, algebra]

7.1 [The strong equations and uniqueness] On $Y$ the frozen products obey $U_n(t,s)y=y-i\int_s^tA(\tau_n(r))U_n(r,s)y\,dr$. By step 6.1 their vectors converge uniformly in $Y$, and $A(\tau_n(r))\to A(r)$ uniformly in $\mathcal B(Y,H)$. Therefore the integrands converge uniformly in $H$ to the continuous curve $A(r)U(r,s)y$. Passing to the integral gives the asserted strong $C^1(H)$ first-endpoint equation. A difference of two strong common-domain solutions has constant squared norm, since $2\operatorname{Re}\langle-iA(t)\eta(t),\eta(t)\rangle=0$; zero initial value gives uniqueness on $Y$, and boundedness and density give operator equality on $H$. For the second endpoint use the cocycle $U(t,s+h)y-U(t,s)y=U(t,s+h)[y-U(s+h,s)y]$. The diagonal first-endpoint derivative, joint strong continuity and boundedness give $\partial_sU(t,s)y=iU(t,s)A(s)y$. Its derivative is continuous in $H$ because $A(s)y$ is continuous and $U$ jointly strongly continuous. Differentiating the inverse with $s$ as its first endpoint gives $i\partial_sU(s,t)y=A(s)U(s,t)y$, while unitarity gives $U(t,s)^*=U(s,t)$. This proves the corrected full contract. [step 3.1, step 6.1, algebra] ∎

