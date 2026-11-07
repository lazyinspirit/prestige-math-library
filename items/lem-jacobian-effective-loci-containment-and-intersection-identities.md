---
dependency_level: 10
id: lem-jacobian-effective-loci-containment-and-intersection-identities
kind: lemma
title: Effective Abel loci and unique theta representatives
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
- thm-picard-zero-represented-by-jacobian
- def-pointed-abel-jacobi-map-of-curve
- thm-jacobian-has-canonical-principal-polarization
- lem-generic-degree-g-divisor-has-unique-effective-representative
- lem-generic-degree-g-minus-one-divisor-has-unique-effective-representative
- lem-generic-theta-translate-pullback-is-degree-g-divisor
- thm-full-riemann-roch-divisor
- thm-effective-divisor-symmetric-power-projective
- lem-arith-homogeneous-bundle-vanishing-and-mumford-surjectivity
- lem-theorem-of-the-square-and-mumford-homomorphism
- thm-global-functions-proper-integral-variety
- def-axiom-of-choice
- def-dependent-choice
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
axiom_use: AC and DC are explicit inherited scheme, Picard, divisor, cohomology and
  duality hypotheses; no unqualified choice-scope conclusion is asserted.
sources:
  references:
  - title: J. S. Milne, Abelian Varieties, version2.00
    url: https://www.jmilne.org/math/CourseNotes/AV.pdf
    locator: ChapterIII §§6,12–13, printed105–107 and120–125; actual full relevant
      proof read; local theta uniqueness and multiplicity-degree closure are proved
      here.
---

## Statement

Assume AC and DC. Let $k$ be algebraically closed of characteristic zero and let $C/k$ be a smooth proper geometrically connected curve of genus $g\ge2$, with $P\in C(k)$, $J=\operatorname{Pic}^0(C)$ and $u(Q)=[Q-P]$. Write $W^r\subset J$ for the reduced image of the degree-$r$ symmetric power under $D\mapsto[D-rP]$, $W^r_a=W^r+a$, and $\Theta=W^{g-1}$. For a canonical divisor $K_C$ put $\kappa=[K_C-(2g-2)P]$ and $\tau Z=\kappa-Z$. For any divisor $D$ on $J$, write $D^{\mathrm{ref}}=[-1]_J^*D$ for its **reflected effective divisor** when $D$ is effective; $\mathcal O_J(D^{\mathrm{ref}})$ never means $\mathcal O_J(-D)$.

The $W^r$ are irreducible of dimension $r$ for $0\le r\le g-1$, with $W^0=\{0\}$. For these indices,
$$\tau(\Theta_a)=\Theta_{-a},\qquad W^r_a\subset\Theta_b\iff a-b\in W^{g-1-r},$$
$$\bigcap_{a\in W^r}(\Theta-a)=W^{g-1-r},\qquad\bigcap_{a\in W^r}(\Theta+a)=\tau(W^{g-1-r}).$$
If $W^1\not\subset\Theta_b$, its pullback to $C$ is the unique effective divisor $D_b$ in its degree-$g$ class, with $[D_b-gP]=b+\kappa$.

One has $h^0(J,\mathcal O_J(\Theta^{\mathrm{ref}}))=h^0(J,\mathcal O_J(\Theta))=1$. Every effective divisor whose line bundle induces the same principal Mumford map as a theta divisor is a translate of that theta divisor. The pullback of either theta line bundle to $C$ has degree $g$. More generally, on every smooth proper geometrically integral curve mapped to $J$ the degree of the pullback of $[m]^*L$ is $m^2$ times that of $L$, for every integer $m$ and every invertible sheaf $L$.

Finally, if $0\le r\le g-2$, $x\in W^1$, $y\in W^{g-1-r}$ and $a+x=b+y$, with $W^{r+1}_a\not\subset\Theta_b$, then, as reduced closed sets,
$$W^{r+1}_a\cap\Theta_b=W^r_{a+x}\cup S_y,\qquad S_y=W^{r+1}_a\cap\tau(W^{g-2}_{y-a}).$$

## Facts & Assumptions

**Given:** AC/DC and the data of the Statement; all intersections are of reduced closed sets unless explicitly called Cartier pullbacks.

[A1] AC/DC are the actual hypotheses of the supplied Picard, polarization and coherent-cohomology constructions. [[def-axiom-of-choice]] [[def-dependent-choice]]

[F1] The full field Picard sheaf is separated and represented; the pointed Abel map classifies $[Q-P]$. [[thm-picard-zero-represented-by-jacobian]] [[def-pointed-abel-jacobi-map-of-curve]]

[F2] Symmetric powers represent effective divisors and are projective irreducible of the indicated dimension. The degree-$g$ Abel map is birational and a generic degree-$g$ class has a unique effective representative; the same generic assertion holds in degree $g-1$. [[thm-effective-divisor-symmetric-power-projective]] [[lem-generic-degree-g-divisor-has-unique-effective-representative]] [[lem-generic-degree-g-minus-one-divisor-has-unique-effective-representative]]

[F3] For generic $a\in J$, $u^*\mathcal O_J(a-\Theta)$ is the unique effective degree-$g$ representative of Abel class $a$. Here $a-\Theta$ is the translate by $a$ of $\Theta^{\mathrm{ref}}$, a reflected effective divisor. [[lem-generic-theta-translate-pullback-is-degree-g-divisor]]

[F4] Curve Riemann–Roch gives $h^0(D)-h^0(K_C-D)=\deg D+1-g$. [[thm-full-riemann-roch-divisor]]

[F5] $\mathcal O_J(\Theta^{\mathrm{ref}})$ is ample and its Mumford map is the canonical principal polarization. The kernel of the line-bundle-to-Mumford-map homomorphism is exactly $\operatorname{Pic}^0$; an ample line bundle's translation differences exhaust $\operatorname{Pic}^0$ over an algebraic closure. [[thm-jacobian-has-canonical-principal-polarization]] [[lem-arith-homogeneous-bundle-vanishing-and-mumford-surjectivity]]

[F6] The square identity makes $\varphi_L$ a homomorphism. Proper integral varieties have only scalar global functions. [[lem-theorem-of-the-square-and-mumford-homomorphism]] [[thm-global-functions-proper-integral-variety]]

## Proof

**Proof technique:** Riemann–Roch incidence identities and restriction of sections to translated Abel curves.

**Given:** The Statement data and [A1].

1.1 The $W^r$ are irreducible by [F2]. A subdivisor of a generic nonspecial degree-$g$ divisor has no second effective representative, since adding its fixed complement would contradict [F2]. Thus the degree-$r$ Abel map is generically one-to-one for $0\le r\le g-1$, so its image has dimension $r$; the degree-zero case is the single zero class. The degree-$g$ Abel map is surjective by [F4], and its ordered sum version $C^g\to J$ is dominant. [A1, F1, F2, F4, given, construct]

2.1 If $D$ is effective of degree $g-1$, [F4] gives $h^0(K_C-D)=h^0(D)\ge1$. Taking effective representatives and applying the involution twice proves $\tau\Theta=\Theta$ and $\tau(\Theta_a)=\Theta_{-a}$. In particular $\Theta^{\mathrm{ref}}=\Theta_{-\kappa}$ as effective reduced divisors. [F4, step 1.1, algebra]

3.1 Adding effective representatives proves the reverse implication of the containment assertion. Conversely suppose $W^r_a\subset\Theta_b$ and choose effective $A$ of degree $g-1$ representing $a-b$. For every effective degree-$r$ divisor $D$ there is effective degree-$g-1$ divisor $E$ with $D+A\sim E+rP$. Choose effective $A'\sim K_C-A$ and $E'\sim K_C-E$. Then $D+E'\sim A'+rP$. The incidence of a member of $|A'+rP|$ containing $D$ projects onto $C^{(r)}$; a fixed effective member has only finitely many degree-$r$ subdivisors. Hence $\dim|A'+rP|\ge r$. By [F4], $K_C-A'-rP$ has an effective representative $F$ of degree $g-1-r$. Its Abel class is $a-b$, proving the forward implication, also for $r=0,g-1$. [F1, F2, F4, step 2.1, construct, algebra]

3.2 Put $L=\mathcal O_J(\Theta^{\mathrm{ref}})$. For generic $a$, the restriction of $L$ along $Q\mapsto u(Q)-a$ is the unique effective degree-$g$ line bundle in [F3], hence has a one-dimensional section space. A nonzero section of $L$ restricts nontrivially for generic $a$: the locus where the entire translated curve is in its zero divisor is closed and proper, since translates cover $J$. Thus for nonzero sections $s,t$ the ratio $s/t$ is constant along generic translated Abel curves. Rationally on $J\times C\times C$ this says $r(a+u(Q))=r(a+u(Q'))$. Specialize $Q'=P$; freely varying $a$ avoids the poles, so $r(a+u(Q))=r(a)$. Iterating $g$ times and using dominance of $C^g\to J$ from step 1.1 gives $r(a+b)=r(a)$ on $J\times J$. Specializing a permissible $a$ proves $r$ constant. Therefore $h^0(L)=1$; it is nonzero because the reflected divisor is effective. Step 2.1 also gives $h^0(\mathcal O_J(\Theta))=1$. [F1, F2, F3, F6, step 1.1, step 2.1, construct, algebra]

4.1 The condition $c\in\bigcap_{a\in W^r}(\Theta-a)$ says $W^r+c\subset\Theta$, which step 3.1 identifies with $c\in W^{g-1-r}$. Apply $\tau$ and step 2.1 for the second intersection identity. These include the zero-index and zero-dimensional endpoints. [step 2.1, step 3.1, algebra]

4.2 The family $a\mapsto u^*\mathcal O_J(a-\Theta)$ is a Picard-family morphism by [F1]. Its degree is constant and its class equals $a+[gP]$ on the dense open supplied by [F3]; separatedness of the Picard scheme and reducedness of $J$ extend this equality to every $a$. This extends line-bundle classes, not effective-representative uniqueness at special points. Since $\Theta_b=(b+\kappa)-\Theta$ by step 2.1, its noncontained pullback $D_b$ is effective of degree $g$ and Abel class $b+\kappa$. Its residual degree-$g-2$ class $K_C-D_b$ has Abel class $-b$; by step 3.1 it is effective exactly when $W^1\subset\Theta_b$. Noncontainment and [F4] therefore give $h^0(D_b)=1$, proving its uniqueness and the degree assertion. [F1, F3, F4, step 2.1, step 3.1, construct, algebra]

5.1 If two line bundles induce the same Mumford map, their quotient is in $\operatorname{Pic}^0$ by [F5]. For a theta bundle its principal Mumford map supplies a translation realizing that quotient. After translation the bundles agree; step 3.2 makes their effective divisors equal. This proves the theta translation assertion. For a homomorphism $f$, the identity $f t_a=t_{f(a)}f$ gives $\varphi_{f^*L}=f^\vee\varphi_Lf$ directly by pulling back the defining translation-difference Picard class. Thus for any $L$, [F6] gives $\varphi_{[m]^*L}=[m]^\vee\varphi_L[m]=m^2\varphi_L=\varphi_{L^{\otimes m^2}}$. Their quotient is therefore algebraically trivial by [F5], also when $m=0$. Algebraically trivial bundles restrict to degree zero on every curve, because degree is locally constant in the connected Picard family. This proves the asserted degree scaling. Translation has the same degree-preservation property by the square identity. [F1, F5, F6, step 4.2, step 3.2, algebra]

6.1 For the last formula write $x=u(X)$ and $y=u(Y)$, with $X$ a point and $Y$ effective of degree $g-1-r$. If $X$ occurred in $Y$, then $a-b=u(Y-X)\in W^{g-2-r}$, contradicting the assumed noncontainment by step 3.1. For $c$ in the intersection write $c=u(D)+a=u(E)+b$ with $\deg D=r+1$, $\deg E=g-1$. Then $D+Y\sim E+X$. If these effective divisors are equal, $D$ contains $X$, so $c\in W^r_{a+x}$. Otherwise that degree-$g$ class has at least two sections; subtracting any point $Q$ still leaves a nonzero section, hence $D+Y\sim Q+N_Q$ with $N_Q$ effective of degree $g-1$. It follows that $c\in\Theta_{a-y+u(Q)}$ for all $Q$. Step 4.1 identifies this intersection with $\tau(W^{g-2}_{y-a})$. Conversely $W^r_{a+x}$ lies in both required loci by adding $X$ and $Y$. Also $W^{g-2}+x\subset\Theta$; reflecting and translating with step 2.1 gives $\tau(W^{g-2}_{y-a})\subset\Theta_b$. Intersecting with $W^{r+1}_a$ proves the reverse inclusion and completes the formula. [F1, F2, F4, step 2.1, step 3.1, step 4.1, algebra] ∎

## Remarks

All reflections above concern effective divisors or reduced loci; inverse line bundles are written only with an explicit tensor exponent. The argument is at its declared AC/DC scope and makes no assertion about the unqualified choice scope of a later Torelli consumer.
