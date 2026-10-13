---
id: thm-em-elliptic-boundary-existence
kind: theorem
title: Weak and classical solvability of the elliptic boundary problems with Dirichlet, Neumann and transmission data
status: published
origin: pipeline
domain: mathematics
dependency_level: 5
deps: [cor-first-green-identity-on-a-bounded-c-one-domain, def-axiom-of-choice, def-bounded-c-k-domain-and-boundary-charts, def-ck-euclidean-maps-and-diffeomorphisms, def-countable-choice, def-euclidean-inner-product, def-sobolev-space-wkp-and-its-norm, lem-em-prescribed-fractional-dirichlet-existence, lem-em-smooth-domain-elliptic-regularity, lem-em-weak-neumann-and-transmission-existence, thm-algebra-of-derivatives, thm-chain-rule-for-total-derivatives, thm-divergence-theorem-for-bounded-piecewise-c-one-domains, lem-em-lift-specified-dirichlet-existence, def-wkp-zero-as-a-sobolev-closure, thm-sharp-trace-theorem-for-w-one-p]
dependency_roles:
  def-wkp-zero-as-a-sobolev-closure: mathematical-premise
  thm-sharp-trace-theorem-for-w-one-p: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  cor-first-green-identity-on-a-bounded-c-one-domain: mathematical-premise
  lem-em-prescribed-fractional-dirichlet-existence: mathematical-premise
  lem-em-weak-neumann-and-transmission-existence: mathematical-premise
  lem-em-smooth-domain-elliptic-regularity: mathematical-premise
  thm-divergence-theorem-for-bounded-piecewise-c-one-domains: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  def-bounded-c-k-domain-and-boundary-charts: mathematical-premise
  def-countable-choice: mathematical-premise
  def-sobolev-space-wkp-and-its-norm: mathematical-premise
  lem-em-lift-specified-dirichlet-existence: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-10
sources:
  references:
    - title: "J. K. Hunter, Notes on Partial Differential Equations (UC Davis)"
      url: "https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf"
    - title: "D. Tataru, Carleman estimates, unique continuation and applications (Northwestern University, 1998 monograph draft)"
      url: "https://math.berkeley.edu/~tataru/papers/book.pdf"
---

## Statement

Assume the Axiom of Choice and Countable Choice as declared by the weak-solvability and regularity lemmas below ([[def-axiom-of-choice]], [[def-countable-choice]]). Let $\Omega\subset\mathbb R^3$ be a bounded $C^\infty$ domain in the local graph sense of [[def-bounded-c-k-domain-and-boundary-charts]], let $\varepsilon\in C^\infty(\overline\Omega;\operatorname{Sym}^3)$ be uniformly positive, that is $\alpha|\xi|^2\le\xi\cdot\varepsilon(x)\xi\le\beta|\xi|^2$ for all $\xi\in\mathbb R^3$ and $x\in\Omega$ and some $0<\alpha\le\beta<\infty$, and let $\rho$ be smooth on $\overline\Omega$. The Euclidean inner product is that of [[def-euclidean-inner-product]]; at a boundary point with outward unit normal $\nu$ the outward conormal vector is $\varepsilon\nu$ and the outward conormal derivative is $\nu\cdot\varepsilon\nabla u$. Here $\operatorname{Sym}^3$ is the space of real symmetric $3\times3$ matrices, $H^1(\Omega)=W^{1,2}(\Omega;\mathbb R)$ is the Sobolev space of [[def-sobolev-space-wkp-and-its-norm]], $H_0^1(\Omega)$ is the $H^1$ closure of $C_c^\infty(\Omega)$ ([[def-wkp-zero-as-a-sobolev-closure]]), and $T:H^1(\Omega)\to H^{1/2}(\partial\Omega)$ is the bounded onto trace of [[thm-sharp-trace-theorem-for-w-one-p]], with the fractional boundary space defined in [L1]. Then:

(a) **Dirichlet.** For every $g\in C^\infty(\partial\Omega)$ there is exactly one weak solution $u\in H^1(\Omega)$ with trace $Tu=g$ of $\int_\Omega\nabla v\cdot\varepsilon\nabla u\,dx=\int_\Omega\rho v\,dx$ for all $v\in H_0^1(\Omega)$; it depends continuously on the data, $\|u\|_{H^1}\le C(\|\rho\|_{L^2}+\|g\|_{H^{1/2}})$, has a $C^\infty$ representative on $\overline\Omega$, and satisfies the classical equations $-\operatorname{div}(\varepsilon\nabla u)=\rho$ in $\Omega$ and $u|_{\partial\Omega}=g$.

(b) **Neumann.** Let $g\in C^\infty(\partial\Omega)$ be a smooth outward conormal datum satisfying $\int_{\Omega_j}\rho\,dx+\int_{\partial\Omega_j}g\,dS=0$ on every connected component $\Omega_j$ of $\Omega$. Then there is a weak solution of $\int_\Omega\nabla v\cdot\varepsilon\nabla u=\int_\Omega\rho v+\int_{\partial\Omega}g\,Tv$ for all $v\in H^1(\Omega)$; it is unique up to a separately chosen additive constant on each component, and imposing $\int_{\Omega_j}u=0$ on every component gives a unique normalised solution which is $C^\infty$ on each closed component and satisfies the classical equations $-\operatorname{div}(\varepsilon\nabla u)=\rho$ in $\Omega$ and $\nu\cdot\varepsilon\nabla u|_{\partial\Omega}=g$. In particular on a connected domain the compatibility is $\int_{\partial\Omega}g=-\int_\Omega\rho$, with a single additive constant.

(c) **Transmission.** Let there be finitely many pairwise disjoint closed smooth interfaces strictly inside $\Omega$, let $\varepsilon$ be piecewise smooth on the closures of the resulting pieces and uniformly positive in the above sense, let $\rho$ be piecewise smooth on the closed pieces and let $\sigma$ be a smooth sheet charge on the union of the interfaces; the weak right-hand side is $\int_\Omega\rho v+\sum_\Gamma\int_\Gamma\sigma\,Tv$, together with $\int_{\partial\Omega}g\,Tv$ in the Neumann case. Prescribe either the smooth outer Dirichlet datum of (a), or the smooth outer Neumann datum of (b) with the componentwise compatibility condition $\int_{\Omega_j}\rho+\sum_{\Gamma\subset\Omega_j}\int_\Gamma\sigma+\int_{\partial\Omega_j}g=0$ for every component $\Omega_j$. With outer Dirichlet data the globally $H^1$ solution is unique; with outer Neumann data it exists exactly when that compatibility holds and is then unique modulo componentwise additive constants, the zero componentwise means making it unique; the equal one-sided traces and $C^\infty$ regularity on each closed side hold in either case, and the flux jump is $n\cdot[\varepsilon\nabla u]=-\sigma$ in the sign convention of [[lem-em-weak-neumann-and-transmission-existence]], where $n$ is a chosen unit normal on the interface and $[\varepsilon\nabla u]=\varepsilon^+\nabla u^+-\varepsilon^-\nabla u^-$ is the difference from the $n$-positive side to the other.

Edge and junction points, reentrant corners, coefficient loss of regularity and general piecewise classical regularity beyond finitely many disjoint smooth interfaces are excluded. The existence content of all three parts is that of the two weak solvability lemmas; this theorem states the combined existence-and-regularity conclusions on the declared domains and adds no existence assertion beyond them.

## Facts & Assumptions

**Given:** The Axiom of Choice and Countable Choice ([[def-axiom-of-choice]], [[def-countable-choice]]); a bounded $C^\infty$ domain $\Omega\subset\mathbb R^3$ with the graph property of [[def-bounded-c-k-domain-and-boundary-charts]]; a uniformly positive coefficient $\varepsilon$, smooth on the closure in parts (a)–(b) and piecewise smooth on the closed pieces with finitely many disjoint closed smooth interfaces in part (c); a smooth bulk datum $\rho$ (piecewise smooth in (c)); a smooth sheet charge $\sigma$ in (c); smooth boundary data $g$; the conventions $\operatorname{Sym}^3$, outward conormal vector $\varepsilon\nu$, outward conormal derivative $\nu\cdot\varepsilon\nabla u$, and the trace $T$ and spaces $H^1$, $H_0^1$ of [[def-sobolev-space-wkp-and-its-norm]] and the trace operator.

[L1] Weak prescribed-trace Dirichlet existence: for a bounded $C^1$ domain $\Omega$, uniformly elliptic measurable $\varepsilon$, $\rho\in L^2(\Omega)$ and $g\in H^{1/2}(\partial\Omega)$, there is exactly one $u\in H^1(\Omega)$ with trace $Tu=g$ solving $\int_\Omega\nabla v\cdot\varepsilon\nabla u=\int_\Omega\rho v$ for all $v\in H_0^1(\Omega)$, and $\|u\|_{H^1}\le C(\|\rho\|_{L^2}+\|g\|_{H^{1/2}})$ ([[lem-em-prescribed-fractional-dirichlet-existence]]).

[L2] Smooth-domain elliptic regularity: on a bounded $C^\infty$ domain, with smooth uniformly positive $\varepsilon$ and smooth $\rho$ on the closure, the weak solution of $-\operatorname{div}(\varepsilon\nabla u)=\rho$ with smooth Dirichlet data, or with smooth compatible Neumann flux data, is $C^\infty$ on the closure and satisfies the classical equation and boundary data; for finitely many disjoint closed smooth interfaces strictly inside $\Omega$ with piecewise smooth positive $\varepsilon$, piecewise smooth $\rho$ and smooth sheet charge $\sigma$, the weak solution is smooth on each closed side ([[lem-em-smooth-domain-elliptic-regularity]]).

[L3] Weak Neumann and transmission existence: with $\ell(v)=\int_\Omega\rho v+\langle g,Tv\rangle$ on $H^1(\Omega)$ for $\rho\in L^2$ and $g\in H^{-1/2}(\partial\Omega)$, a weak Neumann solution $\int_\Omega\nabla v\cdot\varepsilon\nabla u=\ell(v)$ for all $v\in H^1(\Omega)$ exists if and only if $\ell(1)=0$, and is then unique up to an additive constant, the normalisation $\int_\Omega u=0$ making it unique; on finitely many components compatibility and normalisation are imposed separately on each component; for finitely many disjoint smooth stationary interfaces with piecewise smooth uniformly elliptic $\varepsilon$, bulk $\rho\in L^2$ and prescribed sheet charge $\sigma$ defining a bounded trace functional on $H^1$, the same argument gives weak Dirichlet or compatible Neumann existence for the transmission problem, the globally $H^1$ potential has identical one-sided traces, and where the solution is classically smooth on each side integration by parts gives the jump $n\cdot[\varepsilon\nabla u]=-\sigma$ ([[lem-em-weak-neumann-and-transmission-existence]]).

[L4] Divergence theorem for bounded piecewise $C^1$ domains: for a bounded domain with the specified finite piecewise $C^1$ presentation and a $C^1$ field on the closures of the pieces, the integral of the divergence equals the sum of the outward fluxes over the faces, counted once off the seam sets ([[thm-divergence-theorem-for-bounded-piecewise-c-one-domains]]).

[L5] First Green identity: for a bounded $C^1$ domain and $u\in C^2(\overline\Omega)$, $v\in C^1(\overline\Omega)$, $\int_\Omega(v\Delta u+\nabla u\cdot\nabla v)=\int_{\partial\Omega}v\,\partial_\nu u\,dS$ ([[cor-first-green-identity-on-a-bounded-c-one-domain]]).

[L6] Specified-lift variational solver: on a bounded open domain with measurable symmetric uniformly positive coefficient, for a specified $G\in H^1$ and a bounded functional $F\in(H_0^1)^*$ there is exactly one $u\in G+H_0^1$ with $\int\nabla v\cdot\varepsilon\nabla u=F(v)$ for all $v\in H_0^1$ ([[lem-em-lift-specified-dirichlet-existence]]).

[L7] $H_0^1$ is the $H^1$ closure of $C_c^\infty$ ([[def-wkp-zero-as-a-sobolev-closure]]), and on the smooth bounded domain the trace $T:H^1\to H^{1/2}$ is bounded and onto under AC ([[thm-sharp-trace-theorem-for-w-one-p]]).

**Choice accounting.** The Axiom of Choice and its Countable Choice consequence are those assumed explicitly by the two weak-solvability lemmas [L1] and [L3] and by the regularity lemma [L2]; the classical upgrades, the divergence theorem [L4] and the Green identity [L5] introduce no further choice, and the assembly steps select nothing.

## Proof

**Proof technique:** direct.

**Given:** The domain, coefficients, data and conventions of the Given paragraph above, with the smooth Dirichlet datum $g$, the smooth compatible outward conormal datum $g$, or the transmission configuration of the Statement.

1.1 **The Dirichlet branch: existence, uniqueness, exact trace, continuous dependence.** Let $g\in C^\infty(\partial\Omega)\subset H^{1/2}(\partial\Omega)$ and $\rho\in C^\infty(\overline\Omega)\subset L^2(\Omega)$. By [L1] with the uniformly elliptic smooth coefficient $\varepsilon$ there is exactly one $u\in H^1(\Omega)$ with trace $Tu=g$ and $\int_\Omega\nabla v\cdot\varepsilon\nabla u=\int_\Omega\rho v$ for all $v\in H_0^1(\Omega)$, and $\|u\|_{H^1}\le C(\|\rho\|_{L^2}+\|g\|_{H^{1/2}})$; this gives the existence, uniqueness, exact prescribed trace and continuous dependence asserted in (a). [L1, L7]

1.2 **The Neumann branch.** Let $g\in C^\infty(\partial\Omega)$ and put $\ell(v):=\int_\Omega\rho v+\int_{\partial\Omega}g\,Tv$; since $g$ is bounded and $T$ is bounded into $L^2(\partial\Omega)$, $\ell$ is a bounded linear functional on $H^1(\Omega)$ of the form required by [L3] with $H^{-1/2}$ density represented by the smooth function $g$. Testing the weak identity with the constant $1$ on a component $\Omega_j$ gives $0=\int_{\Omega_j}\nabla1\cdot\varepsilon\nabla u=\ell(1_{\Omega_j})=\int_{\Omega_j}\rho+\int_{\partial\Omega_j}g$, so the componentwise compatibility is necessary; it is also the hypothesis of the Statement. By [L3] there is then a weak solution, unique up to one additive constant per component, and the normalisation $\int_{\Omega_j}u=0$ makes it unique; on each connected component the upgrade part of [L2] applies with the smooth datum $g$ and gives $C^\infty$ local classical solutions satisfying $-\operatorname{div}(\varepsilon\nabla u)=\rho$ and $\nu\cdot\varepsilon\nabla u=g$, the different choices of the additive constant changing nothing in the equation. On a connected $\Omega$ this is $0=\int_\Omega\rho+\int_{\partial\Omega}g$, that is $\int_{\partial\Omega}g=-\int_\Omega\rho$. [L2, L3, L7, algebra]

1.3 **Transmission: weak existence, unique traces and the conditional jump.** In the configuration of part (c), let $\Lambda(v):=\int_\Omega\rho v+\sum_\Gamma\int_\Gamma\sigma\,Tv$, a bounded functional on $H^1(\Omega)$ because $\sigma$ is smooth on the compact interface union and $T$ is bounded into $L^2$ of that finite union. For outer Dirichlet data, obtain an exact $H^1$ boundary lift $G$ from [L1] applied with coefficient $I$ and zero bulk datum (this is only a lift, not the transmission solution). Restrict the bounded functional $\Lambda$ to $H_0^1$ and apply [L6] with the actual piecewise coefficient; it gives the unique transmission solution in $G+H_0^1$ with the prescribed outer trace. For outer Neumann data, the weak Neumann part of [L3] applies directly to the bounded functional including the sheet and outer flux terms; hence a globally $H^1$ weak solution exists, is unique for outer Dirichlet data, and for outer Neumann data exists exactly when $\Lambda(v)+\int_{\partial\Omega}g\,Tv$ vanishes on the constants of every component, that is when the stated compatibility holds, and is then unique modulo componentwise constants, the zero componentwise means fixing it. By the transmission part of [L3] the globally $H^1$ potential has identical one-sided traces, and wherever it is classically smooth on each side, integration by parts gives the jump $n\cdot[\varepsilon\nabla u]=-\sigma$ in the stated sign convention. [L1, L3, L6, L7]

2.1 **Classical upgrade of the Dirichlet branch.** The solution of step 1.1 is the weak solution of $-\operatorname{div}(\varepsilon\nabla u)=\rho$ in $\Omega$ with the smooth Dirichlet datum $g$: for compactly supported test fields the weak identity is exactly the distributional equation $-\operatorname{div}(\varepsilon\nabla u)=\rho$, where the divergence is that of a $C^1$ field once the classical upgrade below identifies $u$ as such, and the boundary values are the prescribed ones by trace uniqueness. Applying the Dirichlet part of [L2] with the smooth $\rho$ and smooth $g$ yields the $C^\infty$ representative on $\overline\Omega$ satisfying the classical equation and boundary values. [L2, step 1.1]

2.2 **Transmission: one-sided classical regularity and the unconditional jump.** The weak solution of step 1.3 is the weak solution of the transmission problem for the piecewise smooth positive $\varepsilon$, piecewise smooth $\rho$ and smooth sheet charge $\sigma$ of the Statement, with either the smooth outer Dirichlet datum or the smooth compatible outer Neumann datum. By the interface part of [L2] it is $C^\infty$ on each closed side; in particular it is classically smooth on each side of every interface, so the conditional jump identity of step 1.3 applies and the flux jump $n\cdot[\varepsilon\nabla u]=-\sigma$ holds unconditionally in the stated class. The equal one-sided traces are those of step 1.3, and on each closed side the classical equation $-\operatorname{div}(\varepsilon\nabla u)=\rho$ holds because the weak identity tested against compactly supported fields localized in the interior of a side is the distributional equation there. The interface integration by parts underlying the jump is the divergence theorem [L4] applied to the $C^1$ field $v\,\varepsilon\nabla u$ on the two pieces and the Green identity [L5]; the smooth chain and product rules of [[thm-algebra-of-derivatives]] and [[thm-chain-rule-for-total-derivatives]] are the calculus conventions used in transporting the equation to the closed pieces, and the Euclidean pairings are those of [[def-euclidean-inner-product]]. [L2, L4, L5, step 1.3]

3.1 **Assembly and exclusions.** Part (a) is steps 1.1 and 2.1, part (b) is step 1.2, and part (c) is steps 1.3 and 2.2, with the definitions of the conormal vector and derivative fixed in the Statement. Nothing beyond the declared smooth-domain, finite-interface regime is asserted: no edge or junction point, no reentrant corner, no coefficient loss of regularity and no general piecewise classical regularity is claimed, and no existence assertion is used beyond the two weak solvability lemmas [L1] and [L3]. The choice assumptions are exactly those recorded in the Choice accounting paragraph, and the finite interface and component collections are handled by the explicit finite sums above. This proves all three parts. [given, step 1.1, step 2.1, step 1.2, step 1.3, step 2.2, algebra] ∎
