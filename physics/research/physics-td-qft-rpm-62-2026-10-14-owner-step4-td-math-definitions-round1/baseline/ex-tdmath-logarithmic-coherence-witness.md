---
id: ex-tdmath-logarithmic-coherence-witness
kind: example
title: Logarithmic contact model with coherent joins
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 4
deps: [def-tdmath-forward-sector-hypotheses, def-tdmath-thermal-contact-hypotheses, def-natural-logarithm, thm-natural-logarithm-laws, thm-logarithm-derivative-and-integral, thm-weighted-am-gm-real, thm-exponential-two-point-convexity]
dependency_roles:
  def-tdmath-forward-sector-hypotheses: mathematical-premise
  def-tdmath-thermal-contact-hypotheses: mathematical-premise
  def-natural-logarithm: mathematical-premise
  thm-natural-logarithm-laws: mathematical-premise
  thm-logarithm-derivative-and-integral: mathematical-premise
  thm-weighted-am-gm-real: mathematical-premise
  thm-exponential-two-point-convexity: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
proof_strategy: direct
sources:
  references:
    - title: "Lieb and Yngvason, The Physics and Mathematics of the Second Law of Thermodynamics, §§III–IV, pp. 37–59"
      url: "https://arxiv.org/pdf/cond-mat/9708200v2"
    - title: "Daniel Arovas, Lecture Notes on Thermodynamics and Statistical Mechanics, Chapters 2 and 4, complete 607-page edition"
      url: "https://courses.physics.ucsd.edu/2010/Spring/physics210a/LECTURES/STATMECH.pdf"
verification:
  precheck: n/a
---

## Example

Let $I$ be a finite nonempty set of primitive labels, choose $c_i,r_i,u_i^*,v_i^*>0$ and $b_i\in\mathbb R$ for each $i\in I$, and use the positive state domain $\Gamma_i=(0,\infty)^2$ with coordinates $(U,V)$. Close these tags under positive scaling, finite separated products, and finite thermal joins, retaining all constituent tags. The reference scales $u_i^*,v_i^*$ have the same respective units as $U,V$; write $\ln$ for the natural logarithm $\log$ of [[def-natural-logarithm]]. Thus every logarithm argument is dimensionless. For a unit amount set $\sigma_i(U,V)=c_i\ln(U/u_i^*)+r_i\ln(V/v_i^*)+b_i$. For any amount $t>0$, define on the scaled type $ti$

$$\sigma_{ti}(U,V)=tc_i\ln\!\left(\frac{U}{tu_i^*}\right)+tr_i\ln\!\left(\frac{V}{tv_i^*}\right)+tb_i.$$

For a separated finite product, add component entropies. For a thermal join of a finite nonempty list of components indexed $j=1,\ldots,m$, write $\alpha_j=t_jc_{i_j}$, $\beta_j=t_jr_{i_j}$, $d_j=t_ju_{i_j}^*$, $e_j=t_jv_{i_j}^*$, and $C=\sum_j\alpha_j>0$. Define its entropy at total energy $U>0$ and positive work coordinates $V_j$ by

$$\sigma_J(U,V_1,\ldots,V_m)=\sum_{j=1}^m\alpha_j\ln\!\left(\frac{\alpha_jU}{Cd_j}\right)+\sum_{j=1}^m\beta_j\ln\!\left(\frac{V_j}{e_j}\right)+\sum_{j=1}^mt_jb_{i_j}.$$

Give each primitive generator its unit amount vector; scaled and joined types retain all primitive amounts, and let $w_T$ be their sum, with $w_{tT}=tw_T$ and joined weight equal to the sum of component weights. Use the represented state $\mathsf{J}_T(x)=w_T e_{(T,x)}$ from [[def-tdmath-forward-sector-hypotheses]]. For a finite encoded map $c$, define its entropy by the finite sum $\sigma(c)=\sum_{(T,x)}c(T,x)\sigma_T(x)/w_T$, omitting zero terms. Its aggregate composition is the corresponding amount-vector sum from that supplier. Thus $\sigma(\mathsf{J}_T(x))=\sigma_T(x)$, while a raw unit point mass has entropy $\sigma_T(x)/w_T$. Scaled and joined raw tags are distinct; the displayed formulas make their declared preparation transport entropy-preserving.

On every finite compound of these closed tagged types, define accessibility by nondecrease of this entropy across states of the same composition, including the separated and joined representations of a contact. This is a mathematical consistency model; it is not an observed gas experiment or a universal thermodynamic assertion.

## Facts & Assumptions

**Given:** The positive constants, positive reference scales, finite tagged family, and the entropy and accessibility definitions in the Example.

[F1] [[def-tdmath-forward-sector-hypotheses]]: A1–A7 and S1–S3 specify the relation and simple-domain geometry to be verified.

[F2] [[def-tdmath-thermal-contact-hypotheses]]: T1–T5 and C1 specify the contact and coherence conditions to be verified.

[F3] [[def-natural-logarithm]] and [[thm-natural-logarithm-laws]]: $\log:(0,\infty)\to\mathbb R$ is the natural logarithm, is strictly increasing, and obeys the product and quotient laws.

[F4] [[thm-logarithm-derivative-and-integral]]: $\log$ is differentiable on $(0,\infty)$ with derivative $1/x$.

[F5] [[thm-weighted-am-gm-real]]: for positive $r_j$ and positive weights $p_j$ summing to one, $\prod_j r_j^{p_j}\le\sum_jp_jr_j$.

[F6] [[thm-exponential-two-point-convexity]]: the exponential is strictly convex between distinct real inputs; since $\log$ is its increasing inverse, $\log$ is strictly concave on positive reals.

## Verification

**Given:** The formulas and definitions in the Example, with all $c_i,r_i,u_i^*,v_i^*>0$.

1.1 Fix a finite list of scaled components with amounts $t_j>0$ and labels $i_j\in I$. Write $\alpha_j=t_jc_{i_j}$, $\beta_j=t_jr_{i_j}$, $d_j=t_ju^*_{i_j}$, and $e_j=t_jv^*_{i_j}$, with $C=\sum_j\alpha_j>0$. For a split of total energy $U>0$ into positive $U_j$ with $\sum_jU_j=U$, put $p_j=\alpha_j/C$ and $r_j=U_j/\alpha_j$. Then $\sum_jp_jr_j=U/C$. By [F5] and monotonicity of $\log$ from [F3],
$\sum_j\alpha_j\log(U_j/d_j)
=\sum_j\alpha_j\log(\alpha_j/d_j)+C\sum_jp_j\log r_j
\le \sum_j\alpha_j\log(\alpha_j/d_j)+C\log(U/C)
=\sum_j\alpha_j\log(\alpha_jU/(Cd_j)).$
Equality in the finite weighted Jensen step occurs only when all $r_j$ are equal: [F6] gives strict concavity for any unequal pair with positive weights, and grouping terms applies this two-point strict inequality inductively. Since the weighted average is $U/C$, equality requires $r_j=U/C$, or $U_j=\alpha_jU/C$. This allocation is positive and feasible, so the maximum is attained uniquely. The work-coordinate terms do not depend on the energy split, giving exactly the displayed join entropy. Grouping nested joins is the same finite maximization over all $U_j$, so the formula is associative under grouping and permutation. [F2, F3, F5, F6, given, algebra]

1.2 On each fixed composition, define accessibility by nondecrease of the displayed entropy. Reflexivity and transitivity follow from the real order. A common spectator adds the same entropy to both sides; positive scaling multiplies each entropy comparison by a positive factor. For a simple scaled type, replacing $(U,V,t)$ by $(sU,sV,st)$ leaves both log ratios unchanged and multiplies their coefficients and constant term by $s$. In a join, scaling every amount, energy, and work coordinate by $s$ likewise leaves $\alpha_jU/(Cd_j)$ and $V_j/e_j$ unchanged and scales all coefficients and additive constants by $s$. Extensivity gives $\sigma_{(s+t)i}((s+t)x)=\sigma_{si}(sx)+\sigma_{ti}(tx)$, proving reversible splitting. For the stability condition, if $\sigma(A)+\epsilon_n\sigma(Z_0)\le\sigma(B)+\epsilon_n\sigma(Z_1)$ for all $n$ and $\epsilon_n\downarrow0$, the four entropies are finite. Moreover, the premise includes equality of aggregate composition: $\nu(A)-\nu(B)=\epsilon_n(\nu(Z_1)-\nu(Z_0))$ for every $n$. Choose two different values of $\epsilon_n$, which exist because the positive sequence tends to zero; subtracting these equalities gives $\nu(Z_1)=\nu(Z_0)$, and then $\nu(A)=\nu(B)$. Taking limits in the entropy inequality gives $\sigma(A)\le\sigma(B)$, now with the same-composition condition required by the accessibility definition. This verifies the stated accessibility and stability hypotheses on the declared comparison domains. [F1, F2, given, algebra]

1.3 For $x,y\in\Gamma_i$ and $0<t<1$, strict concavity of $\log$ from [F6] gives concavity of $(U,V)\mapsto c_i\log(U/u_i^*)+r_i\log(V/v_i^*)$. Jensen's inequality in each coordinate yields $t\sigma_i(x)+(1-t)\sigma_i(y)\le\sigma_i(tx+(1-t)y)$, so the convex-combination access condition in [F1] holds. Strict increase of $\log U$ at fixed $V$ gives a strict successor, proving S1. [F1, F3, F4, F6, given, algebra]

1.4 For a simple type of amount $t$, put $\alpha=tc_i$ and $\beta=tr_i$. Its forward sector is the superlevel set of $\alpha\log U+\beta\log V$; the boundary through $(U_0,V_0)$ is the smooth graph $U=U_0(V/V_0)^{-\beta/\alpha}$ for $V>0$. By [F4], its tangent slope is $dU/dV=-\beta U/(\alpha V)$, so the support plane has the required form with $P(U,V)=\beta U/(\alpha V)$. The gradient is nonzero. For any boundary tangent vector, a differentiable boundary curve exists with that tangent; applying a supporting linear inequality to both positive and negative curve parameters forces the support normal to annihilate the tangent space. That space has codimension one and its normal is the nonzero gradient, so the supporting hyperplane is unique. The slope $P$ is smooth and locally Lipschitz. The graph domain $(0,\infty)$ is arcwise connected, proving S2–S3. For a finite join, replace $\alpha$ by $C$ and use each positive $\beta_j$; the boundary graph $U=K\prod_jV_j^{-\beta_j/C}$ lies over the connected positive orthant and has locally Lipschitz slopes $P_j=\beta_jU/(CV_j)$. [F1, F3, F4, given, algebra]

1.5 For any state $(U,V)$ of amount $t$ and any allowed work coordinate $W>0$ in a second type of amount $t'$, choose $Y=(t'c_jU/(tc_i),W)$. It lies in the positive state domain and satisfies $\theta_{ti}(U,V)=\theta_{t'j}(Y)$, verifying T5. For T4, choose $0<V_0<V<V_1$ at fixed $U$. Strict increase in the volume coordinate gives $(U,V_0)\prec\prec(U,V)\prec\prec(U,V_1)$, while the endpoints have the same $\theta=U/(tc_i)$ and hence are thermally equivalent. [F1, F2, F3, given, choose]

2.1 Step 1.1 shows that joined entropy is the maximum of the separated entropy over all admissible energy splits. Thus every split compares upward to the join, and the maximizing split has equal entropy with the join, so it compares back; this verifies T1–T2. For a pair of simple components, the maximizing allocation is characterized by $U_i/\alpha_i=U_j/\alpha_j$, exactly equality of $\theta_{t_i i}(U_i,V_i):=U_i/(t_ic_i)$ and $\theta_{t_j j}(U_j,V_j)$. The initial split is reversible with the join exactly when its entropy equals the maximum, which is exactly this equality. Therefore $\sim_T$ is equality of the scalar label, and transitivity follows. [F1, F2, F3, F5, step 1.1, given]

3.1 If two component states are thermally equivalent, their common label is $\theta$. At their join, the maximizing split has energies $U_i=t_ic_i\theta$ and $U_j=t_jc_j\theta$, so the joined label is $(U_i+U_j)/(t_ic_i+t_jc_j)=\theta$. The same identity holds after any finite grouping by step 1.1. Therefore the joined state is thermally equivalent to each component, verifying C1 under the declared nested-join identifications. Every logarithm argument is a ratio of like positive quantities, hence dimensionless. The parameter $\theta$ is only a mathematical contact label; this example asserts no empirical temperature law. [F1, F2, step 1.1, step 2.1] ∎
