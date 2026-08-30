---
id: thm-snake-lemma-under-the-weaker-stacks-hypotheses
kind: theorem
title: "Snake lemma under the weaker Stacks hypotheses"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-snake-data,
       def-kernels-and-cokernels-as-equalizers-and-coequalizers,
       thm-degenerate-exactness-criteria,
       thm-the-pullback-of-an-epimorphism-is-an-epimorphism,
       thm-in-a-pullback-square-the-induced-morphism-on-the-kernels-of-the-parallel-legs-is-an-isomorphism,
       thm-exactness-of-kernel-and-cokernel-sequences-under-endpoint-hypotheses,
       thm-chasing-rule-epimorphy-detected-by-members,
       thm-chasing-rule-the-subtraction-surrogate,
       thm-exactness-is-self-dual]
justified_by: []
landmark: false
proof_strategy: direct
  audited: 2026-08-30
  precheck: pass
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Section 12.5, Lemma 12.5.17(2)"
      url: "https://stacks.math.columbia.edu/tag/00ZX"
    - title: "David Mehrle, Category Theory, Part III, Lemma 7.24"
      url: "https://pi.math.cornell.edu/~dmehrle/notes/partiii/cattheory_partiii_notes.pdf"
pipeline_run: frontier-24
---

## Statement

For snake data in the weaker Stacks shape

```tikzcd
X \arrow[r, "a"] \arrow[d, "\alpha"'] & Y \arrow[r, "b"] \arrow[d, "\beta"'] & Z \arrow[r] \arrow[d, "\gamma"'] & 0 \\
0 \arrow[r] & U \arrow[r, "k"'] & V \arrow[r, "l"'] & W,
```

there is an exact sequence
$$\ker(\alpha) \to \ker(\beta) \to \ker(\gamma) \xrightarrow{\delta} \operatorname{coker}(\alpha) \to \operatorname{coker}(\beta) \to \operatorname{coker}(\gamma).$$

If $a$ is monic, then $\ker(\alpha) \to \ker(\beta)$ is monic. If $l$ is epic,
then $\operatorname{coker}(\beta) \to \operatorname{coker}(\gamma)$ is epic.

## Facts & Assumptions

**Given:** The weaker snake-data diagram in the statement.

[L1] In an exact sequence ending in $0$, the last map is epic; in an exact sequence beginning at $0$, the first map is monic ([[thm-degenerate-exactness-criteria]]).

[L2] Kernels and cokernels are characterized by their universal properties ([[def-kernels-and-cokernels-as-equalizers-and-coequalizers]]).

[L3] Pullbacks of epimorphisms are epimorphisms, and in a pullback square the induced map on kernels is an isomorphism ([[thm-the-pullback-of-an-epimorphism-is-an-epimorphism]], [[thm-in-a-pullback-square-the-induced-morphism-on-the-kernels-of-the-parallel-legs-is-an-isomorphism]]).

[L4] Under the endpoint hypotheses, the induced kernel and cokernel sequences are exact ([[thm-exactness-of-kernel-and-cokernel-sequences-under-endpoint-hypotheses]]).

[L5] Epicity is equivalent to the member-lifting property ([[thm-chasing-rule-epimorphy-detected-by-members]]).

[L6] The subtraction surrogate produces a member mapping to zero from two members with the same image ([[thm-chasing-rule-the-subtraction-surrogate]]).

[L7] Exactness is self-dual ([[thm-exactness-is-self-dual]]).

## Proof

**Proof technique:** direct.

1.1 Because the top row is exact and ends in $0$, the map $b$ is epic by [L1]. Because the bottom row is exact and begins at $0$, the map $k$ is monic by [L1]. Choose a kernel $k_\gamma:K\to Z$ of $\gamma$ and a cokernel $q_\alpha:U\to Q$ of $\alpha$. Form the pullback ```tikzcd P \arrow[r, "\pi'"] \arrow[d, "\pi"'] & Y \arrow[d, "b"] \\ K \arrow[r, "k_\gamma"'] & Z. ``` By [L3], $\pi$ is epic. Since $$ l\beta\pi'=\gamma b\pi'=\gamma k_\gamma\pi=0, $$ the kernel property of $k$ gives a unique map $r:P\to U$ such that $$ kr=\beta\pi'. $$ [L1, L2, L3, given, construct]

2.1 Let $j:J\to P$ be a kernel of $\pi$. By [L3], the induced map $J\to\ker(b)$ is an isomorphism. Exactness of the top row at $Y$ says that $\ker(b)$ is the image of $a$, so there is an epimorphism $e:X\to J$ with $$ \pi' j e = a. $$ Then $$ krje=\beta\pi'je=\beta a=k\alpha, $$ and monicity of $k$ gives $rje=\alpha$. Therefore $$ q_\alpha r j e = q_\alpha \alpha = 0. $$ Because $e$ is epic, $q_\alpha r j=0$. Since $\pi$ is epic, it is the cokernel of its kernel $j$, so there is a unique morphism $$ \delta:K\to Q $$ with $$ \delta\pi=q_\alpha r. $$ [L1, L2, L3, step 1.1, construct, algebra]

3.1 Applying [L4] to the given diagram gives exactness of $$ \ker(\alpha)\to\ker(\beta)\to\ker(\gamma) $$ and of $$ \operatorname{coker}(\alpha)\to\operatorname{coker}(\beta)\to\operatorname{coker}(\gamma). $$ If $a$ is monic, then the sequence $0\to X\xrightarrow{a}Y\xrightarrow{b}Z$ is exact, so the same theorem gives that $\ker(\alpha)\to\ker(\beta)$ is monic. Dually, if $l$ is epic, then $\operatorname{coker}(\beta)\to\operatorname{coker}(\gamma)$ is epic. Thus only exactness at $\ker(\gamma)$ and at $\operatorname{coker}(\alpha)$ remains. [L1, L4, step 2.1]

3.2 Let $i:\ker(\beta)\to Y$ be a kernel of $\beta$, and let $s:\ker(\beta)\to K$ be the induced map with $k_\gamma s = b i$. Because $\beta i = 0$, the pair $(i,s)$ factors through the pullback, giving $t:\ker(\beta)\to P$ with $$ \pi' t=i,\qquad \pi t=s. $$ Then $$ kr t=\beta\pi' t=\beta i=0, $$ so monicity of $k$ gives $r t=0$. Therefore $$ \delta s=\delta \pi t=q_\alpha r t=0, $$ which proves that $\delta$ kills the image of $\ker(\beta)\to\ker(\gamma)$. [L2, step 2.1, construct, algebra]

3.3 Conversely, let $u$ be a member of $K$ with $\delta u\equiv 0$. Because $\pi$ is epic, [L5] gives a member $n$ of $P$ with $\pi n\equiv u$. Then $$ q_\alpha r n=\delta\pi n\equiv \delta u\equiv 0, $$ so the cokernel property of $q_\alpha$ gives a member $x$ of $X$ with $\alpha x\equiv r n$. Hence $$ \beta\pi' n = kr n \equiv k\alpha x = \beta a x. $$ Applying [L6] to $\pi' n$ and $a x$ with respect to $\beta$, obtain a member $y$ of $Y$ with $\beta y\equiv 0$ and $$ by \equiv b\pi' n. $$ Since $b\pi' n = k_\gamma \pi n \equiv k_\gamma u$, the member $y$ factors through $\ker(\beta)$ and maps to $u$ in $\ker(\gamma)$. Thus every member of $\ker(\delta)$ lies in the image of $\ker(\beta)\to\ker(\gamma)$, so the sequence is exact at $\ker(\gamma)$. [L2, L5, L6, step 2.1, construct, algebra]

4.1 The exactness at $\operatorname{coker}(\alpha)$ is the formal dual of step 3.3 in the opposite abelian category. By [L7], that dual exactness transports back to the statement that $$ \operatorname{im}(\delta)=\ker\bigl(\operatorname{coker}(\alpha)\to\operatorname{coker}(\beta)\bigr). $$ [L7, step 3.3]

5.1 Hence the displayed six-term sequence is exact under the weaker Stacks hypotheses, with the additional endpoint monic and epic clauses already proved in step 3.1. [step 3.1, step 3.3, step 4.1] ∎
