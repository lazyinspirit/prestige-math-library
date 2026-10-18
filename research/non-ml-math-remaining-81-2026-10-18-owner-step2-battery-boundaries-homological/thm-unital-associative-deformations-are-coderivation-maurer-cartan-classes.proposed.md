---
id: thm-unital-associative-deformations-are-coderivation-maurer-cartan-classes
kind: theorem
title: "Fixed-unit associative deformations are normalized coderivation Maurer–Cartan classes"
status: draft
dependency_level: 11
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
deps:
  - def-coefficient-complete-codifferential-deformation
  - lem-complete-coderivations-form-a-filtered-differential-graded-lie-algebra
  - lem-noncommutative-filtered-exponential-and-logarithm
  - thm-coalgebra-automorphism-logarithms-are-coderivations
  - thm-maurer-cartan-elements-classify-fixed-carrier-codifferential-deformations
  - def-formal-associative-deformation-of-a-commutative-algebra
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
sources:
  references:
    - title: "Marco Manetti, Deformation theory via differential graded Lie algebras, §1"
      url: "https://arxiv.org/pdf/math/0507284"
    - title: "Jean-Louis Loday and Bruno Vallette, Algebraic Operads, §§1.2, 2.2, 10.1"
      url: "https://www.math.univ-paris13.fr/~vallette/Operads.pdf"
---

## Statement

Let $(A,\mu,e)$ be any unital associative $k$-algebra concentrated in degree zero, with no finite-dimensionality hypothesis. Let $B,I$ satisfy [[def-coefficient-complete-codifferential-deformation]], put $M=\varprojlim_n A\otimes_k B/I^n$, and take $C=T^c(A[1])$. Let $s:A\to A[1]$ have degree $-1$. The binary Taylor map

$$b_\mu(sa,sb)=s\mu(a,b)$$

extends to a degree-one square-zero coderivation $D$ of $C_B$. Let $\mathfrak n\subseteq\mathfrak l$ be the coderivations whose Taylor maps vanish whenever one unsuspended argument is $e$. Then $(F^1\mathfrak n,[D,-],[-,-])$ is a complete filtered differential graded Lie algebra.

Its Maurer–Cartan elements are exactly the continuous $B$-bilinear associative products $\mu+\alpha$ on $M$, reducing to $\mu$ modulo $I$, with the same specified unit $e$. Its gauge classes are exactly their classes under all continuous $B$-linear changes of variables $g\equiv\operatorname{id}\pmod I$ satisfying $g(e)=e$, acting by

$$m'(a,b)=g\bigl(m(g^{-1}a,g^{-1}b)\bigr).$$

For $B=k[\![h]\!]$, $I=(h)$, this includes the formal products $a\star b=ab+\sum_{j\ge1}h^jB_j(a,b)$ with $B_j(e,a)=B_j(a,e)=0$ over any field $k$. When $k=\mathbb R$ and $(A,\mu)$ is commutative, these are precisely the deformations of [[def-formal-associative-deformation-of-a-commutative-algebra]] with the same fixed unit. No commutativity is required of the deformed products in the general theorem.

The exact extension to a graded product of degree zero, with the same cohomological suspension, is $b_\mu(sa,sb)=(-1)^{|a|}s\mu(a,b)$. The statement about strict product classes above concerns ordinary degree-zero $A$; for graded $A$ higher Taylor components can have degree zero and strict changes of variables require the unary subgroup.

## Facts & Assumptions

**Given:** The unital associative algebra, coefficient-complete carrier, and specified unit in the statement.

[F1] [[def-coefficient-complete-codifferential-deformation]] specifies the coefficient-completed tensor carrier, completed tensor powers, continuous coderivations, and allowed equivalences.

[F2] [[lem-complete-coderivations-form-a-filtered-differential-graded-lie-algebra]] proves commutator closure, the differential identities for square-zero $D$, and completeness of closed filtered coderivation subspaces.

[F3] [[lem-noncommutative-filtered-exponential-and-logarithm]] proves the inverse convergent noncommutative exponential/logarithm series and conjugation formula.

[F4] [[thm-coalgebra-automorphism-logarithms-are-coderivations]] proves that exponentiating a positive-order degree-zero coderivation gives a coalgebra automorphism and that all allowed automorphisms have coderivation logarithms.

[F5] [[thm-maurer-cartan-elements-classify-fixed-carrier-codifferential-deformations]] proves the complete variable-parameter gauge-flow/conjugation correspondence in both directions.

[F6] [[def-formal-associative-deformation-of-a-commutative-algebra]] specifies formal associative products only for a commutative unital real algebra, using real-bilinear coefficient maps and coefficientwise fixed-unit normalization.

## Proof

1.1 Put $V_B=\varprojlim_n(A[1]\otimes_k B/I^n)$ and $V_B^{\widehat\otimes r}=\varprojlim_n((A[1])^{\otimes r}\otimes_k B/I^n)$. A continuous homogeneous positive-arity Taylor map $f:V_B^{\widehat\otimes r}\to V_B$ of degree $u$ extends by inserting $f$ in every consecutive block of a word, with sign $(-1)^{u(|v_1|+\cdots+|v_{i-1}|)}$ for a block starting at $i$. Each word has only finitely many such blocks. Splitting the output word shows the coderivation equation: the replaced block lies entirely on one side of a coproduct split, and its insertion sign agrees with that side's graded tensor action. Thus these formulas define the coderivation and extend continuously through coefficient completion. Conversely, applying the iterated reduced coproduct and projecting every factor to length one expresses the length-$j$ component of a coderivation as the sum with its length-one projection on one of the $j$ input factors. Its other components are the untouched factors. This follows by iterating the coderivation equation. It determines every length component uniquely, and proves there is no output of length greater than the input length because all $j$ factors must be nonempty. The argument holds at each coefficient quotient and then in the limit. Thus these Taylor maps give every coaugmented counital coderivation uniquely. [F1, given, construct, algebra]

2.1 For clarity first allow graded $A$ and a degree-zero product. With $|sa|=|a|-1$, the binary map $b_\mu(sa,sb)=(-1)^{|a|}s\mu(a,b)$ has degree one and equals $-s\mu(s^{-1}\otimes s^{-1})$, since the tensor-map sign on $(sa,sb)$ is $(-1)^{|a|-1}$. Its insertion extension from step 1.1 is therefore precisely fixed, including signs. Its square is a coderivation because $b_\mu^2=[b_\mu,b_\mu]/2$ and coderivations are closed under graded commutators by [[lem-complete-coderivations-form-a-filtered-differential-graded-lie-algebra]]. Its only possibly nonzero Taylor projection has arity three and is $(-1)^{|b|}s(\mu(\mu(a,b),c)-\mu(a,\mu(b,c)))$. Indeed the first association has sign $(-1)^{|a|+|a|+|b|}$, and the second has sign $(-1)^{|a|-1+|b|+|a|}$. Thus its square is zero exactly when the product is associative. [F2, step 1.1, algebra]

3.1 Return to degree-zero $A$, so $A[1]$ has degree $-1$ and the displayed binary sign is $+1$. A Taylor map of degree $u$ from arity $r$ to length one can be nonzero only when $-r+u=-1$, namely $u=r-1$. Thus every degree-one coderivation is binary and every degree-zero coderivation is unary. Step 2.1 proves that $D=b_\mu$ is square-zero, and the same computation proves that a degree-one $R=b_\alpha$ satisfies $(D+R)^2=0$ exactly when $\mu+\alpha$ is associative. A continuous bilinear map is understood on $M\widehat\otimes_B M=\varprojlim_n(A^{\otimes2}\otimes_k B/I^n)$; the condition $R\in F^1$ says its coefficient image lies in $F^1M$. No naive algebraic tensor of a Hom space with $I$ is used. [F1, step 1.1, step 2.1, algebra]

4.1 For an ordinary $r$-cochain $f$, denote the Taylor coderivation with projection $q_f(sa_1\otimes\cdots\otimes sa_r)=sf(a_1,\ldots,a_r)$ by $q_f$; it has degree $r-1$. Call $f$ normalized when any argument $e$ makes it zero. A Taylor insertion contributing to $q_fq_g$ has the form $f(a_1,\ldots,g(a_i,\ldots,a_{i+t-1}),\ldots,a_{r+t-1})$, up to its specified sign. If a unit argument lies inside the inserted block, $g$ vanishes; if outside, a remaining argument of $f$ is the unit and $f$ vanishes. Thus every insertion of normalized cochains is normalized separately, and so are their commutators. Evaluation with any input fixed to $e$ is a closed continuous condition. Hence $\mathfrak n$ is a closed graded Lie subalgebra with the inherited additive filtration bound. [step 1.1, step 3.1, algebra]

4.2 A degree-zero coalgebra map $G$ on this carrier is determined by its length-one projection, and that projection can be nonzero only on arity one, since all inputs of arity $r$ have degree $-r$ and $B$ has degree zero. To justify the determination explicitly, apply the iterated coproduct of $G$ and project its $j$ outputs to length one; the resulting length-$j$ component is the $j$-fold tensor of the length-one projection applied to the iterated coproduct of the input. Coaugmentation and counit fix the length-zero part. Hence $G=T^c(g)$ for the unary map $g:M\to M$; it is an allowed automorphism exactly when $g$ is continuous, invertible, and congruent to the identity modulo $I$. Conversely that tensor extension is a coalgebra automorphism by deconcatenation, with inverse $T^c(g^{-1})$. [step 1.1, step 3.1, algebra]

5.1 Although $b_\mu$ is not normalized, its commutator preserves normalization. Write the usual Hochschild differential as $(\delta_\mu f)(a_1,\ldots,a_{r+1})=a_1f(a_2,\ldots,a_{r+1})+\sum_{i=1}^r(-1)^if(a_1,\ldots,a_ia_{i+1},\ldots,a_{r+1})+(-1)^{r+1}f(a_1,\ldots,a_r)a_{r+1}$. The insertion convention gives exactly $\pi_1[b_\mu,q_f](sa_1,\ldots,sa_{r+1})=(-1)^{r-1}s(\delta_\mu f)(a_1,\ldots,a_{r+1})$. Indeed the left outer product has coefficient $(-1)^{r-1}$, from moving $q_f$ past $sa_1$; the right outer product has coefficient $+1$; and the $i$-th adjacent multiplication term in $-(-1)^{r-1}q_fb_\mu$ has coefficient $(-1)^{r+i-1}$. These are exactly the asserted common sign times the Hochschild coefficients. [step 1.1, step 4.1, algebra]

5.2 A degree-zero $X\in F^1\mathfrak n$ is $q_\xi$ for a continuous unary $\xi$ with $\xi(e)=0$. Since $\xi^j(e)=0$ for all $j\ge1$, $g=\exp\xi$ fixes $e$. Conversely if $g\equiv\operatorname{id}\pmod I$ fixes $e$, then $(g-\operatorname{id})(e)=0$ and every positive power does too, so $\log(g)(e)=0$. Both series converge by [[lem-noncommutative-filtered-exponential-and-logarithm]], applied to the unary complete endomorphism algebra or to length one in $C_B$. Also $\exp(q_\xi)=T^c(\exp\xi)$: the left side is a coalgebra map by [[thm-coalgebra-automorphism-logarithms-are-coderivations]], has unary projection $\exp\xi$, and is determined by that projection by step 4.2. Applying the inverse logarithm proves $\log(T^c(g))=q_{\log(g)}$. Consequently exponentials of $F^1\mathfrak n^0$ give exactly all the required unit-preserving changes of variables, including the reverse implication that $\exp\xi(e)=e$ forces $\xi(e)=0$. [F3, F4, step 4.2, algebra]

6.1 If the unit occurs at an interior position $2\le j\le r$, the adjacent multiplication terms $i=j-1$ and $i=j$ in $\delta_\mu f$ have identical remaining arguments and opposite signs; every other term retains the unit inside $f$ and vanishes. If $j=1$, the first outer product term cancels the $i=1$ multiplication term, using $ef=f$. If $j=r+1$, the $i=r$ multiplication term cancels the last outer product term, using $fe=f$. In both endpoint cases all remaining terms vanish by normalization. These arguments also include $r=1$, where only the endpoint cases occur. Thus $\delta_\mu$ preserves normalization and $[D,\mathfrak n]\subseteq\mathfrak n$. Closedness in step 4.1 and [[lem-complete-coderivations-form-a-filtered-differential-graded-lie-algebra]] now give a degreewise complete filtered differential graded Lie algebra $F^1\mathfrak n$. [F2, step 4.1, step 5.1, algebra]

7.1 By the direct identity $(D+R)^2=[D,R]+[R,R]/2$ and the preceding binary degree and associativity computations, its Maurer–Cartan elements are exactly associative products $\mu+\alpha$ with the specified reduction and with $\alpha$ normalized. Since $\mu(e,a)=a=\mu(a,e)$, normalization is equivalent to $(\mu+\alpha)(e,a)=a=(\mu+\alpha)(a,e)$. Conversely any continuous fixed-unit product with this reduction has such a normalized difference $\alpha$. Hence the claimed object correspondence holds in both directions. In particular at arity two the differential sign is $\pi_1[D,b_\alpha]=-s\delta_\mu\alpha$, while $\pi_1[b_\alpha,b_\alpha]/2=s(\alpha(\alpha(a,b),c)-\alpha(a,\alpha(b,c)))$, so its suspended Maurer–Cartan equation is exactly the expanded associator, with no implicit sign convention. [step 2.1, step 3.1, step 5.1, step 6.1, algebra]

8.1 On binary Taylor projections, conjugation by $G=T^c(g)$ gives $b_{m'}$ with $m'(a,b)=g(m(g^{-1}a,g^{-1}b))$. If $m$ has unit $e$ and $g(e)=e$, then $m'(e,a)=a=m'(a,e)$; reduction modulo $I$ remains $\mu$. Thus the full subgroup just identified acts on exactly the fixed-unit products in step 7.1, by the stated ordinary transport formula. [step 7.1, step 4.2, step 5.2, algebra]

9.1 The gauge and conjugation proof in [[thm-maurer-cartan-elements-classify-fixed-carrier-codifferential-deformations]] restricts to this normalized subalgebra. In detail its variable unary parameter $\xi(t)$ satisfies $\xi(t)e=0$, and its solution $g'=\xi(t)g$, $g(0)=\operatorname{id}$ has $(g(e)-e)'=\xi(t)(g(e)-e)$ with zero initial value. The same coefficient-order integral induction proves $g(e)=e$. Hence every normalized gauge path has an actual unit-preserving endpoint automorphism. Conversely any allowed unit-preserving $g$ has normalized $\log(g)$ by step 5.2, and $\exp(t\log(g))$ fixes $e$ and gives a normalized gauge path. Therefore normalized gauge equivalence is precisely the entire fixed-unit change-of-variables equivalence, rather than merely the unrestricted codifferential equivalence. [F5, step 6.1, step 5.2, step 8.1, algebra]

10.1 Finally for $B=k[\![h]\!]$, a continuous coefficient-complete bilinear map is uniquely its sequence of coefficient maps $B_j:A\otimes A\to A$: apply it to constant inputs and expand each output in $A[\![h]\!]$, then use $k[\![h]\!]$-linearity and continuity. Every sequence conversely defines such a map because only finitely many coefficients contribute modulo $h^n$. Reduction fixes the zero coefficient to $\mu$, and normalization is coefficientwise $B_j(e,a)=B_j(a,e)=0$. Thus step 7.1's object bijection and step 9.1's full equivalence correspondence apply to these formal products over every field $k$. When $k=\mathbb R$ and $A$ is commutative, the coefficients are exactly the real-bilinear maps in [F6], the coefficientwise Cauchy sums are finite at every $\hbar$-order, and the fixed-unit normalization agrees. This is the stated supplier specialization; no additional condition on the general theorem is imported. The any-field assertion about formal products and strict coordinate changes also has a direct argument independent of the characteristic-zero exponential and logarithm: expanding the consecutive-insertion square of the binary suspended product $b_m$ cancels the disjoint insertions in pairs, leaving exactly the signed associator. Thus $b_m^2=0$ is equivalent to associativity over every field, including characteristic two, without dividing by $2$. The degree argument in step 3.1 and deconcatenation in step 4.2 identify strict degree-zero coalgebra changes with $T^c(g)$, and step 8.1 computes their transport action without integer denominators. These product and strict-coordinate-change assertions therefore extend to any field. Their identification with differential graded Lie Maurer–Cartan and exponential gauge classes retains the characteristic-zero hypothesis of [F1], under which the required halves, factorials and logarithmic denominators are defined. [F1, F6, step 2.1, step 3.1, step 4.2, step 7.1, step 8.1, step 9.1, construct, algebra] ∎
