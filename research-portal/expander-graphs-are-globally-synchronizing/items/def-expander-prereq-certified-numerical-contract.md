---
id: def-expander-prereq-certified-numerical-contract
kind: definition
title: Certificates for finite transcendental inequalities
domain: mathematics
status: published
origin: pipeline
deps:
  - math:lem-real-interval-arithmetic-preserves-enclosure
  - math:def-principal-inverse-sine-and-cosine
  - math:thm-natural-logarithm-laws
  - math:thm-sine-and-cosine-derivatives
  - lem-author-2e2d9953c21a-sine-enclosures
  - lem-author-2e2d9953c21a-inverse-brackets
  - lem-author-2e2d9953c21a-logarithm-and-pi
  - lem-author-2e2d9953c21a-geometric-tail
  - lem-author-2e2d9953c21a-regular-numerical-replay
  - math:def-intervals-rectangles-and-complex-balls
  - math:def-outward-rounded-interval-and-ball-operations
  - math:def-dyadic-floating-point-format-and-directed-rounding
  - math:lem-directed-dyadic-rounding-enclosure-and-error
  - math:cor-trigonometric-parity-and-pythagorean-identity
  - math:cor-differentiable-implies-continuous
  - math:lem-mean-value-theorem-on-closed-interval
dependency_roles:
  math:lem-real-interval-arithmetic-preserves-enclosure: mathematical-premise
  math:def-principal-inverse-sine-and-cosine: mathematical-premise
  math:thm-natural-logarithm-laws: mathematical-premise
  math:thm-sine-and-cosine-derivatives: mathematical-premise
  lem-author-2e2d9953c21a-sine-enclosures: mathematical-premise
  lem-author-2e2d9953c21a-inverse-brackets: mathematical-premise
  lem-author-2e2d9953c21a-logarithm-and-pi: mathematical-premise
  lem-author-2e2d9953c21a-geometric-tail: mathematical-premise
  lem-author-2e2d9953c21a-regular-numerical-replay: mathematical-premise
  math:def-intervals-rectangles-and-complex-balls: mathematical-premise
  math:def-outward-rounded-interval-and-ball-operations: mathematical-premise
  math:def-dyadic-floating-point-format-and-directed-rounding: mathematical-premise
  math:lem-directed-dyadic-rounding-enclosure-and-error: mathematical-premise
  math:cor-trigonometric-parity-and-pythagorean-identity: mathematical-premise
  math:cor-differentiable-implies-continuous: mathematical-premise
  math:lem-mean-value-theorem-on-closed-interval: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
dependency_level: 3
---

## Definition

A finite numerical certificate specifies rational input intervals, exact decimal constants as rationals, outward interval operations, and rigorous enclosures for each occurrence of $\sin$, $\arcsin$ and $\log$. A strict inequality is certified only when the resulting closed intervals are disjoint in the asserted direction. Sine is the smooth real sine function, inverse sine takes its principal values in $[-\pi/2,\pi/2]$, and $\log$ is the natural logarithm. The certificate records every denominator's nonvanishing and each inverse function's domain. For an infinite geometric tail, it uses an exact finite expression and a proved remainder bound; a printed decimal table alone is not a certificate. Rounded entries used as lower bounds do not replace exact recurrence values.

The admitted elementary certificates are rational sine sums and tails, principal-branch endpoint tests, range-reduced logarithm and Machin enclosures, and an infinite-tail bound. Their combination supplies a separate scalar replay at $\alpha=0.0816$, including every displayed lower bound and both cap comparisons; no graph-theoretic conclusion is part of this definition.

For storage, choose and record a dyadic floating-point format with precision $p\ge2$ and finite exponent limits $e_{\min}\le e_{\max}$. Convert every rational interval $[a,b]$ to $[\operatorname{rd}(a),\operatorname{ru}(b)]$, and every exact rational constant $c$ to $[\operatorname{rd}(c),\operatorname{ru}(c)]$. Use exact integer comparisons for this conversion and directed rounding after each endpoint calculation. Every stored interval must be finite. Overflow or a failed domain check supplies no successful certificate; refinement may use a different recorded format. An inconclusive endpoint test establishes no tested inequality, although a separately justified fallback enclosure may still be used. The finite expression graph is a directed acyclic graph whose shared nodes reuse the same exact intermediate value. Arithmetic nodes use the real addition, subtraction, multiplication, division away from zero, and square operations.

The following interval extensions apply at transcendental nodes to the entire stored predecessor interval $X=[l,u]$, including irrational admissible values inside it. All auxiliary endpoints below are exact rationals before outward conversion to storage. Sine point enclosures use an integer $N\ge0$ and the finite factorial sums and remainder $S_N(x)\pm R_N(x)$, only when $q_N(x)=x^2/((2N+4)(2N+5))<1$. At a sine node, set $m=(l+u)/2$ and $r=(u-l)/2$. If $[s_-,s_+]$ encloses $\sin m$ by that point rule, output the outward conversion of $[s_--r,s_++r]$. At a logarithm node require $l>0$. Obtain point enclosures $\log l\in[L_l,U_l]$ and $\log u\in[L_u,U_u]$ from the range-reduced rule with integer $N\ge1$, and output the outward conversion of $[L_l,U_u]$.

At an inverse-sine node require $-1\le l\le u\le1$. Record a Machin enclosure $0<P_-\le\pi\le P_+$. Start with the rational lower and upper bounds $A=-P_+/2$ and $B=P_+/2$. One may replace $A$ by a rational $a$ satisfying $|a|\le P_-/2$ if a valid sine point enclosure has upper endpoint at most $l$; one may replace $B$ by a rational $b$ satisfying $|b|\le P_-/2$ if a valid sine point enclosure has lower endpoint at least $u$. Output the outward conversion of $[A,B]$. The two optional tests are independent, apply to signed endpoints, and need not succeed. The initial bounds handle $l=-1$, $u=1$, and any inconclusive test. For nonnegative rational point inputs, the original principal-branch endpoint rule is also admitted under its stated hypotheses. No search termination or guaranteed separation at a fixed precision is asserted.

## Definition references

[[math:lem-real-interval-arithmetic-preserves-enclosure]]

[[math:def-principal-inverse-sine-and-cosine]]

[[math:thm-natural-logarithm-laws]]

[[math:thm-sine-and-cosine-derivatives]]

[[lem-author-2e2d9953c21a-sine-enclosures]]

[[lem-author-2e2d9953c21a-inverse-brackets]]

[[lem-author-2e2d9953c21a-logarithm-and-pi]]

[[lem-author-2e2d9953c21a-geometric-tail]]

[[lem-author-2e2d9953c21a-regular-numerical-replay]]

[[math:def-intervals-rectangles-and-complex-balls]]

[[math:def-outward-rounded-interval-and-ball-operations]]

[[math:def-dyadic-floating-point-format-and-directed-rounding]]

[[math:lem-directed-dyadic-rounding-enclosure-and-error]]

[[math:cor-trigonometric-parity-and-pythagorean-identity]]

[[math:cor-differentiable-implies-continuous]]

[[math:lem-mean-value-theorem-on-closed-interval]]

## Facts & Assumptions

**Given:** A finite expression directed acyclic graph, rational input intervals and exact rational constants, a recorded dyadic format, and the domain and enclosure checks in the Definition; or a geometric expression with its separately stated tail estimate.

[F1] [[math:def-intervals-rectangles-and-complex-balls]] defines the stored intervals and expression graph. [[math:def-outward-rounded-interval-and-ball-operations]] specifies the arithmetic operations, and [[math:lem-real-interval-arithmetic-preserves-enclosure]] encloses their finite results on finite dyadic predecessor intervals with valid operation domains.

[F2] [[math:def-principal-inverse-sine-and-cosine]] gives the increasing sine branch, its endpoint values, and its principal inverse on $[-1,1]$. [[math:thm-natural-logarithm-laws]] gives the increasing real logarithm on $(0,\infty)$. [[math:thm-sine-and-cosine-derivatives]] gives the smooth sine convention and $\sin'=\cos$.

[F3] [[lem-author-2e2d9953c21a-sine-enclosures]] encloses sine at any rational point with $N\ge0$ and $q_N<1$. [[lem-author-2e2d9953c21a-inverse-brackets]] gives the stated nonnegative principal-branch endpoint test. [[lem-author-2e2d9953c21a-logarithm-and-pi]] encloses logarithms at positive rational points and $\pi$ using $N\ge1$. [[lem-author-2e2d9953c21a-geometric-tail]] proves its inverse-sine series and tail bounds under its stated hypotheses.

[F4] [[lem-author-2e2d9953c21a-regular-numerical-replay]] gives the exact rational regular-parameter replay independently of any graph claim.

[F5] [[math:def-dyadic-floating-point-format-and-directed-rounding]] defines the recorded format and exact-rational conversion by integer comparisons. [[math:lem-directed-dyadic-rounding-enclosure-and-error]] gives $\operatorname{rd}(x)\le x\le\operatorname{ru}(x)$ for endpoints within its finite range, and explicitly reports overflow otherwise.

[F6] [[math:cor-trigonometric-parity-and-pythagorean-identity]] gives $|\cos x|\le1$ for every real $x$.

[F7] [[math:cor-differentiable-implies-continuous]] makes the everywhere differentiable sine continuous. [[math:lem-mean-value-theorem-on-closed-interval]] applies to a function continuous on a closed interval and differentiable in its interior.

## Justification

1.1 For rational $a\le b$ within the recorded format's finite range, [F5] gives $\operatorname{rd}(a)\le a\le b\le\operatorname{ru}(b)$. Thus outward conversion contains the whole rational-endpoint input set, not only its endpoints. The same argument with $a=b=c$ encloses an exact rational constant, and applies after every auxiliary rational enclosure. Each successful conversion returns the finite dyadic intervals required by [F1]. Overflow and all invalid operation domains are excluded from a successful certificate. [given, F1, F5, algebra]

2.1 For any real $x,m$, apply [F7] to sine on the interval with endpoints $x,m$ when they differ. It is continuous on that closed interval by [F2] and [F7], differentiable in the interior by [F2], and its derivative has absolute value at most $1$ by [F6]. The mean value identity therefore gives $|\sin x-\sin m|\le|x-m|$; when $x=m$ the same inequality is equality. For $x\in[l,u]$ this gives $|\sin x-\sin m|\le r$, so $s_--r\le\sin x\le s_++r$. Here $m$ is rational, the point enclosure is valid by [F3] with its checked $q_N(m)<1$, and the output conversion preserves containment by step 1.1. This proves the sine extension on every finite stored interval without a monotonicity assumption on sine there. [given, F2, F3, F6, F7, step 1.1, algebra]

2.2 At a logarithm node, every $x\in[l,u]$ is positive because $l>0$. Its endpoints are rational, so [F3] supplies the two point enclosures with their range-reduction and $N\ge1$ hypotheses. Monotonicity in [F2] gives $L_l\le\log l\le\log x\le\log u\le U_u$. Step 1.1 then proves that the stored output encloses $\log x$ for every such $x$, including irrational ones. [given, F2, F3, step 1.1]

2.3 On $[-1,1]$ the inverse in [F2] is increasing: an inequality between two inverse values in the opposite direction would, by strict increase of sine on the branch, reverse the inequality between their inputs. Thus $\arcsin l\le\arcsin x\le\arcsin u$ for all $x\in[l,u]$. The initial bounds enclose the whole branch because $P_+\ge\pi$. If the optional lower test succeeds, $|a|\le P_-/2\le\pi/2$ puts $a$ on the branch, and [F3] gives $\sin a\le l=\sin(\arcsin l)$; strict increase gives $a\le\arcsin l$. The upper test similarly gives $\sin b\ge u=\sin(\arcsin u)$ and $b\ge\arcsin u$. These arguments use rational point sine enclosures valid for either sign, rather than applying the nonnegative-input supplier outside its hypotheses. Hence $A\le\arcsin x\le B$ whether either test succeeds or not, including inputs $-1$ and $1$. The separately admitted nonnegative point rule is exactly [F3]'s inverse-bracket rule under its own hypotheses. Step 1.1 preserves all these enclosures on storage conversion. [given, F2, F3, step 1.1, algebra]

3.1 Traverse the finite acyclic graph in dependency order. Each exact input or constant belongs to its stored interval by step 1.1. If the exact predecessor values belong to their computed intervals, an arithmetic node encloses its exact output by [F1], and a transcendental node does so by steps 2.1, 2.2 or 2.3 with its checked domain. Induction reaches every root for each admissible assignment; shared nodes cause no change because the same exact value is used at every occurrence. If the entire left root interval lies strictly below the right root interval, their exact values obey that strict inequality. Overlap makes no strict-comparison claim. For an infinite geometric expression, add its separately proved omitted-tail interval before the endpoint comparison; [F3] supplies such an interval for its inverse-sine tail under its stated hypotheses. This imports no arbitrary infinite sum into a finite expression graph. [given, F1, F3, step 1.1, step 2.1, step 2.2, step 2.3, induction]

4.1 In particular [F4] proves that $0.570-\arcsin(3.168/13.985)-\arcsin(3.168/(13.985\cdot2.1274))-3.326/(63.295(1-1/2.1274))>0.1356>0.131$. Its recurrence retains $c_3=(2.4093)^3$ before rounding, and its cap checks use the exact $5(0.0816)^2/4=0.0083232$. This is a completed rational certificate for the scalar assertions. Each consumer must still establish the hypotheses of its graph-theoretic or asymptotic application. [F4, step 3.1] ∎
