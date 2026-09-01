---
id: thm-artin-rees-lemma
kind: theorem
title: "Artin-Rees controls intersections of submodules with high ideal powers"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-rees-module-finiteness-and-stable-filtrations, thm-finite-generation-and-finite-presentation-over-a-noetherian-ring]
aliases: []
proof_strategy: direct
verification:
  audited: 2026-09-01
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-01
sources:
  scraped: []
  references:
    - title: "Stacks Project, Lemma 10.51.2"
      url: "https://stacks.math.columbia.edu/tag/00IJ"
    - title: "Allen B. Altman and Steven L. Kleiman, A Term of Commutative Algebra, Lemma (20.18)"
      url: "https://web.mit.edu/18.705/www/12Nts.pdf"
---

## Statement

Let $R$ be a Noetherian commutative ring, let $I\subset R$ be an ideal, let $M$
be a finite $R$-module, and let $N\subseteq M$ be a submodule. Then there exists
an integer $c\ge0$ such that
$$
I^nM\cap N = I^{n-c}(I^cM\cap N)
$$
for every $n\ge c$.

## Facts & Assumptions

**Given:** A Noetherian commutative ring $R$, an ideal $I\subset R$, a finite
$R$-module $M$, and a submodule $N\subseteq M$.

[L1] For the $I$-adic filtration on $M$ and any induced filtration on a finite
submodule, Rees-module finiteness is equivalent to eventual stability, and the
Rees algebra is Noetherian ([[lem-rees-module-finiteness-and-stable-filtrations]]).

[L2] A finite module over a Noetherian ring is Noetherian, so each submodule of it is finite ([[thm-finite-generation-and-finite-presentation-over-a-noetherian-ring]]).

## Proof

**Proof technique:** direct.


1.1 The $I$-adic filtration on $M$ is already stable, since $I(I^nM)=I^{n+1}M$ for every $n\ge0$. Hence [L1] makes $ \mathcal R_I(M):=\bigoplus_{n\ge0} I^nMt^n $ a finite module over the Noetherian ring $\mathcal R(I)$. [L1, given]


2.1 The induced filtration $ N_n:=I^nM\cap N $ defines a graded submodule $ \mathcal R_N:=\bigoplus_{n\ge0} N_nt^n \subseteq \mathcal R_I(M). $ The module $\mathcal R_I(M)$ is finite over the Noetherian ring $\mathcal R(I)$ by step 1.1 and [L1], hence is Noetherian by [L2]. Therefore its submodule $\mathcal R_N$ is finite. [L1, L2, step 1.1, algebra]


3.1 Applying the stability direction of [L1] to the finite Rees module established in step 2.1 yields an index $c$ with $ N_n=I^{n-c}N_c\qquad (n\ge c). $ Since $N_n=I^nM\cap N$ and $N_c=I^cM\cap N$, this is exactly the displayed Artin-Rees equality. [L1, step 2.1]


4.1 Therefore the required constant $c$ exists. [step 3.1] ∎
