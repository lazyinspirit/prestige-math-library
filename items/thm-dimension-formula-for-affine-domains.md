---
id: thm-dimension-formula-for-affine-domains
kind: theorem
title: "The dimension formula for affine domains"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-axiom-of-choice, cor-noether-normalisation-module-finiteness, cor-height-preserved-under-going-down-integral-extensions, cor-finite-variable-polynomial-ring-noetherian, cor-polynomial-ring-over-a-field-is-a-pid, cor-transcendence-degree-tower-additivity, lem-gauss-lemma-over-a-ufd, lem-polynomial-ring-dimension-upper-bound, thm-quotient-is-domain-iff-ideal-prime]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "J. S. Milne, A Primer of Commutative Algebra, v4.03, §§18, 21"
      url: "https://www.jmilne.org/math/xnotes/CA.pdf"
    - title: "The Stacks Project, Section 10.116: Dimension of finite type algebras over fields, reprise"
      url: "https://stacks.math.columbia.edu/tag/07NB"
    - title: "Melvin Hochster, Dimension theory and systems of parameters"
      url: "https://sites.lsa.umich.edu/hochster/wp-content/uploads/sites/1337/2026/04/Dim.pdf"
pipeline_run: null
verification:
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-24'
    scope: Bounded mathematical repair review recorded in /home/lazyinspirit/Projects/prestige-math-library/research/ap-131-sol-repair/agent-03-height-receipts.jsonl.
      Local checks and any separate second-reader evidence are recorded in the run
      report; this is not an independent judge verdict or whole-library certification.
    delegated_by: user
---


## Statement

Assume the Axiom of Choice. Let $k$ be a field, let $A$ be a finite-type $k$-domain, and let $\mathfrak p\in\operatorname{Spec}(A)$. Then
$$ \operatorname{ht}(\mathfrak p)+\operatorname{trdeg}_k\operatorname{Frac}(A/\mathfrak p)=\operatorname{trdeg}_k\operatorname{Frac}(A). $$

## Facts & Assumptions

**Given:** The Axiom of Choice ([[def-axiom-of-choice]]), a field $k$, a finite-type $k$-domain $A$, and a prime ideal $\mathfrak p\subset A$.

[L1] Under Choice, if $C$ is Noetherian and $Q\subset C[x]$ lies over $q\subset C$ of finite height, then $\operatorname{ht}Q=\operatorname{ht}q$ when $Q=qC[x]$, and $\operatorname{ht}Q=\operatorname{ht}q+1$ otherwise ([[lem-polynomial-ring-dimension-upper-bound]]). Finite polynomial rings over fields are Noetherian ([[cor-finite-variable-polynomial-ring-noetherian]]).

[L2] Noether normalization embeds a polynomial ring $B=k[z_1,\ldots,z_d]$ in $A$ so that $A$ is module-finite over $B$ ([[cor-noether-normalisation-module-finiteness]]). Such an extension is integral. Under Choice, if the base is integrally closed, the height of a prime of $A$ equals that of its contraction to $B$ ([[cor-height-preserved-under-going-down-integral-extensions]]).

[L3] Gauss's lemma says primitive polynomials remain primitive under products and detect irreducibility over the fraction field ([[lem-gauss-lemma-over-a-ufd]]). If $R$ is a UFD, factor the content of a polynomial in $R[x]$ and factor its primitive part over $\operatorname{Frac}(R)[x]$; clearing denominators and taking primitive parts lifts those factors to $R[x]$, while Gauss's lemma makes factorization unique. Thus $R[x]$ is again a UFD, and induction makes every finite-variable polynomial ring over a field a UFD. A UFD is integrally closed: if a reduced fraction $a/b$ is integral, its monic equation multiplied by $b^n$ makes $b\mid a^n$; coprimality forces $b$ to be a unit.

[L4] A prime quotient is a domain ([[thm-quotient-is-domain-iff-ideal-prime]]); a one-variable polynomial ring over a field is a PID ([[cor-polynomial-ring-over-a-field-is-a-pid]]); transcendence degree is additive in finite field towers ([[cor-transcendence-degree-tower-additivity]]).

## Proof

**Proof technique:** direct.

1.1 First prove the formula for $B_d=k[x_1,\ldots,x_d]$ and every prime $Q\subset B_d$, by induction on $d$. When $d=0$, $B_0=k$, its only prime is $(0)$, and both sides are zero. [base, algebra]

1.2 Write $B_d=C[x_d]$ where $C=B_{d-1}$, put $q=Q\cap C$, and let $K=\operatorname{Frac}(C/q)$. By the induction hypothesis, $\operatorname{ht}q+\operatorname{trdeg}_k K=d-1$, so $q$ has finite height. The relative-height formula [L1] applies to the Noetherian ring $C$. [L1, L4, ih]

1.3 Independently, [L2] supplies algebraically independent $z_1,\ldots,z_e\in A$ such that $B=k[z_1,\ldots,z_e]\subset A$ is module-finite. Fix such a normalization. The fraction field $\operatorname{Frac}(A)$ is algebraic over $\operatorname{Frac}(B)=k(z_1,\ldots,z_e)$, so its transcendence degree over $k$ is $e$. Put $p_B=\mathfrak p\cap B$. This fixed normalization will be used after the polynomial induction. [L2, L4, given, choose]

2.1 If $Q=qC[x_d]$, then $B_d/Q=(C/q)[x_d]$ and its fraction field is $K(x_d)$. By [L1] the height remains $\operatorname{ht}q$, while the transcendence degree grows by one. If $Q\ne qC[x_d]$, its image in $K[x_d]$ is a nonzero prime. The PID $K[x_d]$ makes this image generated by an irreducible polynomial, so the image of $x_d$ in $\operatorname{Frac}(B_d/Q)$ is algebraic over $K$. Thus the quotient fraction field has the same transcendence degree as $K$, while [L1] raises the height by one. In either case the sum is $d$. [L1, L4, step 1.2, algebra]

3.1 The base and induction step prove $\operatorname{ht}Q+\operatorname{trdeg}_k\operatorname{Frac}(B_d/Q)=d$ for every $d\ge0$ and prime $Q\subset B_d$. [step 1.1, step 2.1, discharge-induction]

4.1 By [L3] the polynomial ring $B$ is integrally closed, and by step 3.1 its prime $p_B$ has finite height. Hence the Choice-qualified height-preservation result [L2] gives $\operatorname{ht}(\mathfrak p)=\operatorname{ht}(p_B)$. The quotient $A/\mathfrak p$ is a domain by [L4] and remains integral over $B/p_B$, so its fraction field is algebraic over $\operatorname{Frac}(B/p_B)$. Therefore their transcendence degrees over $k$ agree. [L2, L3, L4, step 3.1, step 1.3]

5.1 Apply step 3.1 to $p_B\subset B$ and substitute the two equalities from step 4.1 and $e=\operatorname{trdeg}_k\operatorname{Frac}(A)$ from step 1.3. This gives $\operatorname{ht}(\mathfrak p)+\operatorname{trdeg}_k\operatorname{Frac}(A/\mathfrak p)=\operatorname{trdeg}_k\operatorname{Frac}(A)$. [step 3.1, step 1.3, step 4.1] ∎
