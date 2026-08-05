---
id: fs-lindelofness-is-productive
kind: false-statement
title: "Assuming countable choice, refuted: Lindelöfness is productive"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-compactness-variants, def-product-topology, def-interval, thm-basis-criterion, thm-rationals-countable, thm-r-uncountable, lem-rat-embeds-dense, lem-countable-iff-surjection-from-n, def-countable-choice]
aliases: []
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-31
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "UCR General Topology Notes"
      url: "https://math.ucr.edu/~res/math205C-2016/gentop-notes.pdf"
    - title: "Sorgenfrey plane (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Sorgenfrey_plane"
    - title: "Lower limit topology (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Lower_limit_topology"
pipeline_run: null
---
## Statement
Assuming countable choice, products of Lindelöf spaces are Lindelöf.
## Facts & Assumptions

**Given:** The lower-limit line $S$, with basis $[a,b)$ for $a<b$, and its product $S^2$.

[L1] A basis characterises its open sets locally, and the products of basic open sets form a basis for the product topology ([[thm-basis-criterion]], [[def-product-topology]]).

[L2] The rationals are at most countable and dense in the real line, the real line is uncountable, and a set injecting into an at most countable set is at most countable ([[thm-rationals-countable]], [[lem-rat-embeds-dense]], [[thm-r-uncountable]], [[lem-countable-iff-surjection-from-n]]).

[A1] Countable choice selects from every nonempty family indexed by an at most countable set ([[def-countable-choice]]).

[L3] Lindelöfness means that every open cover has an at most countable subcover ([[def-compactness-variants]]).
## Refutation

**Proof technique:** direct.

1.1 For an open cover $\mathcal U$ of $S$, let $\mathcal D$ be all basic intervals $[a,b)$ lying in members of $\mathcal U$, and put $C=\bigcup\{(a,b):[a,b)\in\mathcal D\}$. For every rational pair $p<q$ for which $(p,q)\subseteq(a,b)$ for some $[a,b)\in\mathcal D$, use [A1] to select one such member of $\mathcal D$. The selected family is at most countable and covers $C$: every point of an interval $(a,b)$ lies in some rational interval $(p,q)\subseteq(a,b)$. [L1, L2, A1]

1.2 The antidiagonal $A=\{(x,-x):x\in\mathbb R\}$ is uncountable and discrete in $S^2$, because $[x,x+1)\times[-x,-x+1)$ meets $A$ only in $(x,-x)$. [L1, L2]

1.3 The antidiagonal is closed: a point $(u,v)$ with $u+v\ne0$ has a basic rectangle avoiding $A$, using $[u,u+1)\times[v,v+1)$ when $u+v>0$ and sufficiently short intervals ending before the sum reaches $0$ when $u+v<0$. [L1]

2.1 Fix an enumeration of $\mathbb Q$. If $x\notin C$, some member of $\mathcal D$ containing $x$ must have left endpoint exactly $x$; otherwise $x$ would lie in its ordinary interior and hence in $C$. Let $r_x$ be the first rational in the fixed enumeration satisfying $x<r_x$ and $[x,r_x)\in\mathcal D$; such a rational exists by [L2]. If $x<y$ and $r_x=r_y$, then $y\in(x,r_x)\subseteq C$, a contradiction. Thus $x\mapsto r_x$ injects $\mathbb R\setminus C$ into $\mathbb Q$, so $\mathbb R\setminus C$ is at most countable. [step 1.1, L1, L2]

2.2 The open cover consisting of $S^2\setminus A$ and one isolating basic rectangle for each point of $A$ has no at most countable subcover, so $S^2$ is not Lindelöf. [step 1.2, step 1.3, L3]

3.1 The selected basic intervals from step 1.1 together with the $[x,r_x)$ from step 2.1 form an at most countable basic cover of $S$. Using [A1], select for each of them a containing member of $\mathcal U$. The result is an at most countable subcover, so $S$ is Lindelöf. [step 1.1, step 2.1, A1, L3]

4.1 Thus the Lindelöf space $S$ has a non-Lindelöf square, refuting productivity of Lindelöfness. [step 3.1, step 2.2] ∎
