---
dependency_level: 4
id: lem-good-gcd-subgraph-and-weighted-edge-bound
kind: lemma
title: Good GCD subgraphs and the weighted exceptional-edge bound
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
provenance:
  statement: literature-derived
  proof: ai-altered
deps:
- def-finite-weighted-gcd-graph
- lem-gcd-graph-quality-selection-and-pruning
- lem-gcd-graph-generic-prime-increment
- lem-gcd-graph-concentrated-prime-increment
- lem-gcd-graph-small-prime-compression
- lem-gcd-graph-residual-prime-cleanup
- thm-euler-totient-product-formula
- thm-p-series-real-exponents
- lem-prime-reciprocal-sum-exponential-rarity
sources:
  references:
  - title: D. Koukoulopoulos and J. Maynard, On the Duffin–Schaeffer conjecture, Annals192(2020),251–307
    url: https://annals.math.princeton.edu/wp-content/uploads/annals-v192-n1-p05-s.pdf
proof_strategy: direct
---

## Statement

There are absolute constants $c,C,T_*>0$ with the following properties. Let $G$ be a nontrivial finite weighted GCD graph with empty recorded prime set and density $\delta$. If $t\ge T_*$, $t>H_0$, $t\ge10\delta^{-1/50}$, and all edges have $L_t\ge10$, then some nontrivial subgraph $G'$ has no residual primes, all vertex neighbor masses at least $9\delta'/10$ times the opposite side mass, and one of the following alternatives: $q(G')\ge c\delta t^{50}q(G)$; or $q(G')\ge cq(G)$ and every edge, on writing $v=av'$, $w=bw'$ with $a=\prod_{p\in P'}p^{f'(p)}$ and $b=\prod_{p\in P'}p^{g'(p)}$, has $L_t(v',w')\ge4$.

Consequently, for any function $\psi:\mathbb N\to[0,\infty)$, finite $V\subseteq\mathbb Z_{>0}$ with $0<\mu(V)\le2$, where $\mu(v)=\psi(v)\varphi(v)/v$, and any edge set in $V\times V$ satisfying
$$ \max\{v\psi(w),w\psi(v)\}\le t\gcd(v,w),\qquad L_t(v,w)\ge10, $$
one has $\mu(E)\le C/t$ for every real $t\ge1$.

## Statement references

[Koukoulopoulos–Maynard, §§6–14](https://annals.math.princeton.edu/wp-content/uploads/annals-v192-n1-p05-s.pdf)

## Facts & Assumptions

**Given:** All the hypotheses and notation in the Statement. All graph sums and prime data are finite; all constants are absolute.

[F1] The full stated result or definition in [[def-finite-weighted-gcd-graph]] is available, with its hypotheses and constants.

[F2] The full stated result or definition in [[lem-gcd-graph-quality-selection-and-pruning]] is available, with its hypotheses and constants.

[F3] The full stated result or definition in [[lem-gcd-graph-generic-prime-increment]] is available, with its hypotheses and constants.

[F4] The full stated result or definition in [[lem-gcd-graph-concentrated-prime-increment]] is available, with its hypotheses and constants.

[F5] The full stated result or definition in [[lem-gcd-graph-small-prime-compression]] is available, with its hypotheses and constants.

[F6] The full stated result or definition in [[lem-gcd-graph-residual-prime-cleanup]] is available, with its hypotheses and constants.

[F7] The full stated result or definition in [[thm-euler-totient-product-formula]] is available, with its hypotheses and constants.

[F8] The full stated result or definition in [[thm-p-series-real-exponents]] is available, with its hypotheses and constants.

[F9] The full stated result or definition in [[lem-prime-reciprocal-sum-exponential-rarity]] is available, with its hypotheses and constants.

## Proof

1.1 Choose $T_*$ large enough for the residual-prime cleanup and exponential-rarity suppliers, and put $D=10^{10^{3000}}$, $q=q(G)$. For the subgraphs indexed below write $q_i=q(G_i)$ and $\delta_i=\delta(G_i)$. Suppose initially P is empty, delta>0, all edges have L_t≥10, and $$ t>H_0,\quad t\ge T_*,\quad t\ge10\delta^{-1/50}. $$ First remove small primes by [[lem-gcd-graph-small-prime-compression]], obtaining G1 with the two bounds involving D. Then repeatedly apply the generic increment of [[lem-gcd-graph-generic-prime-increment]] while R-flat is nonempty. Each step strictly decreases R and adds one prime. Thus termination is finite and yields G2 with R-flat empty. If N is the number of unequal-valuation primes recorded after G1, multiplication of the quality and density-times-quality bounds of the generic-prime lemma gives $$ q_2\ge2^Nq/D,\quad\delta_2\,q_2\ge2^N\delta q/D. \tag{11} $$ If q_2/q≥(t/10)^50·delta/D, repeatedly apply either [[lem-gcd-graph-generic-prime-increment]] or [[lem-gcd-graph-concentrated-prime-increment]] to any residual prime. Quality never decreases and R strictly shrinks, so the terminal graph has R empty and quality at least $c\delta t^{50}q$, with the explicit absolute c=10^-50/D. Otherwise (11) gives delta_2≥(10/t)^50 and 2^N≤t^50. Apply [[lem-gcd-graph-residual-prime-cleanup]], losing at most a factor 2 in quality, to arrange that primes outside R2 contribute at least 5 to L_t. The primes ≥t already recorded at G2 with unequal f,g are at most N: recorded primes in G1 are ≤H_0<t. Their reciprocal contribution is ≤N/t≤(50 log t)/(t log2)<1 for t>H_0. Excluding these leaves reciprocal sum at least 4. Now exhaust R by the generic or concentrated transition; the final recorded prime set is contained in P2∪R2. Quality never decreases during this exhaustion and is at least q/(2D). Write the final common divisors as $$ a=\prod_{p\in P'}p^{f'(p)},\quad b=\prod_{p\in P'}p^{g'(p)},\quad v=av',\ w=bw'. $$ [given, F1, F2, F3, F4, F5, F6, F7, F8, F9, algebra]

1.2 Since R is empty, every edge has gcd(v,w)=gcd(a,b), hence gcd(v',w')=1. A prime dividing vw/gcd(v,w)^2 that disappears from v'w' must be recorded with unequal valuations. Such a prime belongs either to R2 or to the already excluded unequal recorded set P2. Therefore every retained edge satisfies L_t(v',w')≥4. Finally apply high-degree trimming; this preserves R empty, the relevant edge conditions, and the quality lower bound. This proves KM7.1 with the harmless fixed t≥T_* addition. No assumption that R-flat itself decreases under arbitrary subgraphs was made; only R decreases. Assume $\mu(v)=\psi(v)\varphi(v)/v$, V finite with mu(V)≤B for a fixed constant B, and E is contained in $$ \{(v,w):\max(v\psi(w),w\psi(v))\le t\gcd(v,w),\ L_t(v,w)\ge10\}. $$ Construct $G=(\mu,V,V,E,\varnothing,f,g)$, with $f,g$ the empty functions and $\mu(0)=0$ if a value at zero is needed. This is a finite weighted GCD graph by [F1], since the recorded-prime requirements are vacuous. Put $\delta=\mu(E)/\mu(V)^2$. If $\mu(E)=0$, including $\delta=0$, the desired bound is immediate. Otherwise $G$ is nontrivial. Then $\mu(E)\ll_B1/t$: if $\delta<1/t$, use $\mu(E)=\delta\mu(V)^2\le B^2/t$; if $t$ is bounded by a fixed threshold, use $\mu(E)\le B^2$ and enlarge the absolute constant. Otherwise delta≥1/t and sufficiently large t imply t≥10delta^-1/50. Apply the good-subgraph conclusion already proved. Write a,b for the terminal recorded products, d=gcd(a,b), and delta' for the terminal density. The prime factor in quality is at most an absolute constant times $$ \frac{ab}{d^2}\frac{ab}{\varphi(a)\varphi(b)}. \tag{12} $$ Indeed $\prod p^{|f-g|}=ab/d²$; the equal-positive-valuation factors $(1-1/p)^{-2}$ are bounded termwise by the corresponding factors in ab/(phi(a)phi(b)); and $\prod_p(1-p^{-s})^{-10}$ is bounded, because $-\log(1-p^{-s})\ll p^{-s}$ and $\sum_{n\ge2}n^{-s}<\infty$. Let w0 be the largest terminal right vertex and let E'' consist of edges whose left endpoint is a neighbor of w0. High degree in both orientations gives $$ \mu(E'')\ge(9/10)^2\delta'\mu(E'). $$ [given, F1, F2, F3, F4, F5, F6, F7, F8, F9, algebra]

2.1 Every vertex has positive neighbor mass, even if its own mass is zero, so largest neighbors exist. Let v_max(w) be the largest left neighbor of w. Every left endpoint in E'' has largest right neighbor w0. The edge inequality and gcd(v,w)=d imply $$ \psi(v)\le td/w0\quad((v,w)\in E''),\qquad \psi(w)\le td/v_{\max}(w). $$ Using $\varphi(v)/v\le\varphi(a)/a$ for $a\mid v$, and similarly for $b$, first sum only over $E''$, whose left endpoints satisfy the bound involving $w0$. By (12) and step 1.2, $$ q(G')\ll(\delta')^8\mu(E'')\frac{ab}{d^2}\frac{ab}{\varphi(a)\varphi(b)}\le t^2ab\sum_{(v,w)\in E''}\frac1{v_{\max}(w)w0}\le t^2ab\sum_{(v,w)\in E'}\frac1{v_{\max}(w)w0}. \tag{13} $$ Indeed $q(G')$ is at most $(\delta')^9\mu(E')$ times (12); replace $\mu(E')$ by $O(\mu(E'')/\delta')$, drop $(\delta')^8\le1$, bound the totient factors in each product weight, and apply the two $\psi$ inequalities only on $E''$. The last inequality enlarges a nonnegative sum, so it does not require the $w0$ bound on other left vertices. For each w=bw', there are at most v_max(w)/a eligible left multiples of a. There are at most w0/b right multiples. Thus the sum in (13) is ≤1/(ab), giving q(G')≪t². In the large-gain case q(G')≳delta t^50q(G), while initially q(G)=delta^9mu(E). Hence $$ \mu(E)\ll\delta^{-10}t^{-48}\le t^{-38}\le1/t. $$ In the other case q(G')≳q(G), and each edge has L_t(v',w')≥4. As v',w' are coprime, either v' or w' has reciprocal prime sum at least 2. For the first option [[lem-prime-reciprocal-sum-exponential-rarity]] bounds the number of left multiples for a fixed w by $O((v_{\max}(w)/a)e^{-2t})$. Summing gives $O(e^{-2t}/(ab))$. For the second option, first bound the left count by v_max(w)/a, then apply [[lem-prime-reciprocal-sum-exponential-rarity]] to w'≤w0/b, obtaining the same bound. Thus (13) gives q(G')≪t²e^-2t, and $$ \mu(E)=\delta^{-9}q(G)\ll t^{11}e^{-2t}\ll1/t. $$ This proves the full graph edge estimate, conditional only on the explicitly identified local first-Mertens supplier and elementary arithmetic/calculus/finite weighted counting used above. [given, F1, F2, F3, F4, F5, F6, F7, F8, F9, algebra] ∎
