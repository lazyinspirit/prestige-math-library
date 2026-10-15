---
id: ex-td-positive-log-contact-witness
kind: example
title: Positive logarithmic contact model as a consistency witness
status: draft
origin: pipeline
domain: physics
library: physics
physical_scope: A calculated mathematical model showing compatibility of the stated accessibility and contact assumptions for positive-coordinate systems; it is not an experiment or evidence that real materials obey the assumptions.
deps: [cor-mean-value-theorem, def-natural-logarithm, def-real-power, def-td-scaled-products-and-comparison, def-td-thermal-join, post-td-accessibility-a1-a6, post-td-equilibrium-join-coherence, post-td-simple-system-geometric-axioms, post-td-thermal-join-axioms, post-td-universal-thermal-range, thm-exponential-two-point-convexity, thm-natural-logarithm-laws, thm-real-power-continuity-and-derivatives]
dependency_roles:
  cor-mean-value-theorem: mathematical-premise
  def-natural-logarithm: mathematical-premise
  def-real-power: mathematical-premise
  def-td-scaled-products-and-comparison: formulation-prerequisite
  def-td-thermal-join: formulation-prerequisite
  post-td-accessibility-a1-a6: physical-assumption
  post-td-equilibrium-join-coherence: physical-assumption
  post-td-simple-system-geometric-axioms: physical-assumption
  post-td-thermal-join-axioms: physical-assumption
  post-td-universal-thermal-range: physical-assumption
  thm-exponential-two-point-convexity: mathematical-premise
  thm-natural-logarithm-laws: mathematical-premise
  thm-real-power-continuity-and-derivatives: mathematical-premise
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Lieb and Yngvason, The Physics and Mathematics of the Second Law of Thermodynamics, §§III.B–IV.A
      url: https://arxiv.org/pdf/cond-mat/9708200v2
    - title: "André Thess, The Lieb–Yngvason Machine: A didactical tool for the definition of entropy in classical thermodynamics, §§2–4"
      url: https://www.dlr.de/de/tt/downloads/dokumente/institut/institutsleitung/Entropie.pdf/@@download/file
verification:
  precheck: n/a
dependency_level: 10
---

## Example

Take finitely many tagged simple types $i$, each with positive dimensionless coordinates $u>0,v>0$, where $u=E/(1\,\mathrm J)$ for internal energy $E$ measured in joules and $v$ is the numerical work coordinate in its declared fixed unit. Choose dimensionless constants $c_i,r_i>0$, positive dimensionless reference values $u_{\star,i},v_{\star,i}>0$, and dimensionless offsets $b_i\in\mathbb R$, and define

$$s_i(u,v)=c_i\log\frac{u}{u_{\star,i}}+r_i\log\frac{v}{v_{\star,i}}+b_i.$$

For a scaled tag $t i$, set its coefficients to $tc_i,tr_i,tb_i$ and its reference coordinates to $t u_{\star,i},t v_{\star,i}$, so $s_{ti}(tu,tv)=t\,s_i(u,v)$. For every finite compound of declared primitive, scaled, or recursively joined tags, assign the sum of the constituent state entropies and declare $A\prec B$ exactly when this sum for $A$ is no greater than this sum for $B$, on equal-formal-mass pairs. To make the cross-composition part of this formal witness explicit, for each such ordered pair $(A,B)$ whose entropy sums obey that inequality, declare one formal channel record $P_{A,B}$ with time interval $[0,1]$, endpoints $A,B$, configuration set $\{A,B\}$, configuration function equal to $A$ for $0\le t<1$ and $B$ at $t=1$, singleton control and boundary record sets, and one transfer record. These channels are abstract endpoint/preparation data of this mathematical consistency model, with admission defined exactly by the displayed entropy inequality; they assert no physical energy or material conservation law and no material realizability. Their endpoint relation is precisely the entropy-sum comparison on equal formal masses. Thus distinct-composition comparisons are separately declared formal channels, while the same-composition restriction gives the ordinary branch of [[def-td-scaled-products-and-comparison]]. For a thermal join of $i,j$, define the joined entropy at $(u,v_i,v_j)$ as the maximum of $s_i(u_i,v_i)+s_j(u_j,v_j)$ over $u_i,u_j>0$ with $u_i+u_j=u$. Use the same entropy comparison for the separated-pair and joined encodings, which have the same formal composition: the pair accesses the join exactly when its entropy is at most the joined entropy, and the join accesses the pair exactly when the reverse inequality holds. Thus contact equilibrium is equivalent to equality with the maximum. For a positive scaled copy $t\Delta_{ij}$ of a join, scale all coordinates by $t$ and set $s_{t\Delta_{ij}}(tZ):=t s_{\Delta_{ij}}(Z)$; this is consistent with the maximum because scaling $(u_i,u_j)$ by $t$ bijects the splits of $u$ with the splits of $tu$. For nested joins, use the same maximum construction recursively, with the same positive-scaling rule.

This formal model explicitly declares each equilibrium endpoint domain to be the stated positive numerical orthant, with endpoint coordinate map the identity and accessibility the entropy-sum relation above. Its fixed unit map assigns $E=u(1\,\mathrm J)$ and each work coordinate $W_a=v_aw_a$ for a fixed positive unit $w_a$; this bookkeeping supplies no material realization. Each primitive tag has a fixed formal composition, while the joined endpoint space is the positive orthant in summed energy and retained work coordinates with the summed composition. A scaled copy transports these coordinates and that composition and retains its distinct tag, exactly as in the declared join interface. This provides a nondegenerate consistency witness for the order, geometric, contact, T5, and C1 assumptions on this positive-coordinate family. It supplies no measured parameter values or empirical claim.

## Facts & Assumptions

**Given:** Positive coordinates; fixed $c_i,r_i>0$, reference values and constants; tagged scaling as stated; accessibility on separated, joined, and mixed contact encodings is the stated total-entropy comparison; join entropy is the constrained maximum.

[F1] [[def-td-thermal-join]]: a join retains component work coordinates and sums the energy coordinate.

[F2] [[post-td-accessibility-a1-a6]]: A1–A6 are the order conditions to be checked for the example relation.

[F3] [[post-td-simple-system-geometric-axioms]]: A7 and S1–S3 are the geometric conditions to be checked.

[F4] [[post-td-thermal-join-axioms]]: T1–T4 are the contact conditions to be checked.

[F5] [[post-td-universal-thermal-range]] and [[post-td-equilibrium-join-coherence]]: T5 and C1 are separate conditions to be checked.

[F6] [[thm-exponential-two-point-convexity]]: for $a,b\in\mathbb R$ and $t\in[0,1]$, $\exp((1-t)a+tb)\le(1-t)\exp(a)+t\exp(b)$; for $0<t<1$, equality holds exactly when $a=b$.

[F7] [[def-natural-logarithm]] and [[thm-natural-logarithm-laws]]: $\log$ is strictly increasing on $(0,\infty)$, and $\log(ab)=\log a+\log b$.

[F8] [[def-real-power]] and [[thm-real-power-continuity-and-derivatives]]: for $K>0$ and $\alpha\in\mathbb R$, $v^\alpha$ is differentiable for $v>0$ with derivative $\alpha v^{\alpha-1}$.

[F9] [[cor-mean-value-theorem]]: if $g$ is continuous on a closed interval and differentiable inside, its endpoint slope equals $g'$ at some interior point.

## Verification

**Given:** [F1]–[F5] and the construction in the Example.

1.1 For $a,b>0$, apply [F6] to $\log a,\log b$, then use [F7] and monotonicity of $\log$, to obtain $\log((1-t)a+tb)\ge(1-t)\log a+t\log b$ for $0\le t\le1$. Apply this inequality to the energy ratios $u/u_{\star,i}$ and to the work ratios $v/v_{\star,i}$; multiplying by $c_i,r_i>0$ and adding $b_i$ proves concavity of $s_i$. This verifies the convex-combination accessibility condition. Since $\log$ is strictly increasing, raising $u$ at fixed $v$ gives a strict successor, proving S1. [F3, F6, F7, algebra]

1.2 The boundary equation $s_i(u',v')=s_i(u_x,v_x)$ rearranges to $u'=g(v')=K(v')^{-\alpha}$, where $K=u_xv_x^\alpha>0$ and $\alpha=r_i/c_i>0$. By [F8], $g'=-\alpha K(v')^{-\alpha-1}$ and $g''=\alpha(\alpha+1)K(v')^{-\alpha-2}>0$. Thus $g'$ is increasing by [F9]. For $v'\ne v_x$, the mean value theorem on the interval between them and the monotonicity of $g'$ give $g(v')\ge g(v_x)+g'(v_x)(v'-v_x)$: when $v'<v_x$, both the derivative comparison and the sign of $v'-v_x$ reverse. Hence the forward sector $u'\ge g(v')$ lies above the tangent support $u'-u_x+(r_i u_x/(c_iv_x))(v'-v_x)=0$. A vertical line cannot support this sector because its work coordinate varies on both sides at an interior boundary point. If a nonvertical line with slope parameter $q$ supports there, its inequality on graph points gives $g(v')-g(v_x)+q(v'-v_x)\ge0$ for both signs of $v'-v_x$; dividing by that difference and taking limits forces $q=-g'(v_x)$. This proves uniqueness and gives $P_i=r_i u_x/(c_iv_x)$. On any closed rectangle with $u,\tilde u\le u_1$ and $v,\tilde v\ge v_0>0$, $|u/v-\tilde u/\tilde v|\le |u-\tilde u|/v_0+u_1|v-\tilde v|/v_0^2$, so the slope is locally Lipschitz. The graph over $v'>0$ is arcwise connected, proving S3. [F3, F8, F9, algebra]

1.3 Put $C=c_i+c_j$. For any split $u_i+u_j=u$, [F6] with weights $c_i/C,c_j/C$, followed by [F7], gives $$\frac{c_i}{C}\log\frac{u_i}{c_i}+\frac{c_j}{C}\log\frac{u_j}{c_j}\le\log\frac{u}{C},$$ with equality exactly when $u_i/c_i=u_j/c_j$. Since $u_i+u_j=u$, that equality forces the unique split $u_i=c_i u/C,\ u_j=c_j u/C$. Multiply by $C$ and add the constants $c_i\log(c_i/u_{\star,i})+c_j\log(c_j/u_{\star,j})+b_i+b_j+r_i\log(v_i/v_{\star,i})+r_j\log(v_j/v_{\star,j})$; the resulting inequality is exactly the pair entropy bounded by its value at that split. By the declared total-entropy comparison, this proves T1 and shows that the maximizing split is reversible with the join, establishing the join-splitting clause of T2. For the equal-state scaled split, the maximizing split of its join has energies $tu$ and $(1-t)u$, since the two energy coefficients are $tc_i$ and $(1-t)c_i$. Hence the join is reversible to that pair by the same maximum criterion, as required by T2. Separately, tagged extensivity gives $s_{ti}(tu,tv)=t s_i(u,v)$ and $s_{(1-t)i}((1-t)u,(1-t)v)=(1-t)s_i(u,v)$, so the separated pair also has the same entropy as $x$ and A5 gives the retained pair-to-single reversible preparation. The binary join entropy is $C\log u+r_i\log v_i+r_j\log v_j+C_{ij}$ for a constant $C_{ij}$; its energy-to-coefficient ratio is $u/C=u_i/c_i=u_j/c_j$ at the maximizing split. [F1, F4, F6, F7, given, algebra]

2.1 By the declared total-entropy comparison, every finite product has a real-valued order. Reflexivity and transitivity follow from the real order; adding the same spectator adds the same number to both sides; positive scaling multiplies the sums by a positive coefficient; and reversible splitting preserves the extensive sum. If $A+\epsilon_nZ_0\prec B+\epsilon_nZ_1$, then $s(A)-s(B)\le\epsilon_n(s(Z_1)-s(Z_0))$. Taking $n\to\infty$ yields $s(A)\le s(B)$ and hence $A\prec B$. This verifies the six adopted order conditions. [F2, given, step 1.1, algebra]

2.2 For a single system the entropy has the displayed logarithmic form. If a nested join has energy coefficient $C$ and is joined with a system of coefficient $c>0$, the maximum calculation of step 1.3 gives the unique maximizing split at equal energy-to-coefficient ratios; substitution adds $c$ to the energy coefficient and adds the new work term. Induction over the finite joins therefore gives coefficient $C=\sum_k c_k$ and entropy $C\log u+\sum_k r_k\log v_k+C_0$ for the positive work coordinates $v=(v_1,\ldots,v_m)$. Its boundary is $u=g(v)=K\prod_k v_k^{-\alpha_k}$ with $\alpha_k=r_k/C>0$. Direct differentiation gives, for any vector $h$, $$D^2g(v)[h,h]=g(v)\left[\left(\sum_k\alpha_k\frac{h_k}{v_k}\right)^2+\sum_k\alpha_k\left(\frac{h_k}{v_k}\right)^2\right]\ge0.$$ Thus along each segment in the positive work orthant, the derivative of $g$ is nondecreasing by [F9], and the mean value theorem gives $g(v')\ge g(v)+\nabla g(v)\cdot(v'-v)$. The forward sector $u\ge g(v)$ lies above this tangent support; uniqueness follows by applying the support inequality to graph points in each direction $h$ and $-h$, which forces the support functional to equal $\nabla g(v)$. Its finite slope components are $P_k=r_k u/(Cv_k)$; on rectangles bounded away from all coordinate axes, the quotient estimate from step 1.2 applies to each component and proves local Lipschitz regularity. The positive orthant and its graph are arcwise connected. Increasing $u$ gives S1, and the coordinatewise concavity argument of step 1.1 gives the convex-combination accessibility condition. Hence each join satisfies the same simple-system geometry. [F3, F8, F9, given, step 1.1, step 1.2, step 1.3, algebra]

3.1 Applying the two-weight maximum calculation of steps 1.3 and 2.2 to any two primitive or recursively joined types $A,B$ shows that $x=(u_A,v_A)$ and $y=(u_B,v_B)$ are thermally equivalent exactly when $u_A/C_A=u_B/C_B$, where $C_A,C_B>0$ are their energy coefficients. Equality of ratios is transitive, proving T3. For any such simple type with coefficient $C$ and at least one work coordinate $v_k$, fix a state $x=(u,v)$ and choose $0<v_k^-<v_k<v_k^+$, keeping $u$ and all other coordinates fixed. The entropy formula of step 2.2 strictly increases with $v_k$, so $x_-\prec\prec x\prec\prec x_+$. Both outer states have the same ratio $u/C$ and hence are thermally equivalent. This proves T4 for primitive and recursively joined simple types. [F4, given, step 1.3, step 2.2, algebra]

4.1 Let $A,B$ be any primitive or recursively joined simple types, with energy coefficients $C_A,C_B>0$. Given $x=(u_A,v_A)$ and any allowed work-coordinate vector $v_B$, choose $u_B=C_Bu_A/C_A$. The two-weight maximum calculation in steps 1.3 and 2.2 makes $x$ thermally equivalent to $y=(u_B,v_B)$, proving T5. For any equilibrated pair $x,y$, the same calculation gives $u_A/C_A=u_B/C_B$. Their joined state has energy coefficient $C_A+C_B$ and energy $u_A+u_B$, so its ratio equals the common ratio; the two-weight maximum criterion therefore makes that joined state thermally equivalent to $x$, and likewise to $y$. This proves C1 for every admitted join. [F5, given, step 1.3, step 2.2, algebra] ∎
## Remarks

The coefficients are chosen mathematical parameters. Their existence checks compatibility of the postulates but does not report measurements, determine SI entropy units, or prove the assumptions for a real substance.
