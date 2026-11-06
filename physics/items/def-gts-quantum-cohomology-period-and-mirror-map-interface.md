---
id: def-gts-quantum-cohomology-period-and-mirror-map-interface
kind: definition
title: Quantum-cohomology, period and mirror-map interface
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 7
domain: mathematics
library: physics
category: string-theory
deps:
  - def-gts-stable-n-pointed-algebraic-curves-and-the-moduli-functor
  - def-gts-perfect-obstruction-theory-and-intrinsic-normal-cone
  - thm-gts-r4-12b-algebraic-stable-map-descendants-and-deformation-splitting-identities
  - thm-gts-genus-zero-quantum-product-associativity
  - def-gts-specified-mathematical-mirror-datum
  - def-gts-polarized-variation-of-hodge-structure-and-period-map
  - thm-gts-gaussmanin-connection-and-griffiths-transversality
  - def-gts-intrinsic-mirror-algebra-and-classical-period
  - def-singular-cohomology-ring
dependency_roles:
  def-gts-stable-n-pointed-algebraic-curves-and-the-moduli-functor: mathematical-premise
  def-gts-perfect-obstruction-theory-and-intrinsic-normal-cone: mathematical-premise
  thm-gts-r4-12b-algebraic-stable-map-descendants-and-deformation-splitting-identities: mathematical-premise
  thm-gts-genus-zero-quantum-product-associativity: mathematical-premise
  def-gts-specified-mathematical-mirror-datum: mathematical-premise
  def-gts-polarized-variation-of-hodge-structure-and-period-map: mathematical-premise
  thm-gts-gaussmanin-connection-and-griffiths-transversality: mathematical-premise
  def-gts-intrinsic-mirror-algebra-and-classical-period: mathematical-premise
  def-singular-cohomology-ring: mathematical-premise
justified_by: []
aliases: []
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
sources:
  references:
    - title: William Fulton and Rahul Pandharipande, Notes on Stable Maps and Quantum Cohomology
      url: https://arxiv.org/pdf/alg-geom/9608011v2
      locator: §§1, 5, 7-8, stable maps, Gromov-Witten invariants, and the quantum product
    - title: Hiroshi Iritani, Quantum Cohomology and Periods
      url: https://arxiv.org/pdf/1101.4512v3
      locator: §2.3, equation (3), the insertion-coordinate formal power-series completion; §§3-5, quantum connections, toric complete-intersection mirror maps, and period pairings
    - title: Alexander Givental, A mirror theorem for toric complete intersections
      url: https://arxiv.org/pdf/alg-geom/9701016v2
      locator: §0 and §1(5)–(7), printed pp. 16–17, the defining pairing (a,J)=(s_a,1), Euler-twisted correlators and ambient projection; §§2–7 for the weighted coordinate change
    - title: Sam Johnston, Quantum periods, toric degenerations and intrinsic mirror symmetry
      url: https://arxiv.org/pdf/2501.01408v3
      locator: §§1 and 4, regularized quantum periods and intrinsic mirror algebra periods
    - title: Per Berglund, Tim Gräfnitz, and Michael Lathwood, Gromov-Witten Invariants and Mirror Symmetry for Non-Fano Varieties via Tropical Disks
      url: https://arxiv.org/pdf/2404.16782v3
      locator: §§3.3, 4.2 and Definition 4.6, descendant and constant-term periods and signed coordinate substitutions; the inverse here is computed algebraically
---

## Definition

Let $Y$ be a smooth projective variety over $\mathbb C$, let $H=H^*(Y;\mathbb Q)$ be its singular cohomology ring with cup product, and equip $H$ with the nondegenerate graded Poincaré pairing $(a,b)_Y=\int_Ya\cup b$, using the complex orientation and integrating the top-degree component. Let $\operatorname{NE}(Y)$ be the additive monoid of homology classes represented by effective algebraic $1$-cycles. Fix an ample divisor $A$ and complete $\mathbb Q[\operatorname{NE}(Y)]$ with respect to the filtration by $A\cdot\beta$ to obtain the coefficient ring $\Lambda_Y$. Genus-zero Gromov-Witten invariants use the stable-map stack, virtual class, evaluation maps, and cotangent-line classes at marked points; their exact proposed construction interface is recorded by the stable-map supplier. For a universal curve $\pi:\mathcal C\to\overline{\mathcal M}_{0,n}(Y,\beta)$ with marking section $s_i$ and universal map $f:\mathcal C\to Y$, set $\operatorname{ev}_i=f\circ s_i$ and $\psi_i=c_1(s_i^*\omega_\pi)$.

When the stated virtual classes and cohomological splitting data exist, fix a homogeneous basis $T_1,\ldots,T_N$ of $H$. Write $|T_i|\in\{0,1\}$ for cohomological degree modulo two. Introduce formal coordinates $t_i$ of parity $|T_i|$, and let $\mathcal P_Y$ be the graded-commutative polynomial algebra over $\Lambda_Y$ on these coordinates: $t_it_j=(-1)^{|T_i||T_j|}t_jt_i$, with $t_i^2=0$ for odd $t_i$. Thus the even coordinates generate a polynomial algebra and the odd coordinates an exterior algebra. Put $\mathfrak m=(t_1,\ldots,t_N)$ and $R_Y=\varprojlim_{k\ge1}\mathcal P_Y/\mathfrak m^k$. This is the insertion-adic completion with Novikov-completed coefficients; on its coefficients retain the ample-degree topology of $\Lambda_Y$. Use the even universal insertion $\tau=\sum_i t_iT_i\in H\otimes R_Y$, with scalars written on the left. Extend the pairing and correlators by graded multilinearity, using the sign $(-1)^{pq}$ whenever factors of parities $p,q$ are interchanged. Define the big genus-zero quantum product on $H\otimes R_Y$ by
$$ (a\star_\tau b,c)_Y=\sum_{\beta\in\operatorname{NE}(Y)}\sum_{m\ge0}\frac{Q^\beta}{m!}\left\langle a,b,c,\underbrace{\tau,\ldots,\tau}_{m}\right\rangle_{0,m+3,\beta},$$
for $a,b,c\in H$, extending over $R_Y$. At a fixed insertion monomial of total degree $m$, only the summand with $m$ additional markings contributes; curve-class sums are interpreted in $\Lambda_Y$. Thus no infinite scalar sum at one curve class is required. The small product is the specialization $t_i=0$ for every $i$. Other specializations require convergence in the target coefficient topology; strictly positive Novikov valuation of every nonzero substituted coordinate is sufficient. With $z$ an invertible even formal parameter, the quantum connection convention is $\nabla_i=z\,\partial_{t_i}-T_i\star_\tau$, using left graded derivatives; a flat section satisfies $z\partial_{t_i}s=T_i\star_\tau s$. Associativity requires the cohomological genus-zero splitting axiom for all numbers of marked points, with node contractions using the graded inverse of the Poincaré pairing. The earlier associativity supplier treats $\tau=0$; for the universal even insertion the same four-point boundary relation with $m$ additional labelled markings has $\binom{m}{k}$ distributions of $k$ markings to one branch, and $\binom{m}{k}/m!=1/(k!(m-k)!)$ gives the two iterated big products. The graded WDVV argument therefore applies coefficientwise in $R_Y$.

For independent Novikov symbols $Q^\beta$ and insertion coordinates, define the cohomology-valued $J$-function by its pairing with every $b\in H$:
$$ (b,J_Y(\tau,z))_Y=\int_Y e^{\tau/z}b+\sum_{\beta\ne0}\sum_{m\ge0}\frac{Q^\beta}{m!}\int_{[\overline{\mathcal M}_{0,m+2}(Y,\beta)]^{\mathrm{vir}}}\frac{\operatorname{ev}_1^*(b)\operatorname{ev}_2^*(1)\prod_{j=3}^{m+2}\operatorname{ev}_j^*(\tau)}{z-\psi_1}.$$
The empty product for $m=0$ is $1$, and $(z-\psi_1)^{-1}=\sum_{r\ge0}\psi_1^rz^{-r-1}$. This is a formal series in $z^{-1}$ with coefficients in $H\otimes R_Y$: at a fixed insertion degree only one $m$ contributes, and curve sums use the ample-degree completion. The curve-class-zero contribution is prescribed as $e^{\tau/z}$, without an unstable two-point degree-zero integral. The test insertion and descendant are at marking 1; marking 2 carries the unit. Positive-degree two-point cohomological virtual data are required separately from the algebraic supplier's stable-curve-range statement.

For the unit/divisor restriction write $\tau=t_0 1+D(t)$ with $D(t)=\sum_{i=1}^r t_i p_i$ and fixed divisor classes $p_i\in H^2(Y;\mathbb Q)$. The compatibility data needed to identify this restriction with Givental's source convention are the descendant string and divisor identities: if $C_\beta(t;b)$ denotes the coefficient of $Q^\beta$ in the positive-degree pairing just defined, they read $\partial_{t_0}C_\beta(t;b)=z^{-1}C_\beta(t;b)$ and $\partial_{t_i}C_\beta(t;b)=(p_i\cdot\beta)C_\beta(t;b)+z^{-1}C_\beta(t;p_i\cup b)$. These identities are additional hypotheses on the supplied descendants, not conclusions of the algebraic splitting supplier. Their formal solution with the displayed two-point initial value at $t=0$ gives the source-normalized restriction
$$ (b,J_Y(t_0 1+D(t),z))_Y=\int_Y e^{(t_0 1+D(t))/z}b+\sum_{\beta\ne0}Q^\beta e^{\langle D(t),\beta\rangle}\int_{[\overline{\mathcal M}_{0,2}(Y,\beta)]^{\mathrm{vir}}}\frac{\operatorname{ev}_1^*(e^{(t_0 1+D(t))/z}b)\operatorname{ev}_2^*(1)}{z-\psi_1}.$$
Indeed differentiation of the right-hand coefficient gives the two stated identities, and coefficient recursion in the $t_i$ makes their solution unique over $\mathbb Q$. In particular the factor $e^{\langle D(t),\beta\rangle}$ is required while $Q$ and $t$ are independent. Givental's logarithmic presentation is defined instead by the classical term $e^{(t_0+\sum_i p_i\log q_i)/z}$ and the same two-point coefficients with weights $q^\beta$; it absorbs the divisor weight into the curve monomial. The symbols $\log q_i$ are adjoined logarithmic coordinates, not power series at $q=0$. When $J_Y$ is compared with the following $I_Y$, use this logarithmic presentation, with the same curve monomials $q^\beta$ in both series. This is a separate formal presentation, not a convergence claim for substituting $Q=1$ into an arbitrary Novikov series, and the divisor-only formula is not used for general $\tau$.

For a smooth projective toric ambient variety $X$ over $\mathbb C$ with torus-invariant prime divisors $D_1,\ldots,D_N$ and nef line bundles $L_1,\ldots,L_l$ cutting out a smooth complete intersection $Y$, use $\operatorname{NE}(X)$ for the additive monoid of integral homology classes represented by effective algebraic $1$-cycles on $X$. Each $D_j$ is Cartier: on a smooth toric chart it is a coordinate hyperplane or is absent, so it is locally cut out by one nonzero divisor. Consequently $\mathcal O_X(D_j)$ is a line bundle. Set $u_j=c_1(\mathcal O_X(D_j))|_Y$, $v_a=c_1(L_a)|_Y$, $D_j(\beta)=\langle c_1(\mathcal O_X(D_j)),\beta\rangle\in\mathbb Z$, and $L_a(\beta)=\langle c_1(L_a),\beta\rangle\in\mathbb Z_{\ge0}$ for $\beta\in\operatorname{NE}(X)$; the latter inequality is the nef hypothesis. These degree pairings are taken on $X$ before restriction to $Y$. The source hypergeometric function is
$$I_Y(q,z)=e^{(t_0+\sum_i p_i\log q_i)/z}\sum_{\beta\in\operatorname{NE}(X)}q^\beta\prod_{a=1}^l\frac{\prod_{m=-\infty}^{L_a(\beta)}(v_a+mz)}{\prod_{m=-\infty}^{0}(v_a+mz)}\prod_{j=1}^N\frac{\prod_{m=-\infty}^{0}(u_j+mz)}{\prod_{m=-\infty}^{D_j(\beta)}(u_j+mz)}.$$
Cancel each half-infinite ratio before interpreting any inverse. The $a$th bundle factor is $\prod_{m=1}^{L_a(\beta)}(v_a+mz)$. For $r=D_j(\beta)$ the $j$th toric factor is $\prod_{m=1}^{r}(u_j+mz)^{-1}$ if $r\ge0$, and $\prod_{m=r+1}^{0}(u_j+mz)$ if $r<0$; empty products equal $1$. Thus the factor with $m=0$ is never inverted. For $m\ne0$ the inverse is the finite expansion $(u_j+mz)^{-1}=(mz)^{-1}\sum_{k=0}^{\dim_{\mathbb C}Y}(-u_j/(mz))^k$, since $u_j^{\dim_{\mathbb C}Y+1}=0$. Interpret the curve sum in the ample-degree completion of the $\operatorname{NE}(X)$ monoid algebra with coefficients in $H^*(Y;\mathbb Q)((z^{-1}))$, keeping the displayed logarithmic exponential as a separate prefactor. Here the $p_i$ are a basis of divisor classes on $X$, restricted to $Y$ in the exponential; $q^\beta$ are monoid symbols with $q^\beta q^\gamma=q^{\beta+\gamma}$, and $\log q_i$ are the associated adjoined logarithmic coordinates. The ambient cohomology component is the image of $H^*(X;\mathbb Q)$ in $H^*(Y;\mathbb Q)$; no surjectivity onto all cohomology is asserted.

For each effective curve class $\beta$, put $d_\beta=\langle c_1(TY),\beta\rangle=(-K_Y)\cdot\beta$. If a divisor $D$ representing $-K_Y$ is specified, this equals $D\cdot\beta$; no arbitrary divisor is used for this exponent. For $d_\beta\ge2$, define the one-point descendant
$$n_\beta=\int_{[\overline{\mathcal M}_{0,1}(Y,\beta)]^{\mathrm{vir}}}\psi_1^{d_\beta-2}\operatorname{ev}_1^*[\mathrm{pt}],$$
and set $n_\beta=0$ when $d_\beta<2$. Here $[\mathrm{pt}]$ is the cohomology class of a point, of complex degree $\dim_{\mathbb C}Y$, and $\psi_1=c_1(s_1^*\omega_\pi)$ has complex degree one. The one-point genus-zero virtual dimension is $\dim_{\mathbb C}Y-2+c_1(TY)\cdot\beta$; hence the insertion has the required degree exactly with the stated $d_\beta$. The regularized quantum period is the formal series
$$\widehat G_Y=1+\sum_{\substack{\beta\ne0\\d_\beta\ge2}}d_\beta!\,n_\beta Q^\beta.$$
When $-K_Y$ is ample, grouping terms by $d_\beta=-K_Y\cdot\beta$ gives the one-variable Fano period.

The constant-term period of a specified mirror algebra element $W$ uses the trace-coefficient construction in the earlier intrinsic-mirror-algebra definition. An oscillatory period additionally requires the explicit space, holomorphic volume form, nonzero parameter, relative rapid-decay cycle, orientation, normalization, and a proof of convergence or a declared formal completion; its value is not identified with $\widehat G_Y$ by definition.

A mirror-coordinate change is an explicitly specified invertible formal substitution between named coefficient rings and parameter spaces. In the Givental convention it has the form $t_0\mapsto t_0+f_0(q)z+h(q)$ and $\log q_i\mapsto\log q_i+f_i(q)$, with support and weighted degrees stated for each theorem. In the Johnston convention it is the stated base change of effective-curve monomials. For the Berglund–Gräfnitz–Lathwood coordinate convention, let $z=(z_1,\ldots,z_r)$ be formal curve parameters and let $W(x_1,\ldots,x_n;z)\in\mathbb Q\llbracket z\rrbracket[x_1^{\pm1},\ldots,x_n^{\pm1}]$ be the specified Laurent potential in the torus variables $x_1,\ldots,x_n$. Assume the sum $a_W(z)=\sum_{m\ge1}\frac1m\operatorname{CT}_{x_1,\ldots,x_n}(W(x_1,\ldots,x_n;z)^m)$ is coefficientwise locally finite and belongs to $(z_1,\ldots,z_r)\mathbb Q\llbracket z\rrbracket$. The curve parameters are already in $W$; there is no additional factor $z^m$ in this sum. Write $-z=(-z_1,\ldots,-z_r)$. For a chosen curve basis $\beta_i$ set $d_i=\beta_i\cdot D$; the closed substitutions are $Q_i=z_i\exp(d_i a_W(-z))$, and the open mirror map is $U=x\exp(-a_W(-z))$, where here $x$ denotes the chosen mirror-curve coordinate and $U$ its open parameter. Since $Q_i=z_i+O((z)^2)$, coefficient recursion gives a unique formal inverse $z=z(Q)$. Solving the displayed open substitution gives $x=U M_W^{\mathrm{inv}}(Q)$ with $M_W^{\mathrm{inv}}(Q)=\exp(a_W(-z(Q)))$. Indeed substituting this expression in $x\exp(-a_W(-z(Q)))$ gives $U$ exactly. These are separate source coordinate conventions; no mirror map is inferred from equality of units or from a numerical period match.

## Definition references

[[def-gts-stable-n-pointed-algebraic-curves-and-the-moduli-functor]]

[[def-gts-perfect-obstruction-theory-and-intrinsic-normal-cone]]

[[thm-gts-r4-12b-algebraic-stable-map-descendants-and-deformation-splitting-identities]]

[[thm-gts-genus-zero-quantum-product-associativity]]

[[def-gts-specified-mathematical-mirror-datum]]

[[def-gts-polarized-variation-of-hodge-structure-and-period-map]]

[[thm-gts-gaussmanin-connection-and-griffiths-transversality]]

[[def-gts-intrinsic-mirror-algebra-and-classical-period]]

[[def-singular-cohomology-ring]]

## Remarks

Berglund–Gräfnitz–Lathwood Definition 4.6 prints an unsigned expression $M_W(Q)=\exp(a_W(z(Q)))$ while calling it the inverse of its signed open map. With $z(Q)$ defined here as the literal inverse of the displayed closed substitution, that expression does not in general invert the open map. The explicitly signed $M_W^{\mathrm{inv}}$ above resolves this convention conflict; no equality with the source's unsigned expression is asserted.

This is a mathematical interface, not an assertion that the required stable-map, logarithmic, or mirror-algebra constructions have been proved in this item. In the current run the R4 stable-map descendant/splitting supplier and the conditional quantum-product associativity item are escalated, and the specified mirror-datum supplier has no current readiness record. The exact supplier statements remain the hypotheses for any consuming theorem.
