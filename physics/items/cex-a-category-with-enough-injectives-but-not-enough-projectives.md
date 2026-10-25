---
id: cex-a-category-with-enough-injectives-but-not-enough-projectives
kind: counterexample
title: "A category with enough injectives but not enough projectives"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
deps: [def-projective-object, thm-modules-over-a-ring-form-an-abelian-category, thm-injective-modules-over-a-pid-are-exactly-divisible, lem-every-abelian-group-embeds-in-a-divisible-group]
generation:
  role: counterexample
proof_strategy: direct
verification:
  audited: 2026-09-01
  precheck: pass
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Section 19.11: Injectives in Grothendieck categories"
      url: "https://stacks.math.columbia.edu/tag/05AB"
    - title: "Romyar Sharifi, Homological Algebra"
      url: "https://math.ucla.edu/~sharifi/homalg.pdf"
pipeline_run: frontier-28
---
## Statement refuted

Enough injectives implies enough projectives.
## Facts & Assumptions

Assume the Axiom of Choice through Baer's criterion.

**Given:** The category $\mathbf{TorAb}$ of torsion abelian groups.

[L1] Modules over a ring form an abelian category ([[thm-modules-over-a-ring-form-an-abelian-category]]).

[L2] Over $\mathbb Z$, injective modules are exactly divisible groups ([[thm-injective-modules-over-a-pid-are-exactly-divisible]]).

[L3] Every abelian group embeds in a divisible group ([[lem-every-abelian-group-embeds-in-a-divisible-group]]).
## Counterexample

1.1 Kernels, images, and cokernels of homomorphisms between torsion abelian groups are torsion again, so $\mathbf{TorAb}$ is an abelian full subcategory of the abelian category from [L1]. If $A$ is torsion, [L3] embeds it into a divisible group $D$; the torsion subgroup $t(D)$ is still divisible and still contains $A$. Hence [L2] makes $t(D)$ injective, so $\mathbf{TorAb}$ has enough injectives. [L1, L2, L3, construct]

1.2 Suppose $P$ were a nonzero projective torsion group. Let $P^\times=P\setminus\{0\}$, and for each $x\in P^\times$ let $n_x$ be the order of $x$. Form $$ G:=\bigoplus_{x\in P^\times}\mathbb Z/n_x\mathbb Z $$ with generators $e_x$, and define the surjection $\pi:G\to P$ by $\pi(e_x)=x$. Projectivity gives a section $s:P\to G$. Since $s(P)\neq0$, some coordinate projection restricts to a nonzero map $P\to\mathbb Z/n_x\mathbb Z$. Let $H$ be its nonzero cyclic image, write $|H|=d>1$, and regard the resulting map $u:P\twoheadrightarrow H\cong\mathbb Z/d\mathbb Z$ as surjective. [given, construct]

2.1 Choose $x\in P$ with $u(x)=1\in\mathbb Z/d\mathbb Z$. For each $n\ge1$, projectivity lifts $u$ through the reduction $\mathbb Z/d^n\mathbb Z\twoheadrightarrow\mathbb Z/d\mathbb Z$ to a map $u_n:P\to\mathbb Z/d^n\mathbb Z$. The element $u_n(x)$ is congruent to $1$ modulo $d$, hence is relatively prime to $d$ and has order $d^n$. But the order of $u_n(x)$ must divide the fixed finite order of $x$, impossible for arbitrarily large $n$. [step 1.2, given, algebra]

3.1 Therefore $\mathbf{TorAb}$ has enough injectives but no nonzero projective objects, so it does not have enough projectives. This refutes the statement. [step 1.1, step 2.1] ∎
