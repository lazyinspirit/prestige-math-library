---
page: coxeter-presentations-exchange-and-reduced-word-theorems-examples
title: "Coxeter Presentations, Exchange, and Reduced Word Theorems — Examples"
status: published
items: []
examples: [ex-hh-rank-one-reduced-words, ex-hh-finite-dihedral-reduced-words, ex-hh-exchange-deletion-on-a-nonreduced-word, ex-hh-type-a-reduced-words-and-inversions, ex-hh-minimal-representatives-for-s2-in-s3]
---

Work out rank-one, finite dihedral and type-A reduced words, a nonreduced word deleted by exchange, and minimal representatives for S2⊂S3. No geometric braid-group construction is a prerequisite.

This companion is a dependency leaf: its five examples use only the theory of [[coxeter-presentations-exchange-and-reduced-word-theorems]] and that page's established prerequisite closure, and no other page or item depends on them. The examples involving the symmetric group display permutations on the letters $\{1,2,3\}$, identified with the library's $\{0,1,2\}$ by the order-preserving letter shift $j\mapsto j-1$ declared in [[ex-hh-type-a-reduced-words-and-inversions]]; the shift preserves inversion numbers and lengths.

[[ex-hh-rank-one-reduced-words]] computes the rank-one group $W=\{1,s\}$ with its two reduced words, its reflection and root sets and its faithful signed action. [[ex-hh-finite-dihedral-reduced-words]] exhibits the $2m$ normal forms $(st)^k$, $(st)^ks$ of a finite dihedral group, the reducedness of alternating words of length at most $m$, the length formulae $\ell((st)^k)=\min(2k,2(m-k))$ and $\ell((st)^ks)=\min(2k+1,2(m-k)-1)$, and the two braid-related reduced expressions of the longest element for even $m$. [[ex-hh-exchange-deletion-on-a-nonreduced-word]] runs the exchange step in $I_2(3)$, finds the repeated prefix reflection $r_1=r_4$ of the word $(s,t,s,t)$ that licenses the deletion of its first and last letter, and exhibits the failed deletion of the unequal-reflection pair at positions $1$ and $3$. [[ex-hh-type-a-reduced-words-and-inversions]] tabulates the six elements of $S_3$ with $\ell=\operatorname{inv}$, the reduced words of lengths $1$ and $2$, the two braid-related length-three expressions of the longest element, and the nonreduced word $(s_1,s_2,s_1,s_2)$ with its two-letter deletion. [[ex-hh-minimal-representatives-for-s2-in-s3]] enumerates the three left and three right cosets of $W_J=\{1,s_1\}$ in $S_3$, with their unique minimal representatives, the descent characterisations and the length-additivity identities.

The results tested here are proved on the theory page: the exchange and deletion statements of [[thm-hh-coxeter-exchange-deletion-and-faithfulness]], the rank-two computation and ambient reducedness of [[lem-hh-dihedral-root-recurrence-and-root-sign]], and the coset theorem with the type-A identification of [[thm-hh-parabolic-minimal-representatives-and-length-additivity]]. The computations are evidence within their finite scope and do not replace those proofs.
