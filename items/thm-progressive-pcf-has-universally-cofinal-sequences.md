---
id: thm-progressive-pcf-has-universally-cofinal-sequences
kind: theorem
title: Progressive pcf has universally cofinal sequences
status: draft
origin: pipeline
deps: [lem-progressive-products-and-true-cofinality-transfers, lem-pcf-cofinality-ideals-and-cutoff-conventions, thm-pcf-ideal-directedness-and-ultrafilter-cofinality-cutoffs, def-axiom-of-choice, thm-cofinality-basics, thm-regularity-of-the-alephs, thm-transfinite-recursion, lem-cardinal-arithmetic-basic-laws, cor-cardinal-absorption, thm-ultrafilter-characterisation]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: "Abraham and Magidor, Cardinal Arithmetic, Definition 4.1 and Theorem 4.2, pp. 37–39"
      url: https://winterschool.eu/files/3-Cardinal_Arithmetic.pdf
---

## Statement

Assume AC. If $A$ is a nonempty progressive set of infinite regular cardinals and $\lambda\in\operatorname{pcf}(A)$, there is a sequence $(f_\xi)_{\xi<\lambda}$ in $\prod A$ strictly increasing modulo $J_{<\lambda}[A]$ and cofinal in $\prod A/D$ for every ultrafilter $D$ on $A$ whose product cofinality is $\lambda$. Such a sequence is called **universally cofinal for $\lambda$**. The assertion includes finite $A$ and $\lambda=\min A$; it does not assume the ideal contains every singleton.

## Facts & Assumptions

**Given:** AC, progressive $A$ and $\lambda\in\operatorname{pcf}(A)$; put $I=J_{<\lambda}[A]$.

[F1] Ultraproducts are linear without a last element, have infinite regular cofinality at least the smallest coordinate, and preserve cofinality upon restriction to an ultrafilter support; finite PCF equals the coordinate set ([[lem-progressive-products-and-true-cofinality-transfers]]).

[F2] $I$ is proper, restricts to subsets, and contains $\{a\}$ exactly when $a<\lambda$ ([[lem-pcf-cofinality-ideals-and-cutoff-conventions]]).

[F3] The product modulo $I$ is $\lambda$-directed, and every ultrafilter of cofinality $\lambda$ avoids $I$ ([[thm-pcf-ideal-directedness-and-ultrafilter-cofinality-cutoffs]]).

[F4] A subset smaller than the cofinality of a limit ordinal is bounded; in particular smaller subsets of a regular cardinal are bounded ([[thm-cofinality-basics]], (c)–(d)).

[F5] Successor cardinals are regular under AC ([[thm-regularity-of-the-alephs]], (b)).

[F6] Specified rules recurse on well-orders ([[thm-transfinite-recursion]]).

[F7] An ultrafilter contains exactly one of each subset and its complement ([[thm-ultrafilter-characterisation]]).

[A1] AC selects cofinal-family representatives, witness ultrafilters and bounds from nonempty sets ([[def-axiom-of-choice]]).

## Proof

1.1 If $A$ is finite, F1 gives $\lambda\in A$ and F2 gives $I=\mathcal P(\{a\in A:a<\lambda\})$. Every ultrafilter on finite $A$ is principal: otherwise it would contain the complement of each singleton, whose finite intersection is empty. By F1 its cofinality equals its supporting coordinate, so the only cofinality-$\lambda$ ultrafilter is principal at $\lambda$. Set $f_\xi(a)=\xi$ for $a\ge\lambda$ and $f_\xi(a)=0$ for $a<\lambda$. These are product members and form a strict $I$-chain because all comparison failures lie in the displayed small set. At coordinate $\lambda$, their values enumerate every ordinal below $\lambda$, proving universality. For any $A$ with $\lambda=\min A$, instead set $f_\xi(a)=\xi$ everywhere. An ultrafilter of cofinality $\lambda$ cannot contain $A\setminus\{\lambda\}$: if this set is nonempty, its least coordinate is greater than $\lambda$, so F1's support restriction and cofinality lower bound would give cofinality greater than $\lambda$. Hence it is principal at $\lambda$, and the same calculation proves universality. [F1, F2, F7, given]

2.1 Now let $A$ be infinite, $\tau=|A|$, and $\lambda>\min A$. Then $\lambda>\tau^+$, since progressiveness implies $\min A\ge\tau^+$. Remove $S=A\cap\{\tau^+\}$, which is $I$-small by F2, and put $A'=A\setminus S$. Every cofinality-$\lambda$ ultrafilter avoids $S$ by F3 and so contains $A'$. Restriction and zero extension preserve comparisons modulo $I$ and $I'=I\cap\mathcal P(A')$: their failure sets differ only on $S$. By F1 they also preserve the relevant ultrafilter cofinalities in both directions. The remaining infinite support satisfies $|A'|\le\tau$ and $\min A'>\tau^+$; it remains progressive. Thus proving universality there and extending by zero proves it on $A$. Relabel $A',I'$ as $A,I$ for the following construction, retaining the bound $|A|\le\tau<\tau^+<\min A$ and $\tau^+<\lambda$. [step 1.1, F1, F2, F3, F7]

3.1 Suppose no universal sequence exists on this reduced support. We construct columns $(f^\alpha_\xi)_{\xi<\lambda}$ for $\alpha<\tau^+$. Each column will be strictly $I$-increasing, while for fixed $\xi$ the row is pointwise nondecreasing in $\alpha$. Begin with a strict $\lambda$-chain: at index $\xi$, F3 bounds the fewer than $\lambda$ earlier functions, and adding one coordinatewise makes a strict bound. At a nonzero limit column $\delta<\tau^+$, put $r_\xi(a)=\sup_{\alpha<\delta}f^\alpha_\xi(a)$. There are at most $\tau<a=\operatorname{cf}(a)$ values, so $r_\xi(a)<a$ by F4. Recursively in $\xi$, let $b_\xi$ weakly bound all earlier entries in this new column by F3, and set $f^\delta_\xi(a)=\max\{b_\xi(a),r_\xi(a)\}+1$. This is a product member, strictly bounds its column predecessors modulo $I$, and dominates all preceding entries in its row. Fix choice functions on the set of nonempty bound sets by AC before these F6 recursions. [step 2.1, F3, F4, F6, A1]

4.1 Given column $\alpha$, the assumed failure of universality supplies an ultrafilter $D_\alpha$ of cofinality $\lambda$ in which the column is noncofinal. By F1, a point witnessing noncofinality in this linear order strictly bounds the whole column; select a representative $t_\alpha\in\prod A$. Select representatives $(q^\alpha_\xi)_{\xi<\lambda}$ of a cofinal family in that quotient, whose size is $\lambda$ by definition. Put $f^{\alpha+1}_0=\max\{t_\alpha,f^\alpha_0,q^\alpha_0\}+1$ pointwise. For $0<\xi<\lambda$, take an $I$-bound $b_\xi$ for earlier new-column entries by F3 and set $f^{\alpha+1}_\xi=\max\{b_\xi,f^\alpha_\xi,q^\alpha_\xi\}+1$. These finite maxima and successors remain below each infinite cardinal coordinate. This makes the new column strictly $I$-increasing, pointwise above the old row, and cofinal modulo $D_\alpha$ because it dominates each $q^\alpha_\xi$. Moreover $f^\alpha_\xi<_{D_\alpha}f^{\alpha+1}_0$ for every $\xi$. All witness choices range over sets of ultrafilters, product functions and sequences; fix choice functions by AC, then F6 gives the outer recursion through $\tau^+$. [step 3.1, F1, F3, F6, A1]

5.1 Put $h(a)=\sup_{\alpha<\tau^+}f^\alpha_0(a)$. Since $\tau^+<\min A$ and coordinates are regular, F4 gives $h\in\prod A$. For each $\alpha<\tau^+$, choose the least $i_\alpha<\lambda$ with $h<_{D_\alpha}f^{\alpha+1}_{i_\alpha}$. It exists: cofinality of that column dominates $h+1$ weakly and hence $h$ strictly. By F1 $\lambda$ is regular and $\tau^+<\lambda$, so F4 gives a single $i<\lambda$ greater than all $i_\alpha$. Since $D_\alpha$ avoids $I$ by F3, the strict comparisons in column $\alpha+1$ pass to $D_\alpha$; thus $h<_{D_\alpha}f^{\alpha+1}_i$ for every $\alpha$. [step 2.1, step 4.1, F1, F3, F4, F7]

6.1 Define $T_\alpha=\{a\in A:h(a)\le f^\alpha_i(a)\}$. The pointwise row monotonicity gives $T_\alpha\subseteq T_\beta$ for $\alpha<\beta$. Step 4.1 gives $f^\alpha_i<_{D_\alpha}f^{\alpha+1}_0\le h$, so $T_\alpha\notin D_\alpha$; step 5.1 gives $T_{\alpha+1}\in D_\alpha$. Therefore $T_{\alpha+1}\setminus T_\alpha$ is nonempty. Taking its least coordinate gives distinct elements of $A$ for all $\alpha<\tau^+$, since these successive differences of a nested family are pairwise disjoint. This injects $\tau^+$ into a set of cardinality at most $\tau$, impossible by the definition of successor cardinal. (F5 ensures that $\tau^+$ is an infinite limit ordinal, so $\alpha+1<\tau^+$ at every stage.) Hence a universal sequence exists on the reduced support. Restoring the removed coordinates by zero as in step 2.1 gives one on the original support, and step 1.1 supplies all excluded finite and minimum-coordinate cases. QED. [step 1.1, step 2.1, step 3.1, step 4.1, step 5.1, F5, F7]
