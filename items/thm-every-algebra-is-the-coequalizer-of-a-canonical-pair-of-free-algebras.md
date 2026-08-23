---
id: thm-every-algebra-is-the-coequalizer-of-a-canonical-pair-of-free-algebras
kind: theorem
title: "Every algebra is the coequalizer of its canonical pair of free algebras"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-monad, def-t-algebra-and-algebra-homomorphism, def-eilenberg-moore-category, def-free-t-algebra, def-equalizers-and-coequalizers]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + claude-opus-5[1m]"
    verdict: pass
    date: 2026-08-23
sources:
  scraped: []
  references:
    - title: "E. Riehl, Category Theory in Context, 2nd ed., Proposition 5.4.2"
      url: "https://emilyriehl.github.io/files/context.pdf"
pipeline_run: null
---

## Statement

Let $(T,\eta,\mu)$ be a monad on $\mathcal C$ and let $(A,a)$ be a $T$-algebra. In the Eilenberg–Moore category $\mathcal C^T$, the diagram

$$ (T^2A,\mu_{TA})\mathrel{\substack{\xrightarrow{T(a)}\\[-3pt]\xrightarrow[\mu_A]{}}}(TA,\mu_A)\xrightarrow{a}(A,a) $$

is a coequalizer. Thus every $T$-algebra is the coequalizer in $\mathcal C^T$ of the canonical pair of free algebras.

## Facts & Assumptions

**Given:** A monad $(T,\eta,\mu)$ and a $T$-algebra $(A,a)$ in the Eilenberg–Moore category ([[def-monad]], [[def-eilenberg-moore-category]]).

[L1] A $T$-algebra is an object $A$ with a morphism $a:TA\to A$ satisfying $a\eta_A=1_A$ and $aT(a)=a\mu_A$; a morphism $r:(A,a)\to(B,b)$ satisfies $ra=bT(r)$ ([[def-t-algebra-and-algebra-homomorphism]]).

[L2] The free $T$-algebra on $A$ is $(TA,\mu_A)$, and $T(f)$ is an algebra homomorphism between free algebras for every $f$ ([[def-free-t-algebra]]).

[L3] A coequalizer of $f,g$ is a morphism coequalizing them through which every other coequalizing morphism factors uniquely ([[def-equalizers-and-coequalizers]]).

## Proof

**Proof technique:** direct.

1.1 By [L2], $T(a):(T^2A,\mu_{TA})\to(TA,\mu_A)$ is an algebra homomorphism. The monad associativity equation says that $\mu_A:(T^2A,\mu_{TA})\to(TA,\mu_A)$ is also an algebra homomorphism. [L1, L2, algebra]

2.1 The structure map $a:(TA,\mu_A)\to(A,a)$ is an algebra homomorphism by the algebra associativity law, and that same law gives $aT(a)=a\mu_A$, so $a$ coequalizes the canonical pair. [step 1.1, L1]

3.1 Let $r:(TA,\mu_A)\to(B,b)$ be an algebra homomorphism with $rT(a)=r\mu_A$. Define $\bar r:=r\eta_A:A\to B$. Naturality of $\eta$ and the monad unit law give $\bar r a=r\eta_Aa=rT(a)\eta_{TA}=r\mu_A\eta_{TA}=r$. [step 2.1, L1, construct]

4.1 Since $r$ is an algebra homomorphism, $r\mu_A=bT(r)$. Hence $bT(\bar r)=bT(r)T(\eta_A)=r\mu_AT(\eta_A)=r=\bar r a$, so $\bar r$ is an algebra homomorphism. [step 3.1, L1, algebra]

5.1 If $c:(A,a)\to(B,b)$ satisfies $ca=r$, then $c=ca\eta_A=r\eta_A=\bar r$ by the algebra unit law. Therefore $a$ has the universal property in [L3], including for initial or degenerate algebra objects, and is the claimed coequalizer. [step 3.1, step 4.1, L1, L3] ∎
