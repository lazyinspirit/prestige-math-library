---
id: lem-cft-rational-current-actions-and-partial-evaluation
kind: lemma
title: Finite rational current actions and shifted partial evaluation
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-retained-2026-10-29
page: vertex-modules-intertwiners-and-fusion
dependency_level: 4
domain: mathematics
library: mathematics
proof_strategy: direct
deps:
  - def-cft-hlz-strongly-graded-generalized-module
  - def-cft-pz-compatibility-subspace
  - thm-cft-strongly-graded-contragredient-duality
dependency_roles:
  def-cft-hlz-strongly-graded-generalized-module: mathematical-premise
  def-cft-pz-compatibility-subspace: mathematical-premise
  thm-cft-strongly-graded-contragredient-duality: mathematical-premise
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Huang, Lepowsky and Zhang, Logarithmic tensor category theory, IV
      url: https://arxiv.org/pdf/1012.4198v2
      locator: Section 5, rational current actions and equations 5.85–5.87.
    - title: Huang, Lepowsky and Zhang, Logarithmic tensor category theory, V
      url: https://arxiv.org/pdf/1012.4199v3
      locator: Definition 8.7, equations 8.27–8.31 and the compatibility condition 8.44.
    - title: Huang, Lepowsky and Zhang, Logarithmic tensor category theory, VI
      url: https://arxiv.org/pdf/1012.4202v3
      locator: Lemma 9.3, equations 9.1–9.12 and equation 9.124; the analytic coefficient-extraction theorem is not imported.
verification:
  precheck: pending
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Statement

Let $V$ be a strongly $A$-graded Möbius or conformal vertex algebra and let $W_i$ be strongly $\widetilde A$-graded generalized modules. Let $S=\{s_1,\ldots,s_k\}$ be distinct complex insertion points and $R_S=\mathbb C[T,(T-s_i)^{-1}:1\le i\le k]$. Expand a rational function at a point in nonnegative powers of its local coordinate after its finite principal part; denote this expansion by $\iota_{s_i}f$. Define
$$D_S(v,f)=\sum_{i=1}^k\operatorname{Res}_y(\iota_{s_i}f)(y)Y_i(v,y),\qquad (\rho_S(v,f)\lambda)(w)=\lambda(D_S(v,f)w),$$
where the $i$th summand acts on the $i$th tensor factor. These are finite operations on each fixed input tensor and on its algebraic dual. They satisfy
$$D_S(Tv,f)=-D_S(v,f'),\qquad [D_S(u,f),D_S(v,g)]=\sum_{j\ge0}D_S(u_{(j)}v,f^{(j)}g/j!).$$
The transposes have the negative of this bracket. This is a rational-current Lie anti-action, not an assertion of vertex Jacobi on the entire algebraic dual.

For two inputs at $a,0$, set $Y'^o_a(v,x)=\sum_m\rho_{a,0}(v,T^m)x^{-m-1}$ and $Y'_a(v,x)=Y'^o_a(B(x)v,x^{-1})$, where $B(x)=e^{xL(1)}(-x^{-2})^{L(0)}$. These coincide coefficientwise with the transported residue fields. In particular
$$\bigl(\rho_{a,0}(v,T^m)\mu\bigr)(w_1,w_2)=\mu(w_1,v_{(m)}w_2)+\sum_{q\ge0}\binom mq a^{m-q}\mu(v_{(q)}w_1,w_2),$$
with a finite sum on fixed inputs.

Put $a,b,a+b\ne0$, let $\lambda\in(W_1\otimes W_2\otimes W_3)^*$ and fix $w_3$. Write $\mu=\lambda|_{w_3}$. For every $f\in R_{a,0}$, put $f_b(T)=f(T-b)$. Then the exact finite partial-evaluation identity is
$$\rho_{a,0}(v,f)\mu=\bigl(\rho_{a+b,b,0}(v,f_b)\lambda\bigr)|_{w_3}-\lambda|_{\operatorname{Res}_T(\iota_0f_b)(T)Y_3(v,T)w_3}.$$

Suppose additionally that a linear map $F:W_1\otimes W_2\otimes W_3\to\overline W_4$ has the full rational Ward identity: for every $v,f$ and $w'_4\in W'_4$, its transposed functional $\lambda_{w'_4}$ satisfies
$$\bigl(\rho_{a+b,b,0}(v,f)\lambda_{w'_4}\bigr)(w)=\left\langle w'_4,\operatorname{Res}_T(\iota_\infty f)(T)Y_4(v,T)F(w)\right\rangle.$$
The right side is interpreted by its finite restricted-dual action, not an unrestricted sum on a completed vector. This hypothesis is the complete triple Ward relation. It holds when $F$ is an actual product or iterate of two $P(z)$-intertwining maps and all its scalar projection sums converge absolutely for every fixed input and restricted-dual exterior vector. In the iterate case use the overlap $|b|>|a|>0$ for the stated nested expansion. No product-to-iterate associativity theorem is assumed in this assertion.

For $v$ of integer weight $r$, write $v_j=L(1)^jv$ and $\lambda_{q,u}(w_1,w_2)=\langle q,F(w_1,w_2,u)\rangle$. Then $g=Y'_a(v,x)\lambda_{w'_4,w_3}$ satisfies $g+H=R$ coefficientwise, where
$$H_p=\sum_{j=0}^{J}\sum_{q\ge0}\frac{(-1)^r}{j!}\binom{p+2r-j-1}{q}(-b)^{p+2r-j-q-1}\lambda_{w'_4,(v_j)_{(q)}w_3},$$
$$R=\lambda_{Y'_{W_4}(C_b(x)v,\phi_b(x))w'_4,w_3},\qquad \phi_b(x)=\frac{x}{1+bx},\qquad C_b(x)=e^{-b(1+bx)L(1)}(1+bx)^{-2L(0)}.$$
Here $H_p$ is the $x^p$ coefficient and both of its sums are finite. The series $R$ has a lower bound on its $x$ powers, uniform when $b$ varies near a fixed nonzero value and the two fixed exterior vectors vary through their finite generalized-$L(0)$ nilpotent families. The same statements hold with the first input fixed and inner positions $b,0$: the exterior correction uses $f(a+b+y)$ on input one and the full output term is $Y'_{W_4}(v,x)w'_4$, without the shifted coordinate $\phi_b$.

There is also the delta fusion identity
$$b^{-1}\delta\left(\frac{x_1-x_0}{b}\right)a^{-1}\delta\left(\frac{x_0-x_2}{a}\right)=(a+b)^{-1}\delta\left(\frac{x_1-x_2}{a+b}\right)x_0^{-1}\delta\left(\frac{x_1-b}{x_0}\right),$$
as an equality of absolutely convergent scalar coefficients when $|a+b|>|b|>|a|>0$, with the usual nonnegative-second-variable numerator expansions. It does not justify multiplying these distributions by an arbitrary untruncated partial functional; that needs the analytic coefficient bounds for $H$.

## Statement references

[[def-cft-hlz-strongly-graded-generalized-module]]

[[def-cft-pz-compatibility-subspace]]

[[thm-cft-strongly-graded-contragredient-duality]]

## Facts & Assumptions

**Given:** The strong gradings, finite local rational expansions, and the optional complete triple Ward identity stated above. No CFT-type, finite-coset or global lower-bound condition is assumed.

[F1] [[def-cft-hlz-strongly-graded-generalized-module]] supplies input module Jacobi, ordinary mode lower truncation, integral state weights, and local nilpotence of $L(1)$ on a state of fixed auxiliary degree.

[F2] [[thm-cft-strongly-graded-contragredient-duality]] supplies the restricted dual and the opposite-field transformation $B(x)$ in this strong-graded Möbius or conformal scope. Each fixed exterior vector belongs to a finite sum of finite-dimensional generalized-weight components.

[F3] [[def-cft-pz-compatibility-subspace]] gives the transported residue convention to which the mode formulas are compared. This definition is not used as a premise that all algebraic-dual vectors satisfy compatibility.

## Proof

1.1 For each local rational expansion choose its finite lowest power $q_0$. On a fixed input vector choose $q_1$ with $v_{(q)}w_i=0$ for $q\ge q_1$. Its residue therefore uses only $q_0\le q<q_1$. There are finitely many tensor factors, proving finiteness of $D_S$ and its transpose on every input. For the bracket, terms on different factors commute. On one factor substitute the input module commutator, multiply by $f(s_i+y)g(s_i+t)$ and take the two residues. The $j$th delta derivative replaces $f$ by $f^{(j)}/j!$, yielding precisely the claimed bracket. State truncation makes the $j$ sum finite; the local input bounds make its residues finite. Translation and integration by parts give $D_S(Tv,f)=-D_S(v,f')$. Transposition reverses operator order and therefore changes the commutator sign. [given, F1, algebra]

2.1 At the nonzero point $a$, $\iota_aT^m=\sum_{q\ge0}\binom mq a^{m-q}y^q$, while at zero it is $y^m$. This gives the explicit opposite-field mode formula. In the residue form, the $x^{-m-1}$ coefficient of $a^{-1}\delta((x-y)/a)$ is $\sum_{q\ge0}\binom mq a^{m-q}y^q$, using $(-1)^q\binom{q-m-1}{q}=\binom mq$. Thus the residue and mode actions agree for all integer $m$, including negative $m$. The finite state family $B(x)v=\sum_{j=0}^{J}(-1)^r x^{j-2r}v_j/j!$ proves agreement of the inverted ordinary fields as well; every fixed coefficient is a finite sum on the inputs. No claim of lower truncation on arbitrary dual vectors is needed. [F1, F2, F3, step 1.1, algebra]

2.2 At the first global insertion the shifted rational function is $f_b(a+b+y)=f(a+y)$, at the second it is $f_b(b+y)=f(y)$, and its action at zero is exactly the subtracted third-input term. Applying the definition of $D_S$ and then transposing proves the partial-evaluation identity. Every operation is finite by Step 1.1. For the reverse partial evaluation there is no coordinate shift: use the same $f$ at the two inner insertions $b,0$ and subtract its local action $f(a+b+y)$ at the fixed first insertion. [given, step 1.1, algebra]

3.1 Here is a local proof of the complete Ward relation for an actual product $F=I_1\circ(1\otimes I_2)$ at $z_1=a+b,z_2=b$. For fixed $v,w_1,w_2$ choose $N_i\ge0$ such that $v_{(q)}w_i=0$ for $q\ge N_i$, $i=1,2$, and put $P_i(T)=(T-z_i)^{N_i}$, $P=P_1P_2$. Let $Q_\infty(T)=\langle w'_4,Y_4(v,T)F(w_1,w_2,w_3)\rangle$ and $Q_0(T)=\langle w'_4,F(w_1,w_2,Y_3(v,T)w_3)\rangle$. Binary Jacobi gives current locality with the first intertwiner after multiplication by $P_1$, and with the second after multiplication by $P_2$. Commuting through both therefore gives $PQ_\infty=PQ_0=:N(T)$. This equality uses only finitely many polynomial shifts at every $T$ coefficient. Every scalar projection sum involved is an absolutely convergent product sum for a fixed modified exterior or leaf vector; a fixed current mode shifts the intermediate weight index bijectively, so those sums can be reindexed. Restricted-dual truncation bounds the highest $T$ power of $Q_\infty$, and truncation on $w_3$ bounds the lowest power of $Q_0$. Hence the common series $N(T)$ is a finite Laurent polynomial. The two series are exactly the expansions of the rational function $Q=N/P$ at infinity and zero. To identify its expansion at $z_1$, apply the full binary Jacobi identity of $I_1$ and multiply by $P$: the target and intermediate-current sides have the common numerator $N$, since the $P_2$-cleared intermediate current is already identified with the origin series by the second locality identity. Formal delta substitution for the finite Laurent polynomial $N$ makes the remaining side its local expansion at $z_1$. Thus $P\langle w'_4,I_1(Y_1(v,T-z_1)w_1\otimes I_2(w_2,w_3))\rangle=\iota_{z_1}N$. At $z_1$ the local factor $P$ is $y^{N_1}$ times a unit; the current series has a finite lowest power of $y$, so division by that factor is coefficientwise finite and injective. This proves the asserted local expansion of $Q$. For $z_2$, first use the $P_1$-cleared locality of $I_1$, then apply binary Jacobi of $I_2$ and the same division; it identifies the local expansion with the current on input two. All fixed local coefficients again have convergent scalar sums by the given product convergence. Finally, the elementary residue theorem for the rational function $f(T)Q(T)$ says that its $T^{-1}$ coefficient at infinity is the sum of its residues at the finite poles $z_1,z_2,0$. Substituting these three identified local expansions gives exactly the complete Ward relation. The residue theorem here is verified termwise on partial fractions: a term $(T-s)^{-1}$ has coefficient one at infinity and residue one at $s$, while higher inverse powers and polynomials have both total residues zero. No external associativity theorem or interchange of an infinite intermediate current expansion is used. [given, F1, F2, step 1.1, step 2.2, algebra]

3.2 Apply Step 2.2 with $f(y)=y^m$ and use the complete Ward hypothesis to replace the global rational action by its output action. Expanding $(T-b)^m$ at zero gives $\binom mq(-b)^{m-q}(v_j)_{(q)}w_3$. Inserting the state factor $(-1)^rx^{j-2r}/j!$ and the opposite-field factor $x^{m+1}$ gives $m=p+2r-j-1$, exactly the coefficient $H_p$ in the Statement. For the output put $T=x^{-1}+b$. Opposite duality makes its state factor $B(T)B(x)v$ and its coordinate $T^{-1}=\phi_b(x)$. The scaling identity $(-T^{-2})^{L(0)}e^{xL(1)}=e^{-xT^2L(1)}(-T^{-2})^{L(0)}$ shows $$B(T)B(x)=e^{(T-xT^2)L(1)}(xT)^{-2L(0)}=C_b(x).$$ Thus the claimed $R$ is exactly the output term and $g+H=R$. There are only finitely many states $v_j$. Their scalar factors $(-b)^j(1+bx)^{j-2r}/j!$ have Taylor expansions at zero, and $\phi_b=x$ times a unit. The field truncation bound on the finitely many $v_j$ and exterior nilpotent-family vectors is therefore a uniform lower bound on powers in $R$. For the reverse identity the global coordinate is unchanged, so the state and coordinate transformations cancel and the output is simply $Y'_{W_4}(v,x)w'_4$. [given, F2, step 2.1, step 2.2, algebra]

4.1 For an actual iterate $F=I^1\circ(I^2\otimes1)$, with inner position $a$ and outer position $b$, use the same $P(T)=(T-a-b)^{N_1}(T-b)^{N_2}$. In the outer binary Jacobi identity put $y=T-b$. Its local current term multiplied by $P$ is the image under $I^1$ of $(y-a)^{N_1}y^{N_2}Y_{M_2}(v,y)I^2(w_1,w_2)$. Inner current locality rewrites this as $(y-a)^{N_1}I^2(w_1,y^{N_2}Y_2(v,y)w_2)$, which is regular in $y$ because $v_{(q)}w_2=0$ for $q\ge N_2$. Its residue against the outer commutator delta is zero. Thus $PQ_\infty=PQ_0$ again. The completed inner-input passage has the following absolute justification, avoiding a fictitious bound on current modes of the completed vector: for $k\ge0$ the intertwiner commutator gives $$v_{(k)}I^2(w_1,w_2)=I^2(w_1,v_{(k)}w_2)+\sum_{j=0}^{k}\binom kj a^{k-j}I^2(v_{(j)}w_1,w_2).$$ The first tail is finite on $w_2$ and the $j$ tail is finite on $w_1$. For each remaining $j$, $$\sum_{k\ge j}\binom kj a^{k-j}(T-b)^{-k-1}=(T-b-a)^{-j-1}$$ converges normally when $|T-b|>|a|$. Its polynomial-times-geometric absolute majorant multiplies one absolutely convergent iterate projection sum with the fixed modified leaf $v_{(j)}w_1$. Consequently the joint current-index and intermediate-weight sums are absolutely convergent and may be collapsed before taking residues. The stated regularity argument therefore applies to actual coefficients. As before, the two truncation bounds make $N=PQ$ a finite Laurent polynomial. At $T=b$, the just-used inner locality identifies its local expansion with the current on $w_2$ after finite denominator clearing. At $T=a+b$, full inner Jacobi identifies the current on $w_1$; the outer Jacobi has already identified the common cleared numerator in the coordinate $y=T-b$, so its substitution is polynomial before division by the local unit. The leaf-current coefficients are actual iterate sums for fixed modified leaves and converge by assumption. Thus the local expansions at all three finite punctures are identified, and the same rational residue theorem proves the full Ward identity for the iterate. No uniform truncation on a completed inner vector and no associativity factorization is assumed. [given, F1, F2, step 1.1, step 2.2, step 3.1, algebra]

5.1 To prove delta fusion, fix a coefficient $x_1^Ax_0^Bx_2^C$. It is zero on both sides when $C<0$. When $C=0$, the left coefficient is $$b^{-A-1}a^{-B-1}\sum_{i\ge0}\binom{A+i}{i}(-a/b)^i=(a+b)^{-A-1}a^{-B-1},$$ whereas the right coefficient is $$(a+b)^{-A-B-2}\sum_{i\ge0}\binom{-B-1}{i}(-b/(a+b))^i=(a+b)^{-A-1}a^{-B-1}.$$ The stated inequalities put both binomial series inside their convergence disks. For $C\ge0$, differentiate this scalar equality $C$ times with respect to $a$ and divide by $C!$, with $b$ fixed. On the left this gives exactly the additional factor $(-1)^C\binom{B+C-i}{C}a^{-C}$; on the right it gives exactly the corresponding $x_2^C$ coefficient. The coefficient binomials are polynomial in $i$ or eventually zero, so these series and their derivatives converge normally on compact subsets of the overlap. This proves the fusion identity and its polynomial-times-geometric coefficient bounds. Applying it to $H$ still requires bounding the resulting scalar convolution; no such unrestricted multiplication follows from the identity alone. [given, algebra] ∎
