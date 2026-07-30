---
id: fs-separable-spaces-are-second-countable
kind: false-statement
title: "Refuted: every separable space is second countable"
status: published
origin: session
deps: [def-separable-space, def-second-countable-space, def-interval, thm-basis-criterion, thm-rationals-countable, lem-rat-embeds-dense, thm-r-uncountable, lem-countable-iff-surjection-from-n]
aliases: []
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-31
  audited: 2026-07-31
sources: {scraped: [], references: [{title: "UCR General Topology Notes", url: "https://math.ucr.edu/~res/math205C-2016/gentop-notes.pdf"}]}
pipeline_run: null
---
## Statement
Every separable space is second countable.
## Facts & Assumptions

**Given:** The lower-limit topology on $\mathbb R$, whose basic open sets are the intervals $[a,b)$ with $a<b$.

[L1] The rational numbers are at most countable and dense in the real line, and the real line is uncountable ([[thm-rationals-countable]], [[lem-rat-embeds-dense]], [[thm-r-uncountable]]).

[L2] A basis gives, for every open set $U$ and each $x\in U$, a basis member $B$ with $x\in B\subseteq U$ ([[thm-basis-criterion]]).

[L3] Separability means the existence of an at most countable dense subset, while second countability means the existence of an at most countable basis ([[def-separable-space]], [[def-second-countable-space]]).

[L4] Every nonempty at most countable set can be enumerated by a surjection from $\mathbb N$ ([[lem-countable-iff-surjection-from-n]]).
## Refutation

**Proof technique:** direct.

1.1 Every nonempty basic interval $[a,b)$ meets $\mathbb Q$, so $\mathbb Q$ is a countable dense subset of the lower-limit line. [L1, L3]

1.2 If an at most countable basis $\mathcal B$ existed, it would be nonempty, so enumerate it as $(B_n)$ by [L4]. For $x\in\mathbb R$, the set $$E_x=\{n:x\in B_n\subseteq[x,x+1)\}$$ is nonempty by [L2]; let $n(x)$ be its least member. If $x<y$ and $n(x)=n(y)$, then the common basis member contains $x$ but is contained in $[y,y+1)$, impossible. Thus $x\mapsto n(x)$ would inject $\mathbb R$ into $\mathbb N$, contradicting [L1]. [L1, L2, L4]

2.1 Step 1.1 gives separability, whereas step 1.2 rules out an at most countable basis; thus this separable space is not second countable. [step 1.1, step 1.2, L3] ∎
