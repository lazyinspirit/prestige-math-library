---
id: thm-two-metric-spaces-are-quasi-isometric-exactly-when-they-contain-bilipschitz-equivalent-separated-nets
kind: theorem
title: "Two metric spaces are quasi-isometric if and only if each contains a separated net and the two nets are bilipschitz equivalent"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-coarsely-dense-subset-and-quasi-isometry, def-coarse-lipschitz-map-and-quasi-isometric-embedding, def-bilipschitz-embedding-and-bilipschitz-equivalence, def-separated-net-in-a-metric-space, def-axiom-of-choice, thm-zorn]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: "gpt-6-sol"
    verdict: "locally-reviewed"
    date: 2026-09-26
    scope: "Current item-local mathematical content and used-supplier-interface review, as documented in the bound evidence; no whole-closure claim; no new judge claim."
    delegated_by: "owner"
sources:
  scraped: []
  references:
    - title: "C. Loh, Geometric Group Theory: An Introduction (2015 course version), 264 pp."
      url: "https://loeh.app.uni-regensburg.de/teaching/ggt_ws1415/lecture_notes_old.pdf"
    - title: "C. Drutu and M. Kapovich, Geometric Group Theory (with an appendix by B. Nica), 837 pp."
      url: "https://www.math.ucdavis.edu/~kapovich/EPR/ggt.pdf"
---
## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]).

Two metric spaces are quasi-isometric if and only if each contains a separated net and the two nets are bilipschitz equivalent.

## Facts & Assumptions

**Given:** The hypotheses of the Statement, including the Axiom of Choice.

[F1] A subset of a metric space is a separated net when its points are uniformly separated and it is coarsely dense ([[def-separated-net-in-a-metric-space]]).

[L1] A map is $(L,C)$-coarse Lipschitz when $d(f(x),f(x'))\le L\,d(x,x')+C$, and an $(L,C)$-quasi-isometric embedding when in addition $L^{-1}d(x,x')-C\le d(f(x),f(x'))$ ([[def-coarse-lipschitz-map-and-quasi-isometric-embedding]]).

[L2] A quasi-isometry is a coarse Lipschitz map with a coarse Lipschitz quasi-inverse; both composites are at bounded distance from the relevant identities ([[def-coarsely-dense-subset-and-quasi-isometry]]).

[L3] A map is a bilipschitz embedding when $c^{-1}d(x,x')\le d(f(x),f(x'))\le c\,d(x,x')$ for some $c>0$, and a bilipschitz equivalence when it is a bijective such map with bilipschitz inverse ([[def-bilipschitz-embedding-and-bilipschitz-equivalence]]).

[A1] > Every family of nonempty sets has a choice function >. ([[def-axiom-of-choice]]).

[L4] Under the Axiom of Choice, every nonempty poset in which every chain has an upper bound has a maximal element ([[thm-zorn]]).

## Proof

**Proof technique:** direct.

1.1 Suppose first that $X$ and $Y$ are quasi-isometric. If $X$ is empty, a quasi-inverse $Y\to X$ forces $Y$ empty, and the empty subsets are separated nets linked by their unique bilipschitz equivalence. Otherwise choose a quasi-isometry $f:X\to Y$ with coarse Lipschitz quasi-inverse $g:Y\to X$. Let $g$ have constants $L_g\ge1,C_g\ge0$ and let $d_X(gf(x),x)\le D_X$ and $d_Y(fg(y),y)\le D_Y$. Then $d_X(x,x')\le L_gd_Y(fx,fx')+C_g+2D_X$, so $f$ has a quasi-isometric lower bound; its coarse Lipschitz bound supplies the upper bound. Fix common constants $L\ge1,C\ge0$ for these bounds. The second composite estimate says $f[X]$ is $D_Y$-coarsely dense. [L1, L2, given, algebra]

2.1 Put $\delta:=2LC+1$. Zorn's lemma applied to the poset of $\delta$-separated subsets of $X$ gives a maximal one $A$: a union of a chain is still separated, and the empty set starts the poset. For each $x\in X$ there must be an $a\in A$ with $d_X(x,a)<\delta$, since otherwise adjoining $x$ would contradict maximality. Thus $A$ is a $\delta$-separated, $\delta$-net; in particular it is nonempty. This quantified argument also covers the initially empty candidate subset without using $d(x,\varnothing)$. [F1, L4, step 1.1]

3.1 For distinct $a,a'\in A$, separation absorbs the additive error: $d_Y(fa,fa')\ge (L^{-1}-C/\delta)d_X(a,a')$ and $d_Y(fa,fa')\le (L+C/\delta)d_X(a,a')$. The first coefficient is positive because $\delta>LC$. Hence $f|_A$ is a bilipschitz equivalence onto $f[A]$, and $f[A]$ is separated. Given $y\in Y$, choose $x\in X$ with $d_Y(y,fx)\le D_Y$ and then $a\in A$ with $d_X(x,a)<\delta$; one has $d_Y(y,fa)<D_Y+L\delta+C$. Thus $f[A]$ is also a net in $Y$. [F1, L1, L3, step 1.1, step 2.1]

4.1 Conversely, suppose separated nets $A\subseteq X$ and $B\subseteq Y$ are linked by a bilipschitz equivalence $\phi:A\to B$. If $A$ is empty, its net property forces $X$ empty, while bijectivity forces $B$ and hence $Y$ empty; their unique maps are quasi-inverses. Otherwise choose net radii $R_X,R_Y$ and, using choice, select maps $p_X:X\to A$ and $p_Y:Y\to B$ within those radii, with $p_X(a)=a$ and $p_Y(b)=b$ on the nets. The triangle inequality gives $d_X(p_Xx,p_Xx')\le d_X(x,x')+2R_X$, and likewise for $p_Y$, so both maps are coarse Lipschitz. Define $F:X\to Y$ by $F=\phi p_X$ and $G:Y\to X$ by $G=\phi^{-1}p_Y$, viewing the net values in their ambient spaces. Bilipschitz bounds make both maps coarse Lipschitz. Since $p_X$ and $p_Y$ fix their nets, $GF=p_X$ and $FG=p_Y$; these are within $R_X$ and $R_Y$ of the respective identities. Hence $F$ and $G$ are quasi-inverses and $X,Y$ are quasi-isometric. Together with step 3.1, this proves both directions. [F1, L2, L3, A1, given, algebra, step 3.1] ∎
