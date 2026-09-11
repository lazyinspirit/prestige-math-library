---
id: "thm-numerable-fiber-bundles-are-hurewicz-fibrations"
kind: "theorem"
title: "Numerable fiber bundles are hurewicz fibrations"
deps: ["def-locally-trivial-fiber-bundle", "def-hurewicz-and-serre-fibrations", "lem-interval-exponential-law-and-quotient-homotopies", "def-axiom-of-choice", "lem-locally-finite-sums-are-continuous", "lem-algebra-of-continuous-real-maps-on-a-space", "thm-compactness-under-continuous-maps", "thm-well-ordering-theorem", "lem-continuity-is-local-and-pastes", "cor-heine-borel-in-the-product-topology"]
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
    - title: "May, A Concise Course in Algebraic Topology"
      url: "https://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf"
      locator: "Chapter7 pp49–56; Chapter9 §3 p66 and §5 pp68–69"
    - title: "Hatcher, Algebraic Topology"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT.pdf"
      locator: "§4.2 Theorem4.41 pp375–377; Hopf example pp377–378; §4.3 pp405–410"
status: "draft"
origin: "pipeline"
proof_strategy: "direct"
---

## Statement

Assume AC. Every numerable fiber bundle, with its supplied ordinary local product charts and support-subordinate locally finite partition of unity, is a Hurewicz fibration in all ordinary spaces. In particular a bundle of CGWH spaces with these charts is a Hurewicz fibration in CGWH. AC is used to well-order the set of finite chart words. No selection of a chart for every base point or of a separate lift for every path is made.

## Facts & Assumptions

[F1] Numerating data are charts $\theta_i:p^{-1}(U_i)\cong U_i\times F$ and a locally finite partition $\rho_i$ with closed support contained in $U_i$. [[def-locally-trivial-fiber-bundle]]

[F2] Hurewicz HLP requires a jointly continuous lift for every initial map and base homotopy. [[def-hurewicz-and-serre-fibrations]]

[F3] Evaluation and transposition for compact-open interval paths hold for arbitrary spaces. [[lem-interval-exponential-law-and-quotient-homotopies]]

[F4] A locally finite family of continuous nonnegative functions has continuous sum. [[lem-locally-finite-sums-are-continuous]]

[F5] Finite minima, maxima, sums and quotients with nonzero denominator of continuous real maps are continuous. [[lem-algebra-of-continuous-real-maps-on-a-space]]

[F6] Compact images are compact and continuous real functions attain extrema on nonempty compact sets. [[thm-compactness-under-continuous-maps]]

[F7] Under AC a set admits a well-order. [[thm-well-ordering-theorem]]

[F8] Local continuity and finite closed pasting give continuity. [[lem-continuity-is-local-and-pastes]]

[F9] Every closed bounded real interval is compact. [[cor-heine-borel-in-the-product-topology]]

## Proof

**Given:** The F1 bundle data indexed by a set $S$, AC, $I=[0,1]$, and the ordinary compact-open path space $P=C_0(I,B)$.

1.1 For each nonempty finite word $T=(i_1,\ldots,i_n)$ in $S$, repetitions allowed, put $J_j=[(j-1)/n,j/n]$ and $\lambda_T(\alpha)=\min_j\min_{v\in J_j}\rho_{i_j}(\alpha(v))$. Extrema exist by F6. These functions are continuous on $P$: for a fixed $\alpha$, index all closed interval neighbourhoods on which each relevant original real-valued composite varies by less than $\varepsilon/3$, and take finitely many whose relative interiors cover each $J_j$. Requiring $\beta$ to map each selected compact interval into the inverse image under the relevant $\rho_i$ of the $\varepsilon/3$-enlargement of its original value range is a finite compact-open condition. On it the original and new values at every time differ by less than $\varepsilon$; minima differ by at most the same bound. Finite minima over $j$ preserve continuity by F5. [F3, F5, F6, F9]

1.2 Let $V_T=\{\alpha:\alpha(J_j)\subseteq U_{i_j}\text{ for all }j\}$, an open compact-open set. We have $\operatorname{supp}\lambda_T\subseteq V_T$. Indeed, outside $V_T$ some $\alpha(v)$ lies outside $U_{i_j}$ and hence outside the closed support of $\rho_{i_j}$. The evaluation neighbourhood requiring $\beta(v)$ to remain outside that support is open and makes $\lambda_T(\beta)=0$. Thus that $\alpha$ is outside the support. This argument uses neighbourhoods, not sequential convergence. [F1, F3]

1.3 For each $\alpha$ some $\lambda_T(\alpha)>0$. The inverse images of the cozero sets of $\rho_i$ cover $I$. Consider all pairs of a centre and a positive radius whose relative interval of twice that radius lies in one cover member. Their smaller intervals cover $I$; choose a finite subcover and a positive minimum of its finitely many radii. Every sufficiently short subinterval lies in one of the corresponding larger intervals: take a point in the short interval, place it in a chosen smaller interval, and use the radius bound on its diameter. Thus a sufficiently fine equal subdivision has every closed $J_j$ contained in one cozero inverse image. Finitely many index choices give a word; each selected continuous positive function has positive minimum on its $J_j$ by F6. Also, for fixed $n$, the family $\lambda_T$, $|T|=n$, is locally finite: cover the compact image $\alpha(I)$ by neighbourhoods meeting only finitely many cozero sets of the original partition, extract finitely many, and take their union $O$. The neighbourhood $\{\beta:\beta(I)\subseteq O\}$ meets cozero $\lambda_T$ only for words in a fixed finite alphabet, hence only finitely many length-$n$ words. No infinite pointwise choice was made. [F1, F6, F9]

2.1 Put $\gamma_T=\max(0,\lambda_T-n\sum_{|R|<n}\lambda_R)$ for $|T|=n$. The shorter sum is locally finite by step 1.3, hence continuous by F4; F5 proves continuity of $\gamma_T$, with $0\le\gamma_T\le\lambda_T\le1$. At each $\alpha$, the least length with a positive $\lambda_T$ has zero shorter sum, so some $\gamma_T(\alpha)>0$. The full family is locally finite: choose $R$ of length $N$ with $\lambda_R(\alpha)>0$ and a neighbourhood on which it exceeds $c>0$. For $n>N$ and $nc\ge1$, every $\gamma_T$ of length $n$ vanishes there. Only finitely many lengths remain, each locally finite by step 1.3. Intersect finitely many corresponding neighbourhoods. [F4, F5, step 1.1, step 1.3]

2.2 For $\alpha\in V_T$ and $0\le s\le t\le1$, define $L_T(\alpha,e,s,t)$ by transporting $e$ successively across the intersections of $[s,t]$ with $J_1,\ldots,J_n$. In chart $j$ a segment $[a,b]\subseteq J_j$ sends the current point $z$ to $\theta_{i_j}^{-1}(\alpha(b),\operatorname{pr}_F\theta_{i_j}(z))$; empty segments act identically. After chart $j$ the base point is $\alpha(\min(t,\max(s,j/n)))$, which proves that the next nonempty segment starts at the current base point. For continuity use the finite closed cases $t\le(j-1)/n$, $s\ge j/n$, and $s\le j/n$, $t\ge(j-1)/n$. On the third case the segment endpoints are $\max(s,(j-1)/n)$ and $\min(t,j/n)$. The other cases use identity. At overlaps the segment has length zero and the chart formula equals identity, so F8 pastes them continuously. F1 and F3 make each nonempty chart formula continuous on its domain, including the incoming point. Iterate finitely many times. In particular $L_T(\alpha,e,s,s)=e$ exactly. [F1, F3, F5, F8, step 1.2]

3.1 Set $G=\sum_T\gamma_T>0$ and $w_T=\gamma_T/G$. By step 2.1 and F4–F5 these are continuous, locally finite, sum to one, and $\operatorname{supp}w_T\subseteq\operatorname{supp}\lambda_T\subseteq V_T$. Use AC, precisely through F7, to well-order the set of words. Put $a_T=\sum_{R<T}w_R$ and $b_T=a_T+w_T$; subfamilies are locally finite so these are continuous. At any fixed path the finitely many positive weights, in their induced order, give consecutive intervals $[a_T,b_T]$ filling $[0,1]$. [F4, F5, F7, step 1.2, step 2.1]

4.1 Given $(e,\alpha)$ with $p(e)=\alpha(0)$ and an endpoint time $t$, process the finitely many positive-weight words in order, applying $L_T$ on $[\min(t,a_T),\min(t,b_T)]$. Consecutive endpoints agree because their untruncated intervals are consecutive, and clipping preserves this. The result $\Lambda(e,\alpha,t)$ lies over $\alpha(t)$. At $t=0$ every segment has length zero, so $\Lambda(e,\alpha,0)=e$. Inserting zero-weight words changes nothing, by the exact zero-length identity in step 2.2. Thus the definition is independent of any finite list containing all positive weights. [step 2.2, step 3.1]

5.1 The map $\Lambda$ is jointly continuous. Near a fixed $\alpha_0$, local finiteness leaves only finitely many possibly nonzero weights. For a word in that list with $\alpha_0\notin\operatorname{supp}w_T$, shrink the neighbourhood so that its weight vanishes and discard it. For every remaining word, shrink into $V_T$, using the support inclusion in step 3.1. On this single neighbourhood, $\Lambda$ is a fixed finite composition of the continuous maps in step 2.2 with the continuous clipped endpoint functions. Each formula is defined even when its weight becomes zero, since the whole neighbourhood is in $V_T$. F8 proves joint continuity, including intervals shrinking to length zero and changes of the active list. [F8, step 2.2, step 3.1, step 4.1]

6.1 For an arbitrary initial map $f:X\to E$ and compatible base homotopy $H:X\times I\to B$, F3 makes $x\mapsto\alpha_x=H(x,-)$ continuous. Then $\widetilde H(x,t)=\Lambda(f(x),\alpha_x,t)$ is continuous by step 5.1, starts at $f(x)$ and projects to $H(x,t)$ by step 4.1. This is the full ordinary HLP of F2. When the bundle spaces and test space are CGWH, their interval cylinders have the ordinary topology, so the same ordinary lift is a lift in that category. This conclusion uses the ordinary charts specified in F1 and asserts nothing about merely k-product charts. [F1, F2, F3, step 4.1, step 5.1]

7.1 If $B$ is empty then $E$ is empty. If $F$ is empty then again $E$ is empty and only empty initial-map domains occur, so HLP is vacuous. Otherwise the construction covers constant paths, a single active word, zero weights and both endpoints without modification. The well-order in step 3.1 is the sole use of AC; all other selections were finite or a single local witness, and chart assignments were supplied data. Thus the theorem, with its exact choice and topology conventions, is proved. [F1, step 1.3, step 3.1, step 6.1] ∎
