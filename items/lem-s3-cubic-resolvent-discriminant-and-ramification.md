---
id: lem-s3-cubic-resolvent-discriminant-and-ramification
kind: lemma
title: "Cubic resolvent discriminants and total ramification"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 10
deps:
  - def-countable-choice
  - def-finite-galois-extension-and-galois-group
  - thm-local-different-exponent-as-ramification-group-sum
  - lem-different-is-transitive-in-towers-of-local-fields
  - cor-discriminant-valuation-from-different-exponents
  - thm-cauchy-frobenius-orbit-counting
  - thm-fundamental-identity-for-primes-in-number-fields
  - thm-galois-action-on-primes-above-a-prime-is-transitive
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Bhargava, Shankar, and Tsimerman, On the Davenport–Heilbronn Theorems and Second-Order Terms"
      url: "https://arxiv.org/pdf/1005.0672"
      locator: "§§8.1 and 8.5, equation (59): cubic fields without total ramification and quadratic 3-torsion; the local ramification-group proof below is derived locally."
---

## Statement

Assume Countable Choice. Let $L/\mathbb Q$ be a non-Galois cubic field, let $N$ be its Galois closure with $\operatorname{Gal}(N/\mathbb Q)\cong S_3$, and put $K=N^{A_3}$. For every rational prime $p$,
$$v_p(|D_L|)\ge v_p(|D_K|),$$
with equality if and only if $p$ is not totally ramified in $L$. These conditions are also equivalent to $N/K$ being unramified at the primes above $p$. The discriminants $D_L$ and $D_K$ have the same sign, and $|D_N|=|D_K|\,|D_L|^2$. Consequently $D_L=D_K$ exactly when no rational prime is totally ramified in $L$.

## Facts & Assumptions

**Given:** Countable Choice, the non-Galois cubic field, its $S_3$ closure, quadratic resolvent and a rational prime $p$.

[F1] For a finite Galois extension of nonarchimedean local fields, the different exponent is $\sum_{i\ge0}(|G_i|-1)$ for its lower ramification groups. [[thm-local-different-exponent-as-ramification-group-sum]]

[F2] In a tower of finite local extensions, different ideals are transitive. The valuation of a number-field discriminant is the sum of residue degrees times local different exponents. [[lem-different-is-transitive-in-towers-of-local-fields]] [[cor-discriminant-valuation-from-different-exponents]]

[F3] Finite group actions satisfy orbit–stabilizer and the orbit-count identity $\sum_{g\in J}|\operatorname{Fix}_X(g)|=|J|\,|J\backslash X|$. [[thm-cauchy-frobenius-orbit-counting]]

[F4] Decomposition-group orbits on embeddings index the primes of an intermediate field, and residue and ramification degrees multiply in a tower; their products sum to the extension degree. [[thm-galois-action-on-primes-above-a-prime-is-transitive]] [[thm-fundamental-identity-for-primes-in-number-fields]]

[A1] Countable Choice is the public hypothesis of the local different and tower suppliers. [[def-countable-choice]]

## Proof

1.1 Put $G=\operatorname{Gal}(N/\mathbb Q)$ and choose a prime of $N$ above $p$, with decomposition group $D$, inertia $I=I_0$ and lower ramification groups $I_i$. Let $X$ be a finite transitive $G$-set of size $d$, with stabilizer $H$, and let $E=N^H$. The $D$-orbits on $X$ index the primes $w$ of $E$ above $p$: primes of $N$ above $p$ form $G/D$ by [F4], and two contract to the same prime of $E$ exactly when they are in the same $H$-orbit. Inverting representatives identifies $H\backslash G/D$ with $D\backslash G/H$. For a representative $x$ of such an orbit, set $J_x=D\cap\operatorname{Stab}_G(x)$. Its local extension $N_P/E_w$ has Galois group $J_x$, and its lower ramification groups are $J_x\cap I_i$: both use the same valuation and the same defining condition on $\mathcal O_{N_P}$. [F1, F4, given, construct]

2.1 Write $d_N$ for the different exponent of $N_P/\mathbb Q_p$, $d_J$ for that of $N_P/E_w$, and $f_N$ for the residue degree of $N_P/\mathbb Q_p$. By [F1], $d_N-d_J=\sum_i(|I_i|-|I_i\cap J_x|)$. The tower formula [F2] gives $d_N=d_J+e(N_P/E_w)d(E_w/\mathbb Q_p)$, and the residue-degree tower law gives $f(E_w/\mathbb Q_p)=f_N/f(N_P/E_w)$. Since $e(N_P/E_w)f(N_P/E_w)=|J_x|$, the contribution of $w$ to $v_p(|D_E|)$ is $\frac{f_N}{|J_x|}\sum_{i\ge0}(|I_i|-|I_i\cap J_x|)$. Here $f_N=|D|/|I|$. [A1, F1, F2, F4, step 1.1, algebra]

3.1 Summing step 2.1 over $D$-orbits and using their sizes $|D|/|J_x|$ gives $v_p(|D_E|)=|I|^{-1}\sum_{i\ge0}\sum_{x\in X}(|I_i|-|I_i\cap\operatorname{Stab}_G(x)|)$. Each $I_i$ is normal in $D$, so the stabilizer intersection has constant cardinality on each $D$-orbit. The inner sum of stabilizer sizes counts pairs $(g,x)$ with $g\in I_i$ and $gx=x$; [F3] makes it $|I_i|\,|I_i\backslash X|$. Therefore $v_p(|D_E|)=\sum_{i\ge0}\frac{|I_i|}{|I|}\bigl(d-|I_i\backslash X|\bigr)$. All sums are finite by [F1]. [F1, F2, F3, step 1.1, step 2.1, algebra]

4.1 Apply step 3.1 to the three-element root set $X=G/\operatorname{Gal}(N/L)$ and the two-element set $Y=G/A_3$. For a subgroup $J\le S_3$, the difference $\bigl(3-|J\backslash X|\bigr)-\bigl(2-|J\backslash Y|\bigr)$ is $0$ for the trivial subgroup and for a subgroup of order $2$, is $2$ for $A_3$, and is $1$ for $S_3$. For the regular six-element $G$-set $Z=G$, the same four cases give $6-|J\backslash Z|=(2-|J\backslash Y|)+2(3-|J\backslash X|)$. Step 3.1 therefore gives $v_p(|D_N|)=v_p(|D_K|)+2v_p(|D_L|)$. Thus every term in $v_p(|D_L|)-v_p(|D_K|)$ is nonnegative; the $i=0$ term is positive exactly when $I$ contains a $3$-cycle. This proves the inequality and equality criterion in terms of inertia. [F3, step 3.1, algebra]

5.1 If $I$ contains a $3$-cycle, it acts transitively on the three roots, so its orbit on $X$ has size $3$. The ramification index of the corresponding prime of $L$ is that orbit size; [F4] then forces one prime above $p$ of ramification index $3$ and residue degree $1$. Conversely, total ramification gives an inertia orbit of size $3$, so $3\mid |I|$ and $I$ contains a $3$-cycle. The inertia group of $N/K$ at the chosen prime is $I\cap A_3$; it is trivial exactly when $I$ has no $3$-cycle. Conjugation gives the same conclusion for every prime above $p$. [F4, step 4.1, algebra]

6.1 Complex conjugation acts on the three embeddings of $L$ either trivially, when $L$ has three real embeddings, or as a transposition, when it has one real embedding. Its image in $G/A_3$ is correspondingly trivial or nontrivial, so $K$ is real in the first case and imaginary in the second. Thus $D_L$ and $D_K$ have the same sign. The primewise regular-action identity of step 4.1 gives $|D_N|=|D_K|\,|D_L|^2$. Combining the sign equality with steps 4.1–5.1 at every prime proves the final assertion. [step 4.1, step 5.1, algebra] ∎
