---
id: lem-choice-free-finite-ax-sen-approximation
kind: lemma
title: Finite Ax–Sen approximation without Choice
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 4
deps:
  - thm-p-adic-digit-expansion
  - cor-zp-is-the-valuation-ring-of-qp
  - thm-p-adic-completion-is-a-field
  - def-field-of-p-adic-numbers
  - thm-monic-polynomial-division
  - thm-binomial-closed-formula
  - thm-embeddings-of-a-simple-algebraic-extension-correspond-to-distinct-roots
  - def-p-adic-absolute-value-on-the-rationals
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Jean-Marc Fontaine and Yi Ouyang, Theory of p-adic Galois Representations"
      url: "https://www.imo.universite-paris-saclay.fr/~fontaine/galoisrep.pdf"
      locator: "Section3.1.2, Proposition3.3 and Lemma3.5, printed pages40–42; finite derivative-induction proof following Ax"
verification: {}
---

## Statement

Let $p$ be prime and let $F/\mathbb Q_p$ be a GIVEN algebraic closure with an absolute value extending $|\cdot|_p$. Normalize $v(p)=1$. Every finite intermediate field $M/\mathbb Q_p$ is complete for its inherited valuation, and every $\mathbb Q_p$-embedding between such finite subfields is isometric.

For a finite intermediate field $E$ and $\alpha\in F$, let $d=[E(\alpha):E]$, let $\Delta_E(\alpha)$ be the minimum of $v(\alpha'-\alpha)$ over its $E$-conjugates, and set
$$\eta_p(d)=\sum_{i=1}^{\lfloor\log_p d\rfloor}\frac1{p^i-p^{i-1}}.$$
An empty sum is zero. There exists $a\in E$ such that
$$v(\alpha-a)\ge\Delta_E(\alpha)-\eta_p(d).$$
In particular, if $\alpha\notin E$, then
$$v(\alpha-a)>\Delta_E(\alpha)-\frac{p}{(p-1)^2}.$$
When $\alpha\in E$, take $a=\alpha$ and interpret the first inequality in the extended real numbers. These assertions require no Choice axiom.

## Facts & Assumptions

**Given:** The valued algebraic closure and the finite intermediate fields and algebraic element. No algebraic closure or valuation extension is constructed. All embedding extensions used below adjoin only finitely many specified algebraic elements.

[F1] Every $p$-adic integer has its unique expansion with digits in $\{0,\ldots,p-1\}$, and $\mathbb Z_p$ is the closed unit ball. [[thm-p-adic-digit-expansion]] [[cor-zp-is-the-valuation-ring-of-qp]]

[F2] The $p$-adic field is complete without Choice and has its named dense rational embedding. [[thm-p-adic-completion-is-a-field]] [[def-field-of-p-adic-numbers]]

[F3] Monic polynomial division holds over a field. [[thm-monic-polynomial-division]]

[F4] The usual integral factorial formula holds for binomial coefficients. [[thm-binomial-closed-formula]]

[F5] A chosen conjugate root defines the corresponding simple-field embedding. [[thm-embeddings-of-a-simple-algebraic-extension-correspond-to-distinct-roots]]

[F6] The rational valuation $v_p$ gives the rational $p$-adic absolute value, with $v_p(p)=1$. [[def-p-adic-absolute-value-on-the-rationals]]

## Proof

1.1 For each finite $r$, the cube $\mathbb Z_p^r$ is compact without Choice. Indeed, an open cover with no finite subcover makes the entire cube a bad digit cylinder, where bad means not finitely coverable. A bad cylinder has a bad child among its finitely many one-digit refinements; otherwise finitely many finite subcovers would give a finite cover of the parent. Order the finite digit alphabet $\{0,\ldots,p-1\}^r$ lexicographically and always take the least bad child. This is recursion of a specified function, so it gives a nested digit path without any choices of cover members. By [F1] its coordinates define a point of the cube. One member of the original cover contains that point, hence contains a sufficiently fine digit cylinder around it, contradicting badness of the chosen cylinder. The case $r=0$ is a singleton. [F1, given, construct, algebra]

2.1 Choose one finite $\mathbb Q_p$-basis $e_1,\ldots,e_r$ of $M$. The map $T:\mathbb Q_p^r\to M$, $T(c)=\sum c_ie_i$, satisfies $|T(c)|\le C\max_i|c_i|$ for $C=\max_i|e_i|$. On the coordinate unit sphere $\max_i|c_i|=1$, which is a closed subset of the compact cube in step 1.1, the continuous function $|T(c)|$ is positive. The open sets $|T(c)|>1/n$ cover that sphere. A finite subcover gives a single positive lower bound $c$ there. Scaling by a power of $p$, using the discrete values of $\mathbb Q_p$ in [F1] and [F6], proves $c\max_i|c_i|\le|T(c)|$ for every coordinate vector, as well as the upper bound. Thus the inherited metric is equivalent to the coordinate maximum metric. [F1, F6, step 1.1, construct, algebra]

3.1 A Cauchy sequence in $M$ has Cauchy coordinate sequences by step 2.1. Their finitely many unique limits exist by [F2], proving completeness of $M$. If $\sigma:M\to M'$ is a $\mathbb Q_p$-embedding between finite subfields, its finite coordinate matrix and the two norm bounds give a constant $C_\sigma$ with $|\sigma x|\le C_\sigma|x|$ for all $x$. Apply this to $x^n$ and take $n$th roots to get $|\sigma x|\le|x|$; apply the same argument to the inverse onto the image to obtain equality. Hence all such embeddings are isometric. An embedding of $E(\beta)$ into $F$ extends across one more algebraic element $\alpha$: transport its monic minimal polynomial through the embedding, take one root in the GIVEN algebraically closed field $F$, and apply [F5]. This is a finite extension step, not an invocation of an infinite embedding-extension theorem. [F2, F5, step 2.1, construct, algebra]

4.1 Suppose $R(T)=\prod_{i=1}^d(T-\lambda_i)=\sum_{i=0}^d b_iT^i$ is monic and every $v(\lambda_i)\ge s$. Then $v(b_i)\ge(d-i)s$, by the finite elementary-symmetric formulas. For $0<m<d$, the polynomial $R^{(m)}/m!$ has degree $d-m$, leading coefficient $\binom dm$, and constant coefficient $b_m$. If $b_m=0$, take its root $\mu=0$. Otherwise, factor it in $F$ and compare constant and leading coefficients: the sum of the $d-m$ root valuations is $v(b_m)-v(\binom dm)$. At least one root $\mu$ therefore satisfies $v(\mu)\ge s-v(\binom dm)/(d-m)$. All factorizations and root selections here are finite. The derivative is nonzero in characteristic zero; its factorization follows by repeated linear division in [F3]. [F3, F4, step 3.1, construct, algebra]

5.1 To choose $m$ in step 4.1, write a non-power $d=p^s n$, with $p\nmid n$ and $n\ge2$, and take $m=p^s$. Then $v_p(\binom dm)=0$. If $d=p^{s+1}$, take $m=p^s$ and get $v_p(\binom dm)=1$. Indeed [F4] gives $\binom dm=(d/m)\prod_{j=1}^{m-1}(d-j)/(m-j)$. For $j<m=p^s$, both $d-j$ and $m-j$ have valuation $v_p(j)<s$, so every factor of the product has valuation zero. These assertions include $s=0$ and the empty product. Also $\eta_p$ is increasing, $\eta_p(d-m)\le\eta_p(d)$ in the non-power case, and in the power case $\eta_p(d-m)+1/(d-m)=\eta_p(d)$. The latter holds because $d-m=(p-1)p^s$ has logarithmic floor $s$. [F4, F6, step 4.1, algebra]

6.1 Prove the first approximation bound by strong induction on $d$. Degree one is immediate. Otherwise let $P$ be the monic minimal polynomial of $\alpha$ and put $s=\Delta_E(\alpha)<\infty$. Apply steps 4.1–5.1 to $R(T)=P(T+\alpha)$, whose roots are the differences of $E$-conjugates of $\alpha$ from $\alpha$. Let $\mu$ be the supplied derivative root, set $\beta=\alpha+\mu$, and write $c=v(\binom dm)/(d-m)$. Then $P^{(m)}(\beta)=0$, so $[E(\beta):E]\le d-m<d$, and $v(\beta-\alpha)\ge s-c$. For any $E$-conjugate $\beta'$ extend its embedding across $\alpha$ by the finite procedure of step 3.1. Its image $\alpha'$ is an $E$-conjugate of $\alpha$ and its image $\mu'$ has $v(\mu')=v(\mu)$ by the isometry proved there. Thus $v(\beta'-\beta)=v(\alpha'-\alpha+\mu'-\mu)\ge s-c$, proving $\Delta_E(\beta)\ge s-c$ when $\beta\notin E$. [F3, F5, step 3.1, step 4.1, step 5.1, construct, algebra]

7.1 If $\beta\in E$, take $a=\beta$. Otherwise the induction hypothesis supplies $a\in E$ with $v(\beta-a)\ge\Delta_E(\beta)-\eta_p([E(\beta):E])\ge s-c-\eta_p(d-m)$. In the non-power case $c=0$ and step 5.1 bounds the last loss by $\eta_p(d)$. In the power case $c=1/(d-m)$ and that step gives the same bound. Combining with $v(\alpha-\beta)\ge s-c$ proves $v(\alpha-a)\ge s-\eta_p(d)$. This completes the induction. There are at most $d-1$ induction reductions, so the successive finite root selections do not invoke Dependent Choice. [step 5.1, step 6.1, algebra]

8.1 The finite geometric sum defining $\eta_p(d)$ is strictly smaller than $\sum_{i\ge1}1/(p^i-p^{i-1})=p/(p-1)^2$. Therefore step 7.1 implies the stated strict uniform bound for $\alpha\notin E$; for $\alpha\in E$ the exact choice $a=\alpha$ gives the extended-real assertion. Completeness and isometry of finite intermediate fields were proved in step 3.1. Every choice in the argument was finite; the only recursive infinite path was the least-bad-digit rule of step 1.1, a specified function. No countable-choice compactness theorem, infinite algebraic-embedding extension, or externally imported Ax estimate is used. [step 1.1, step 3.1, step 7.1, algebra] ∎

## Source notes

The full proof of Fontaine–Ouyang Proposition3.3 and Lemma3.5 was read. Its derivative induction is reconstructed here with explicit finite embedding extension and valuation isometry. The induction uses the non-strict degree-dependent estimate; the final strict uniform estimate follows because the finite sum is strictly less than its infinite geometric bound. No incorrect strict degree-one or tame intermediate bound is used.

The compactness argument is a direct finite-digit-tree proof for the specified $p$-adic cube, not removal of Countable Choice from a general metric compactness theorem. The given algebraic closure and valuation remain input objects. All calculations occur in finitely generated algebraic subfields, so no global root enumeration or Galois automorphism extension is assumed.
