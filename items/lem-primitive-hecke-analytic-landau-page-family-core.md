---
dependency_level: 19
id: lem-primitive-hecke-analytic-landau-page-family-core
kind: lemma
title: The analytic Landau–Page family core for primitive Hecke functions
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
- lem-ray-modulus-kernel-intersection-and-primitive-conductor-uniqueness
- lem-imprimitive-hecke-logarithmic-derivative-finite-euler-control
- lem-ray-character-euler-product-positivity-inequalities
- lem-primitive-hecke-logarithmic-derivative-zero-sum-inequality
- lem-primitive-hecke-completed-function-is-entire-of-order-one
- thm-gamma-meromorphic-continuation
- cor-gamma-function-has-no-zeros
- def-axiom-of-choice
- def-countable-choice
justified_by: []
proof_strategy: direct
axiom_use: AC and Countable Choice are inherited from the exact accepted real zero-sum interface and the
  modulus/induction suppliers. No class-field existence or Stark theorem is used.
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
  - title: A. R. Weiss, The least prime ideal, §1
    url: https://gdz.sub.uni-goettingen.de/download/pdf/PPN243919689_0338/PPN243919689_0338.pdf
    locator: 'Printed58–61: primitive conductors, Euler products and Theorem1.9 formulation/sketch. The
      complete local argument below is independently reconstructed, not imported from that sketch.'
  - title: Jürgen Neukirch, Algebraic Number Theory, VII§§6–8
    url: https://web.math.ucsb.edu/~agboola/teaching/2021/fall/225A/neukirch.pdf
    locator: Ray characters, primitive induction and finite Euler comparison; actual local suppliers are
      used at their exact number-field hypotheses.
---

## Statement

Assume AC and Countable Choice. Let $K$ be a number field of degree $n$, let $Q\ge1$, $T\ge1$, and put $\mathcal L=\log(QT^n)$. Suppose $\mathcal L\ge n$. For a primitive finite-order ray-class Hecke character $\chi$ of conductor $\mathfrak f_\chi$, put $d_\chi=|d_K|N\mathfrak f_{\chi,0}$. With the absolute witnesses
$$C_0=1,\qquad c_1=\frac1{4,000,000},$$
the family of all zero occurrences of all such characters satisfying
$$d_\chi\le Q,\quad L(\rho,\chi)=0,\quad 0<\operatorname{Re}\rho<1,\quad \operatorname{Re}\rho\ge1-\frac{c_1}{\mathcal L},\quad |\operatorname{Im}\rho|\le T$$
contains at most one occurrence, counted with its function-theoretic multiplicity. If it exists, that zero is real and simple and its primitive character is real-valued. A nontrivial such real character has kernel of index two in its ray class group.

Separately, for every primitive finite-order character, all zeros of the full pole-cleared completion $\Xi_\chi(s)=[s(s-1)]^{\delta_\chi}\Lambda(s,\chi)$ lie in the OPEN strip $0<\operatorname{Re}s<1$. This boundary exclusion is a consequence proved here, not an input to the family argument. This result asserts neither existence of a quadratic class field nor Stark's exceptional-zero lower bound.

## Facts & Assumptions

**Given:** The field, family parameters, character conventions and AC/CC branch in the Statement.

[F1] On $1<\sigma\le2$, for every primitive character $\psi$ of conductor discriminant $d_\psi$,
$$D(\sigma+it,\psi)\le\delta_\psi\operatorname{Re}\frac1{\sigma+it-1}+\frac12\log(d_\psi(|t|+3)^n)+3n-\sum_{\rho=\beta+i\gamma\in\mathcal Z_\psi}\frac{\sigma-\beta}{(\sigma-\beta)^2+(t-\gamma)^2},$$
where $D=-\operatorname{Re}(L'/L)$, the sum is over ALL completed zeros with multiplicity in the CLOSED strip, and every summand is positive. [[lem-primitive-hecke-logarithmic-derivative-zero-sum-inequality]]

[F2] Primitive conductors are unique across presentations. The square's inducing conductor divides the original conductor; for two characters of conductor discriminant at most $Q$, the product's is at most $Q^2$ and their common finite modulus has norm at most $Q^2$. [[lem-ray-modulus-kernel-intersection-and-primitive-conductor-uniqueness]]

[F3] At $\sigma>1$, the absolute finite-Euler derivative correction is at most $\log N\mathfrak m_0$; for the trivial character on the real axis it is nonpositive in $D_{\mathfrak m}-D$. The common-modulus three-, two- and four-factor positivity inequalities hold. [[lem-imprimitive-hecke-logarithmic-derivative-finite-euler-control]] [[lem-ray-character-euler-product-positivity-inequalities]]

[F4] The completion is nonzero at $0,1$, all its zeros initially lie in the closed strip, and conjugation sends $\Xi_\chi$ to $\Xi_{\bar\chi}$. Thus for a real-valued character nonreal zeros occur in conjugate pairs with the same multiplicity. In the open critical strip the nonzero holomorphic gamma factors and pole-clearing factor preserve the zeros and multiplicities of $L$. [[lem-primitive-hecke-completed-function-is-entire-of-order-one]] [[thm-gamma-meromorphic-continuation]] [[cor-gamma-function-has-no-zeros]]

[A1] AC and CC retain the exact arithmetic and analytic supplier branch. [[def-axiom-of-choice]] [[def-countable-choice]]

## Proof

**Given:** The stated field and family.

1.1 Put $\alpha=1/400$, $c=1/4,000,000$, and $a_0=\alpha/\mathcal L$. If the family is empty its at-most-one assertion is immediate. For that assertion in the remaining case, a candidate exists and $|d_K|\le Q$, since every finite conductor norm is at least one. For a candidate $\rho=\beta+i\gamma$, write $u=1-\beta$, so $0\le u\le c/\mathcal L=a_0/10,000$ and $|\gamma|\le T$. All later choices $a=a_0$ or $a_0/100$ are positive and at most $1$, so $1<1+a\le2$. In particular $a_0\le a_0+u\le(101/100)a_0$. [A1, F1, F2, F4, given, choose, algebra]

2.1 Apply the three-factor inequality [F3] on the conductor modulus of $\chi$, and reduce its square to its primitive inducing character by [F2]. Its conductor discriminant is at most $Q$. With $\delta_2=1$ if $\chi^2$ is trivial and $0$ otherwise, [F1] and [F3], discarding only positive nontarget zero terms, give for $0<a\le1$ and $\sigma=1+a$, $$4\sum_{\rho'=\beta'+i\gamma'\in\mathcal Z_\chi}\frac{1+a-\beta'}{(1+a-\beta')^2+(\gamma-\gamma')^2}\le\frac3a+4\delta_\chi\frac a{a^2+\gamma^2}+\delta_2\frac a{a^2+4\gamma^2}+50\mathcal L.$$ Here is an explicit uniform remainder bound. Since $|\gamma|+3\le4T$, $2|\gamma|+3\le5T$, and $\log3,\log4,\log5<2$, the primitive remainder at $\gamma$ or $2\gamma$ is at most $\mathcal L/2+4n$. The real zeta remainder is also at most $\mathcal L/2+4n$, using $|d_K|\le Q$. Each possible finite correction for $\chi$ or its square is at most $\log N\mathfrak f_{\chi,0}\le\log Q\le\mathcal L$. Thus the weighted total is at most $3(\mathcal L/2+4n)+5(3\mathcal L/2+4n)=9\mathcal L+32n\le41\mathcal L<50\mathcal L$. The logarithmic bounds follow from $e^2>1+2+2+8/6>5$. No boundary zero has been excluded in deriving this inequality. [F1, F2, F3, F4, step 1.1, algebra]

2.2 For the trivial primitive character, positivity $D(1+a_0,1)\ge0$ and [F1] give $$\sum_{\rho\in\mathcal Z_1}\operatorname{Re}\frac1{1+a_0-\rho}\le\frac1{a_0}+\tfrac12\log|d_K|+4n\le\frac1{a_0}+5\mathcal L.$$ If $0<|\gamma|\le a_0/4$, retain the conjugate zero pair [F4] and put $b=a_0+u$. Its contribution is $$\frac{2b}{b^2+\gamma^2}\ge\frac{2}{((101/100)^2+1/16)a_0}>\frac3{2a_0}>\frac1{a_0}+5\mathcal L,$$ a contradiction. The middle strict comparison is exact rational arithmetic. [F1, F3, F4, step 1.1, algebra]

3.1 If $\chi$ is nonreal, then $\delta_\chi=\delta_2=0$: a character whose square is trivial has only values $\pm1$ and is real. Retaining the candidate zero in step 2.1 and taking $a=a_0$ gives $4/(a_0+u)\le3/a_0+50\mathcal L$. But $$\frac4{a_0+u}-\frac3{a_0}\ge\frac{97}{101a_0}>\frac9{10a_0}=360\mathcal L,$$ a contradiction. Hence every candidate character is real-valued. [F2, step 1.1, step 2.1, algebra]

4.1 Suppose $\chi$ is nontrivial real and $\gamma\ne0$. Then $\delta_\chi=0$, $\delta_2=1$, and [F4] supplies both distinct zeros $\beta\pm i\gamma$. Retain both in step 2.1. Put $b=a_0+u$ and $x=4\gamma^2$; the result is $4/b+4b/(b^2+x)\le3/a_0+a_0/(a_0^2+x)+50\mathcal L$. For $a_0\le b<2a_0$ and $x\ge0$, $$\frac{b/(b^2+x)}{a_0/(a_0^2+x)}\ge\frac{a_0}{b}\ge\frac12.$$ Thus the second zero contribution dominates the extra square-character pole term. Removing them gives the impossible inequality from step 3.1. This excludes every nonreal candidate of a nontrivial real character, including arbitrarily small nonzero ordinates. [F4, step 1.1, step 2.1, step 3.1, algebra]

5.1 For nontrivial real $\chi$, apply the two-factor positivity [F3] at real $1+a_0$ on its conductor modulus. Bound the trivial correction one-sided and the other by $\log N\mathfrak f_{\chi,0}$. The two remainders in [F1] are at most $\tfrac12\log|d_K|+4n$ and $\tfrac12\log Q+4n$, so, discarding the positive zeta zero sum, one obtains $$\sum_{\rho\in\mathcal Z_\chi}\operatorname{Re}\frac1{1+a_0-\rho}\le\frac1{a_0}+2\log Q+8n\le\frac1{a_0}+10\mathcal L.$$ Two real candidate occurrences, including a double zero, would contribute at least $2/(a_0+c/\mathcal L)$. Its excess over $1/a_0$ is at least $99/(101a_0)>360\mathcal L$, a contradiction. Together with step 4.1 this proves uniqueness and simplicity for each nontrivial real character. [F1, F2, F3, step 1.1, step 4.1, algebra]

6.1 If the trivial character instead has $|\gamma|>a_0/4$, put $a_1=a_0/100$. Then $u\le a_1/100$ and $a_1+u\le(101/100)a_1$. Apply step 2.1 with $a=a_1$ and both delta terms equal to one, retaining just the candidate zero. Since $a_1/|\gamma|<1/25$, $$\frac{4a_1}{a_1^2+\gamma^2}+\frac{a_1}{a_1^2+4\gamma^2}<\frac{17}{2500a_1}<\frac1{100a_1},$$ whereas $$\frac4{a_1+u}-\frac3{a_1}-\frac1{100a_1}\ge\frac{9599}{10100a_1}>\frac9{10a_1}>50\mathcal L.$$ This contradicts step 2.1. Equality at the height threshold was included in step 2.2, so no ordinate range is missing. Two real candidate occurrences would contradict the real-axis bound in step 2.2 by the same $2/(a_0+c/\mathcal L)$ comparison as step 5.1. Thus the trivial character also has at most one candidate, and it is real and simple. [F4, step 1.1, step 2.1, step 5.1, step 2.2, choose, algebra]

7.1 Suppose two different primitive characters have candidates. By step 3.1, step 4.1, step 5.1, step 2.2 and step 6.1, both characters are real and both zeros are real. Pull them back to their conductor lcm $\mathfrak m$. They remain distinct by [F2]. If neither is trivial, their product is nontrivial, because real characters are their own inverses. Apply four-factor positivity [F3]. Only the trivial inducing function has a pole. The product's conductor discriminant is at most $Q^2$ and $\log N\mathfrak m_0\le2\log Q$ by [F2]. Retaining both candidate zeros in [F1] and applying [F3] therefore gives $$\frac1{a_0+u_1}+\frac1{a_0+u_2}\le\frac1{a_0}+30\mathcal L.$$ Indeed the error is at most $\tfrac52\log Q+3\log N\mathfrak m_0+16n\le\tfrac{17}{2}\log Q+16n\le\tfrac{49}{2}\mathcal L<30\mathcal L$. The left side exceeds $1/a_0$ by at least $99/(101a_0)>360\mathcal L$, a contradiction. [F1, F2, F3, step 1.1, step 3.1, step 4.1, step 5.1, step 2.2, step 6.1, algebra]

8.1 If one candidate character is trivial and the other is $\chi$, the four-factor product is literally $\zeta_{K,\mathfrak m}^2L_{\mathfrak m}(s,\chi)^2$. It has TWO trivial pole contributions, and each of the two target zeros is counted TWICE. Divide its logarithmic-derivative inequality by two; this is exactly the two-factor positivity [F3] with remainder at most $2\log Q+8n\le10\mathcal L$, since the common modulus is the nontrivial character's conductor. Retaining one zero from each factor again contradicts $2/(a_0+c/\mathcal L)>1/a_0+10\mathcal L$. Same-character occurrences were already excluded in step 5.1 or step 6.1. This proves the full family assertion with multiplicity. A nontrivial real character has image $\{\pm1\}$, whose two fibers are the two kernel cosets, proving index two without a class-field-existence assertion. [F1, F2, F3, step 1.1, step 5.1, step 6.1, step 7.1, algebra]

9.1 The family conclusion of step 8.1 has been obtained without boundary exclusion. To prove the separate boundary corollary, suppose a primitive completion has a zero $1+i\gamma$. By [F4] its ordinate is nonzero. Choose $Q\ge\max(d_\chi,e^n)$ and $T\ge\max(1,|\gamma|)$, so $\mathcal L\ge n$. The actual inequalities of step 2.1, step 3.1, step 4.1, step 2.2 and step 6.1 use only $0\le u\le c/\mathcal L$ and remain valid at $u=0$. They exclude a nonreal character and every nonzero ordinate for a real character, a contradiction. This is a rerun of those inequalities at the endpoint, not an application of the strict-strip family Statement to a boundary point. Conjugate-character reflection [F4] then excludes completed zeros on $\operatorname{Re}s=0$. All zeros were initially in the closed strip by [F4], so they are now in the open strip. No Stark, class-field or boundary zero-free assertion was assumed. [F4, step 2.1, step 3.1, step 4.1, step 2.2, step 6.1, step 8.1, choose, algebra] ∎ 
