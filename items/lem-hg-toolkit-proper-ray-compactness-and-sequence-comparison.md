---
id: "lem-hg-toolkit-proper-ray-compactness-and-sequence-comparison"
kind: "lemma"
title: "Hg toolkit proper ray compactness and sequence comparison"
deps: ["lem-boundary-products-are-independent-of-representative-and-basepoint", "def-axiom-of-choice"]
provenance:
  statement: "ai-altered"
  proof: "ai-altered"
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: "Druţu–Kapovich Lemma 9.61, Corollary 9.62 and Lemma 9.66; full comparison still to be sourced"
      url: "https://www.math.ucdavis.edu/~kapovich/EPR/kapovich_drutu.pdf"
status: published
origin: "pipeline"
proof_strategy: "direct"
---

## Statement

Assume AC. Let $X$ be a nonempty proper geodesic space with a product hyperbolicity constant $\kappa\ge0$, and fix $o\in X$. Proper means every closed ball of positive finite radius is compact. Every Gromov-sequence class has a geodesic ray representative $r:[0,\infty)\to X$ with $r(0)=o$, represented by $(r(n))_{n\ge1}$. The quotient of these rays by finite Hausdorff distance, with the topology induced from uniform convergence on bounded parameter intervals, is homeomorphic to the Gromov-sequence boundary with its product topology. In particular the boundary is compact, including when it is empty.

## Facts & Assumptions

**Given:** The specified space, product constant, basepoint and properness.

[F1] The boundary product, the $2\kappa$ representative comparison, and its Hausdorff neighbourhood topology are proved in [[lem-boundary-products-are-independent-of-representative-and-basepoint]].

[A1] AC is assumed as in [[def-axiom-of-choice]], for countable families of geodesics, compactness subsequences and the witnesses in the sequential compactness argument below.

## Proof

1.1 We record the compact-metric facts used here. A sequence in a compact metric space has a cluster point: otherwise each point has a neighbourhood containing only finitely many sequence indices, and a finite subcover contradicts the infinite index set. From a cluster point choose increasing indices at distances less than $1/j$ to obtain a convergent subsequence. A Cauchy sequence in that compact space consequently converges to its subsequential limit. Conversely a metric space in which every sequence has a convergent subsequence is compact. Indeed, failure of a finite cover by radius-$\eta$ balls allows recursive selection of an infinite $\eta$-separated sequence, contradicting subsequential convergence. Thus finite such covers exist for each $\eta>0$. For any open cover, there is some $\eta>0$ such that each radius-$\eta$ ball is contained in a cover member: otherwise select points $x_n$ whose radius-$1/n$ balls are not so contained, take a subsequence converging to $x$, and take a cover member containing a ball $B(x,r)$. Eventually $d(x_n,x)+1/n<r$, a contradiction. A finite cover by radius-$\eta/2$ balls then has each of its balls contained in a member of the given cover, producing a finite subcover. Empty spaces are compact by the empty subcover. [A1, given]

2.1 Consider any sequence of $1$-Lipschitz paths $f_n:[0,\infty)\to X$ starting at $o$. At each nonnegative rational $t$, values lie in a compact closed ball, say of radius $t+1$. Enumerate the rationals and repeatedly use step 1.1 to extract subsequences converging at the next time; the diagonal subsequence converges at every rational time. AC permits these countably many subsequence choices. On a bounded interval, a finite rational mesh and the common Lipschitz bound show that this subsequence is uniformly Cauchy: approximate any time by a mesh point within $\eta$, then bound the distance between two path values by $2\eta$ plus their distance at that mesh point. Its values remain in a fixed compact ball, which is complete by step 1.1. Therefore it converges uniformly on each bounded interval to a path $f$. Passing the Lipschitz inequalities to the limit shows $f$ is $1$-Lipschitz and $f(0)=o$. If the paths are isometric on intervals whose lengths tend to infinity, the same limit gives $d(f(s),f(t))=|s-t|$ for all finite $s,t$, so $f$ is a ray. [step 1.1, A1, given]

3.1 The ray space $\mathcal R_o$ is metrized by $$d_{\mathcal R}(r,s)=\sum_{j=1}^{\infty}2^{-j}\min\{1,\sup_{0\le t\le j}d(r(t),s(t))\}.$$ Each supremum is finite, bounded by $2j$. The nonnegative series converges since its tail after $j$ is at most $2^{-j}$; completeness gives the supremum of its partial sums. Positivity and symmetry are immediate, and the triangle inequality follows termwise from the triangle inequality and $\min(1,a+b)\le\min(1,a)+\min(1,b)$. Zero distance implies equality at every time. Convergence in this metric is equivalent to uniform convergence on every bounded interval: each fixed term controls its truncated supremum in one direction, and finitely many controlled terms plus the geometric tail give the other direction. Step 2.1 therefore proves sequential compactness of this metric ray space. By step 1.1 it is compact. This includes the case in which there are no rays. [step 1.1, step 2.1, given, algebra]

3.2 Let $(x_n)$ be Gromov. Its radii $d(o,x_n)$ tend to infinity by the diagonal products. Use AC to select geodesics from $o$ to $x_n$ and extend each constantly past its terminal time. These extensions are $1$-Lipschitz. Step 2.1 supplies a subsequence converging uniformly on bounded intervals to a ray $r$. Fix $T\ge0$. For large indices $n$ on the subsequence, the radius-$T$ point $u_n$ of the selected segment satisfies $(u_n|x_n)_o=T$ and $u_n\to r(T)$. For all large $n,m$, the Gromov property gives $(x_n|x_m)_o\ge T$. The product inequality then gives $(u_n|x_m)_o\ge T-\kappa$. Products change by at most $d(u_n,r(T))$ when that one endpoint is replaced, so passing along the subsequence gives $(r(T)|x_m)_o\ge T-\kappa$ for every sufficiently large $m$. For every $S\ge T$, $(r(S)|r(T))_o=T$, and one further product inequality yields $(r(S)|x_m)_o\ge T-2\kappa$. Taking $T$ larger than any prescribed threshold plus $2\kappa$ proves joint mixed divergence. Thus $r$ represents the original class. [step 2.1, F1, A1, given, algebra]

4.1 Each ray is Gromov since $(r(n)|r(m))_o=\min\{n,m\}$. If two rays $r,s$ represent the same class, fix $T$ and take integers $n,m\ge T$ with $(r(n)|s(m))_o\ge T$. Two product inequalities, through $r(n)$ and $s(m)$, give $(r(T)|s(T))_o\ge T-2\kappa$, so $d(r(T),s(T))\le4\kappa$. Hence their Hausdorff distance is finite. Conversely suppose their Hausdorff distance is at most $H<\infty$. For each $T$ and $e>0$, choose $s(U)$ within $H+e$ of $r(T)$. Their radii give $|U-T|\le H+e$, so $d(r(T),s(T))\le2H+2e$, and then at most $2H$ by letting $e$ decrease to zero. For $n\le m$, the route through $s(n)$ gives $d(r(n),s(m))\le2H+m-n$, so $(r(n)|s(m))_o\ge n-H$. The symmetric case gives the lower bound $\min\{n,m\}-H$, which diverges jointly. Thus the fibers of the map $\pi:\mathcal R_o\to\partial X$ are exactly finite-Hausdorff classes. [step 3.1, F1, given, algebra]

4.2 The map $\pi$ is continuous. For rays $r,s$ and any $T$, two product inequalities along their tails show $$B_o(\pi r,\pi s)\ge T-d(r(T),s(T))/2-2\kappa.$$ Indeed the two outer products through $r(T),s(T)$ equal $T$ for tail parameters at least $T$, and their middle product is $T-d(r(T),s(T))/2$; take joint liminf and then supremum. For a fixed threshold $R$, choose $T>R+2\kappa+1$. All rays sufficiently close to $r$ uniformly on $[0,T]$ have $d(r(T),s(T))<1$, so their images belong to $U_R(\pi r)$. F1's open-set criterion now gives continuity at every ray. [step 3.1, F1, given, algebra]

5.1 By step 3.2, $\pi$ is onto. By steps 3.1 and 4.2 its image is compact: pull any open cover back to $\mathcal R_o$, take a finite subcover, and use surjectivity. Since F1 makes the target Hausdorff, this is also a quotient map. To see this explicitly, a closed subset of the compact ray space is compact, hence its continuous image is compact. Compact subsets of a Hausdorff space are closed: for a point outside such a subset, separate it from each point of the subset, take finitely many of the latter neighbourhoods covering the subset, and intersect the corresponding finitely many neighbourhoods of the outside point. Thus $\pi$ is a closed surjection. If the preimage of a subset is closed, that subset is the image of its preimage and therefore closed; taking complements proves the quotient criterion. Step 4.1 identifies exactly the desired ray equivalence relation, so its quotient topology agrees with the boundary product topology. This proof uses compactness of a metrized ray space, not an inference from first countability of the boundary. [step 3.1, step 3.2, step 4.1, step 4.2, F1] ∎
