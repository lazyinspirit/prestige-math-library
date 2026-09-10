# Group a Step 6B review

## Batch 1 — 6b-a-1

Authored-content review only. No scheduling, stamps, publication or other-batch edits. Decisions below are local mathematical review; final engine gates remain pending.

### `def-measure-preserving-transformation-and-system` — accepted

Authored source metadata (locators retained; not a claim of independently retrieving every listed source):

```yaml
- title: E–W Definition 2.1, pp.13–14
      url: https://maths.qmul.ac.uk/~fvivaldi/teaching/ETAD/NotesI.pdf
```

Claim/conventions: Let $(X,\mathcal A,\mu)$ be a measure space. A measurable self-map $T:X\to X$ is **measure preserving** if $\mu(T^{-1}E)=\mu(E)$ for every $E\in\mathcal A$. The quadruple $(X,\mathcal A,\mu,T)$ is a **measure-preserving system**; it is a probability system if $\mu(X)=1$. Here $T^{-1}E=\{x:T(x)\in E\}$ denotes an inverse image, whether or not $T$ is invertible. Neither completeness nor finiteness is implicit. The measure-space and measurable-map conventions are [[def-measure-space]] and [[def-measurable-function-between-measurable-spaces]].

Evidence: Inverse-image definition permits arbitrary measures and explicitly normalizes probability; no inverse or completeness is assumed.

Dependencies: def-measure-space, def-measurable-function-between-measurable-spaces. Source: `items/def-measure-preserving-transformation-and-system.md`, Facts/Definition and numbered proof; source URLs/locators retained in its frontmatter and owning contract. No repair or unresolved mathematical obligation. Local structural checks: passed in the final scoped receipt below. No outstanding item action.

### `def-invertible-measure-preserving-system` — accepted

Authored source metadata (locators retained; not a claim of independently retrieving every listed source):

```yaml
- title: Einsiedler–Ward Definition 2.1 p.13 and conull restriction convention in Definition 2.7 p.16
      url: https://maths.qmul.ac.uk/~fvivaldi/teaching/ETAD/NotesI.pdf
```

Claim/conventions: A system in [[def-measure-preserving-transformation-and-system]] is **invertible** if $T$ is a bijection and $T^{-1}:X\to X$ is measurable. It is **invertible modulo null sets** if there is a measurable $X_0\subseteq X$ with $\mu(X\setminus X_0)=0$ and $T(X_0)=X_0$, such that $T|_{X_0}$ is a bijection with measurable inverse for the trace sigma-algebra. This is an actual invariant conull restriction, not a choice of arbitrary pointwise inverses on exceptional sets.

Evidence: Actual inverse and measurable invariant conull restriction are distinguished; zero-measure empty restriction is allowed.

Dependencies: def-measure-preserving-transformation-and-system. Source: `items/def-invertible-measure-preserving-system.md`, Facts/Definition and numbered proof; source URLs/locators retained in its frontmatter and owning contract. No repair or unresolved mathematical obligation. Local structural checks: passed in the final scoped receipt below. No outstanding item action.

### `thm-measure-preservation-on-a-generating-pi-system` — accepted

Authored source metadata (locators retained; not a claim of independently retrieving every listed source):

```yaml
- title: E–W §2.1 p.13; local sigma-finite uniqueness theorem
      url: https://maths.qmul.ac.uk/~fvivaldi/teaching/ETAD/NotesI.pdf
```

Claim/conventions: Let $T:X\to X$ be measurable on $(X,\mathcal A,\mu)$. Let $\mathcal P$ be a pi-system generating $\mathcal A$, with an increasing sequence $P_n\in\mathcal P$ covering $X$ and satisfying $\mu(P_n)<\infty$. If $\mu(T^{-1}P)=\mu(P)$ for every $P\in\mathcal P$, then $T$ preserves $\mu$. For finite $\mu$, a generating pi-system can be enlarged by $X$ to meet the exhaustion condition.

Evidence: Steps 1.1–3.1 construct the pullback measure and meet every exhaustion hypothesis of thm-measure-uniqueness-on-a-sigma-finite-pi-system; adjoining X is valid for finite mass.

Dependencies: def-measure-preserving-transformation-and-system, thm-measure-uniqueness-on-a-sigma-finite-pi-system. Source: `items/thm-measure-preservation-on-a-generating-pi-system.md`, Facts/Definition and numbered proof; source URLs/locators retained in its frontmatter and owning contract. No repair or unresolved mathematical obligation. Local structural checks: passed in the final scoped receipt below. No outstanding item action.

### `prop-measure-preserving-compositions-iterates-and-completions` — accepted

Authored source metadata (locators retained; not a claim of independently retrieving every listed source):

```yaml
- title: Einsiedler–Ward Exercise 2.1.3, p.19; Sarig Proposition 1.4 preservation proof, p.8
      url: https://www.weizmann.ac.il/math/sarigo/sites/math.sarigo/files/uploads/ergodicnotes.pdf
```

Claim/conventions: Compositions and nonnegative iterates of measure-preserving self-maps of $(X,\mathcal A,\mu)$ preserve measure. Assuming countable choice, $T$ also defines a measurable measure-preserving self-map of the completion $(X,\overline{\mathcal A},\overline\mu)$. Countable choice is needed here only for the cited construction of the completion measure.

Evidence: Composition order and n=0 are correct. Completion pullback uses original measurable A,N and inherits countable choice only for the completion construction.

Dependencies: def-measure-preserving-transformation-and-system, thm-completion-of-a-measure-space, def-countable-choice, def-completion-of-a-measure-space. Source: `items/prop-measure-preserving-compositions-iterates-and-completions.md`, Facts/Definition and numbered proof; source URLs/locators retained in its frontmatter and owning contract. No repair or unresolved mathematical obligation. Local structural checks: passed in the final scoped receipt below. No outstanding item action.

### `thm-integrals-are-invariant-under-measure-preserving-maps` — accepted

Authored source metadata (locators retained; not a claim of independently retrieving every listed source):

```yaml
- title: E–W Lemma 2.6, pp.15–16
      url: https://maths.qmul.ac.uk/~fvivaldi/teaching/ETAD/NotesI.pdf
```

Claim/conventions: If $T$ preserves $\mu$ and $f:X\to[0,\infty]$ is measurable, then $\int f\circ T\,d\mu=\int f\,d\mu$, allowing infinity. If $f$ is integrable real or complex valued, $f\circ T$ is integrable and the same equality holds. Conversely, for a measurable self-map, equality for every measurable indicator implies measure preservation.

Evidence: Indicators and nonnegative simple approximation plus monotone convergence prove the extended identity; modulus integrability licenses componentwise subtraction; indicator converse is exact.

Dependencies: def-measure-preserving-transformation-and-system, thm-increasing-simple-approximation-of-a-nonnegative-measurable-function,
  thm-monotone-convergence-for-the-integral, thm-linearity-of-the-lebesgue-integral-on-l-one. Source: `items/thm-integrals-are-invariant-under-measure-preserving-maps.md`, Facts/Definition and numbered proof; source URLs/locators retained in its frontmatter and owning contract. No repair or unresolved mathematical obligation. Local structural checks: passed in the final scoped receipt below. No outstanding item action.

### `def-koopman-operator-on-l-p` — accepted

Authored source metadata (locators retained; not a claim of independently retrieving every listed source):

```yaml
- title: E–W §2.4 pp.28–29; Sarig Proposition 1.3
      url: https://maths.qmul.ac.uk/~fvivaldi/teaching/ETAD/NotesI.pdf
```

Claim/conventions: For a system in [[def-measure-preserving-transformation-and-system]] and $1\le p\le\infty$, the **Koopman operator** is $U_T:L^p(\mu)\to L^p(\mu)$, $U_T[f]=[f\circ T]$. Scalars can be real or complex, using [[def-l-p-space-as-a-quotient-by-null-functions]] and [[def-complex-lp-and-euclidean-test-function-conventions]]. Membership and representative independence, and hence well-definedness, are proved in [[thm-koopman-operator-is-a-linear-isometry-on-l-p]].

Evidence: The quotient definition explicitly defers membership and representative independence to the following declared justified_by theorem.

Dependencies: def-measure-preserving-transformation-and-system, def-l-p-space-as-a-quotient-by-null-functions, def-complex-lp-and-euclidean-test-function-conventions. Source: `items/def-koopman-operator-on-l-p.md`, Facts/Definition and numbered proof; source URLs/locators retained in its frontmatter and owning contract. No repair or unresolved mathematical obligation. Local structural checks: passed in the final scoped receipt below. No outstanding item action.

### `thm-koopman-operator-is-a-linear-isometry-on-l-p` — accepted

Authored source metadata (locators retained; not a claim of independently retrieving every listed source):

```yaml
- title: Einsiedler–Ward §2.4 opening, pp.28–29 (isometry paragraph, not Lemma 2.18)
      url: https://maths.qmul.ac.uk/~fvivaldi/teaching/ETAD/NotesI.pdf
```

Claim/conventions: For a measure-preserving system and $1\le p\le\infty$, $U_T$ is a well-defined linear isometry on real or complex $L^p$. It is surjective for an invertible system, and also for a system invertible modulo null sets in the invariant-restriction convention.

Evidence: Steps 1.1–5.1 check null pullbacks, finite-p integrals, equality of all essential bounds and linear quotient operations. The measurable restricted inverse preserves restricted measure; zero extension gives surjectivity even without completeness.

Dependencies: def-koopman-operator-on-l-p, thm-integrals-are-invariant-under-measure-preserving-maps, thm-the-l-p-norm-descends-to-the-quotient-and-makes-l-p-a-normed-space,
  prop-essential-supremum-is-attained-as-the-least-essential-bound, thm-complex-holder-minkowski-and-the-quotient-norm, def-invertible-measure-preserving-system. Source: `items/thm-koopman-operator-is-a-linear-isometry-on-l-p.md`, Facts/Definition and numbered proof; source URLs/locators retained in its frontmatter and owning contract. No repair or unresolved mathematical obligation. Local structural checks: passed in the final scoped receipt below. No outstanding item action.

### `def-strict-and-mod-null-invariant-sigma-algebras` — accepted

Authored source metadata (locators retained; not a claim of independently retrieving every listed source):

```yaml
- title: E–W Proposition 2.14; Sarig Proposition 1.1
      url: https://maths.qmul.ac.uk/~fvivaldi/teaching/ETAD/NotesI.pdf
```

Claim/conventions: For a system in [[def-measure-preserving-transformation-and-system]], set
$$\mathcal I=\{E\in\mathcal A:T^{-1}E=E\},\qquad \mathcal I'=\{E\in\mathcal A:\mu(T^{-1}E\mathbin\triangle E)=0\}.$$
These are respectively the **strictly invariant** and **invariant modulo null sets** families. All their members are measurable in the original sigma-algebra; the terminology uses [[def-sigma-algebra]] and [[def-measure-null-set-and-almost-everywhere]]. Their sigma-algebra property is proved in [[prop-invariant-families-are-sigma-algebras]].

Evidence: Both families contain only originally measurable sets and explicitly defer sigma-algebra closure to the declared local supplier.

Dependencies: def-measure-preserving-transformation-and-system, def-sigma-algebra, def-measure-null-set-and-almost-everywhere. Source: `items/def-strict-and-mod-null-invariant-sigma-algebras.md`, Facts/Definition and numbered proof; source URLs/locators retained in its frontmatter and owning contract. No repair or unresolved mathematical obligation. Local structural checks: passed in the final scoped receipt below. No outstanding item action.

### `prop-invariant-families-are-sigma-algebras` — accepted

Authored source metadata (locators retained; not a claim of independently retrieving every listed source):

```yaml
- title: Sarig Proposition 1.1 proof; E–W Proposition 2.14
      url: https://www.weizmann.ac.il/math/sarigo/sites/math.sarigo/files/uploads/ergodicnotes.pdf
```

Claim/conventions: For any measure-preserving system, $\mathcal I$ and $\mathcal I'$ are sigma-algebras on $X$, and $\mathcal I\subseteq\mathcal I'$.

Evidence: Complement identity and countable union symmetric-difference inclusion prove closure; exact invariance implies null difference, including empty and zero-measure cases.

Dependencies: def-strict-and-mod-null-invariant-sigma-algebras, thm-finite-and-countable-subadditivity-of-measures. Source: `items/prop-invariant-families-are-sigma-algebras.md`, Facts/Definition and numbered proof; source URLs/locators retained in its frontmatter and owning contract. No repair or unresolved mathematical obligation. Local structural checks: passed in the final scoped receipt below. No outstanding item action.

### `lem-mod-null-invariant-sets-have-strictly-invariant-representatives` — accepted

Authored source metadata (locators retained; not a claim of independently retrieving every listed source):

```yaml
- title: E–W Proposition 2.14 pp.23–24; Sarig Proposition 1.1 pp.5–6
      url: https://maths.qmul.ac.uk/~fvivaldi/teaching/ETAD/NotesI.pdf
```

Claim/conventions: If $E\in\mathcal I'$ in a measure-preserving system, then
$$F=\limsup_{n\to\infty}T^{-n}E=\bigcap_{m\ge0}\bigcup_{n\ge m}T^{-n}E$$
belongs to $\mathcal I$ and satisfies $\mu(E\mathbin\triangle F)=0$. This does not require completeness or a choice axiom.

Evidence: Telescoping inverse iterates give measurable null differences; their explicit countable union controls the limsup representative. Shifting the limsup gives exact invariance without completeness or choice.

Dependencies: prop-invariant-families-are-sigma-algebras, prop-measure-preserving-compositions-iterates-and-completions, thm-finite-and-countable-subadditivity-of-measures. Source: `items/lem-mod-null-invariant-sets-have-strictly-invariant-representatives.md`, Facts/Definition and numbered proof; source URLs/locators retained in its frontmatter and owning contract. No repair or unresolved mathematical obligation. Local structural checks: passed in the final scoped receipt below. No outstanding item action.

### `def-ergodic-measure-preserving-system` — accepted

Authored source metadata (locators retained; not a claim of independently retrieving every listed source):

```yaml
- title: Sarig Definition 1.4 p.5
      url: https://www.weizmann.ac.il/math/sarigo/sites/math.sarigo/files/uploads/ergodicnotes.pdf
```

Claim/conventions: A measure-preserving system is **ergodic for $\mu$** if each $E\in\mathcal I$ has $\mu(E)=0$ or $\mu(X\setminus E)=0$, with $\mathcal I$ as in [[def-strict-and-mod-null-invariant-sigma-algebras]]. For a probability system this means $\mu(E)\in\{0,1\}$. The definition is relative to the invariant measure; no probability assumption is implicit in the general null/conull formulation.

Evidence: Null/conull definition correctly covers general measures; probability specialization follows by finite additivity.

Dependencies: def-strict-and-mod-null-invariant-sigma-algebras. Source: `items/def-ergodic-measure-preserving-system.md`, Facts/Definition and numbered proof; source URLs/locators retained in its frontmatter and owning contract. No repair or unresolved mathematical obligation. Local structural checks: passed in the final scoped receipt below. No outstanding item action.

### `thm-ergodicity-and-invariant-functions` — accepted

Authored source metadata (locators retained; not a claim of independently retrieving every listed source):

```yaml
- title: E–W Proposition 2.14 pp.23–25; Sarig Proposition 1.1
      url: https://maths.qmul.ac.uk/~fvivaldi/teaching/ETAD/NotesI.pdf
```

Claim/conventions: For a measure-preserving probability system the following are equivalent: (i) ergodicity; (ii) every $E\in\mathcal I'$ is null or conull; (iii) every measurable real-valued function satisfying $f\circ T=f$ everywhere is constant a.e.; (iv) every measurable real-valued function satisfying $f\circ T=f$ a.e. is constant a.e. Replacing real-valued by complex-valued in either (iii) or (iv) gives equivalent conditions. All functions take finite values.

Evidence: All equivalence directions close: strict representatives transfer the set criterion; the unique positive fiber at each 1/n scale has mass one; its conull intersection is nonempty and forces a finite constant. Real and imaginary components and indicator converses are valid without countable choice.

Dependencies: def-ergodic-measure-preserving-system, lem-mod-null-invariant-sets-have-strictly-invariant-representatives, def-measurable-function-between-measurable-spaces,
  def-complex-lp-and-euclidean-test-function-conventions, thm-finite-and-countable-subadditivity-of-measures, lem-integer-part,
  cor-archimedean-reciprocal. Source: `items/thm-ergodicity-and-invariant-functions.md`, Facts/Definition and numbered proof; source URLs/locators retained in its frontmatter and owning contract. No repair or unresolved mathematical obligation. Local structural checks: passed in the final scoped receipt below. No outstanding item action.

### `prop-ergodic-positive-sets-sweep-out-almost-every-point` — accepted

Authored source metadata (locators retained; not a claim of independently retrieving every listed source):

```yaml
- title: E–W Proposition 2.14 pp.24–25
      url: https://maths.qmul.ac.uk/~fvivaldi/teaching/ETAD/NotesI.pdf
```

Claim/conventions: In a measure-preserving probability system the following are equivalent: ergodicity; for every measurable $A$ with $\mu(A)>0$, $\mu(\bigcup_{n\ge1}T^{-n}A)=1$; and for every measurable $A,B$ of positive measure there is $n\ge1$ with $\mu(B\cap T^{-n}A)>0$.

Evidence: Sweep-out is modulo-null invariant because its pullback is nested with equal finite measure. Countable subadditivity supplies a positive intersection; an invariant set and its complement prove the converse.

Dependencies: thm-ergodicity-and-invariant-functions, prop-measure-preserving-compositions-iterates-and-completions, prop-measure-of-a-set-difference,
  thm-finite-and-countable-subadditivity-of-measures. Source: `items/prop-ergodic-positive-sets-sweep-out-almost-every-point.md`, Facts/Definition and numbered proof; source URLs/locators retained in its frontmatter and owning contract. No repair or unresolved mathematical obligation. Local structural checks: passed in the final scoped receipt below. No outstanding item action.

### `def-strong-and-weak-mixing` — accepted

Authored source metadata (locators retained; not a claim of independently retrieving every listed source):

```yaml
- title: E–W Definitions 2.32 and 2.35, pp.49–50
      url: https://maths.qmul.ac.uk/~fvivaldi/teaching/ETAD/NotesI.pdf
```

Claim/conventions: For a measure-preserving probability system as in [[def-measure-preserving-transformation-and-system]], put $d_n(A,B)=\mu(A\cap T^{-n}B)-\mu(A)\mu(B)$ for measurable $A,B$ and $n\ge0$. The system is **strongly mixing** if $d_n(A,B)\to0$ for every such pair. It is **weakly mixing** if
$$\frac1N\sum_{n=0}^{N-1}|d_n(A,B)|\longrightarrow0\quad(N\to\infty)$$
for every such pair. The absolute value is inside the average. In all cases $N\ge1$ and $T^0$ is the identity.

Evidence: Probability normalization, n=0, and absolute value inside the Cesaro average are explicit.

Dependencies: def-measure-preserving-transformation-and-system. Source: `items/def-strong-and-weak-mixing.md`, Facts/Definition and numbered proof; source URLs/locators retained in its frontmatter and owning contract. No repair or unresolved mathematical obligation. Local structural checks: passed in the final scoped receipt below. No outstanding item action.

### `thm-mixing-implies-weak-mixing-implies-ergodicity` — accepted

Authored source metadata (locators retained; not a claim of independently retrieving every listed source):

```yaml
- title: E–W §2.7 pp.49–50; Sarig Proposition 1.2
      url: https://maths.qmul.ac.uk/~fvivaldi/teaching/ETAD/NotesI.pdf
```

Claim/conventions: Every strongly mixing probability system is weakly mixing, and every weakly mixing probability system is ergodic.

Evidence: Finite initial segment plus small tail proves Cesaro convergence; testing an invariant set against itself forces its mass to be zero or one.

Dependencies: def-strong-and-weak-mixing, def-ergodic-measure-preserving-system. Source: `items/thm-mixing-implies-weak-mixing-implies-ergodicity.md`, Facts/Definition and numbered proof; source URLs/locators retained in its frontmatter and owning contract. No repair or unresolved mathematical obligation. Local structural checks: passed in the final scoped receipt below. No outstanding item action.

### `lem-finite-measure-sets-are-approximable-by-a-generating-algebra` — accepted

Authored source metadata (locators retained; not a claim of independently retrieving every listed source):

```yaml
- title: E–W Proposition 2.15 proof and Exercise 2.7.3
      url: https://maths.qmul.ac.uk/~fvivaldi/teaching/ETAD/NotesI.pdf
```

Claim/conventions: If $\mu(X)<\infty$ and an algebra $\mathcal C$ of subsets of X generates $\mathcal A$, then for every $E\in\mathcal A$ and $\varepsilon>0$ there is $C\in\mathcal C$ with $\mu(E\mathbin\triangle C)<\varepsilon$.

Evidence: The approximable family is complement closed; finite mass and continuity from below reduce countable unions to finitely many approximants. Finite choices suffice, and generated-sigma-algebra minimality closes the proof.

Dependencies: thm-continuity-from-below-for-measures, thm-finite-and-countable-subadditivity-of-measures, def-generated-sigma-algebra,
  thm-generated-sigma-algebra-exists-and-is-minimal, def-algebra-of-subsets. Source: `items/lem-finite-measure-sets-are-approximable-by-a-generating-algebra.md`, Facts/Definition and numbered proof; source URLs/locators retained in its frontmatter and owning contract. No repair or unresolved mathematical obligation. Local structural checks: passed in the final scoped receipt below. No outstanding item action.

### `thm-mixing-is-checkable-on-a-generating-pi-system` — accepted

Authored source metadata (locators retained; not a claim of independently retrieving every listed source):

```yaml
- title: Einsiedler–Ward Exercise 2.7.3(1)–(2), pp.52–53; local Boolean-algebra extension from a pi-system
      url: https://maths.qmul.ac.uk/~fvivaldi/teaching/ETAD/NotesI.pdf
```

Claim/conventions: Let $(X,\mathcal A,\mu,T)$ be a measure-preserving probability system and $\mathcal P$ a generating pi-system containing X. Strong mixing is equivalent to $d_n(A,B)\to0$ for $A,B\in\mathcal P$. Weak mixing is equivalent to $N^{-1}\sum_{n<N}|d_n(A,B)|\to0$ for $A,B\in\mathcal P$, where $d_n(A,B)=\mu(A\cap T^{-n}B)-\mu(A)\mu(B)$.

Evidence: Finite Boolean indicator expansion is valid because the pi-system contains X and is closed under intersections. Bilinearity extends either convergence to its algebra; the uniform 4-delta symmetric-difference error transfers strong and absolute-Cesaro convergence. Both converses are restrictions.

Dependencies: def-strong-and-weak-mixing, lem-finite-measure-sets-are-approximable-by-a-generating-algebra, thm-finite-and-countable-subadditivity-of-measures,
  thm-linearity-of-the-lebesgue-integral-on-l-one. Source: `items/thm-mixing-is-checkable-on-a-generating-pi-system.md`, full numbered argument and owning contract; precise source references below. No repair or unresolved mathematical obligation. Local structural checks: passed in the final scoped receipt below. No outstanding item action.

### `prop-mixing-correlations-extend-to-l-two` — accepted

Authored source metadata (locators retained; not a claim of independently retrieving every listed source):

```yaml
- title: Sarig Proposition 1.3 p.7; E–W Exercise 2.7.7
      url: https://www.weizmann.ac.il/math/sarigo/sites/math.sarigo/files/uploads/ergodicnotes.pdf
```

Claim/conventions: On a measure-preserving probability system, for complex $f,g\in L^2(\mu)$ put
$$C_n(f,g)=\int(f\circ T^n)\overline g\,d\mu-\left(\int f\,d\mu\right)\overline{\left(\int g\,d\mu\right)}.$$
Strong mixing is equivalent to $C_n(f,g)\to0$ for all such f,g. Weak mixing is equivalent to $N^{-1}\sum_{n<N}|C_n(f,g)|\to0$ for all such f,g. The pairing is linear in its first variable.

Evidence: All products and means exist by complex Cauchy–Schwarz and probability normalization. Sesquilinearity places conjugates correctly; the uniform error 2 delta (norm(g)+norm(f)+delta) transfers each convergence. Only the choice-free finite-simple density clause is used; indicators prove both converses.

Dependencies: def-strong-and-weak-mixing, thm-koopman-operator-is-a-linear-isometry-on-l-p, cor-cauchy-schwarz-inequality-for-l-two,
  def-complex-lp-and-euclidean-test-function-conventions, thm-complex-finite-simple-and-smooth-compact-support-density-for-finite-p,
  thm-complex-l-two-inner-product-is-well-defined-and-cauchy-schwarz, thm-complex-holder-minkowski-and-the-quotient-norm. Source: `items/prop-mixing-correlations-extend-to-l-two.md`, full numbered argument and owning contract; precise source references below. No repair or unresolved mathematical obligation. Local structural checks: passed in the final scoped receipt below. No outstanding item action.

### `ex-two-point-preserving-permutation` — accepted

Authored source metadata (locators retained; not a claim of independently retrieving every listed source):

```yaml
- title: Einsiedler–Ward Definition 2.1, p.13; explicit finite specialization
      url: https://maths.qmul.ac.uk/~fvivaldi/teaching/ETAD/NotesI.pdf
```

Claim/conventions: On $X=\{0,1\}$, $\mathcal A=\mathcal P(X)$ and $\mu(E)=|E|/2$, the swap $T(0)=1$, $T(1)=0$ is a measure-preserving probability transformation.

Evidence: All four subsets and inverse images are enumerated; a disjoint family has at most two nonempty members, proving the stated probability measure and preservation.

Dependencies: def-measure-preserving-transformation-and-system. Source: `items/ex-two-point-preserving-permutation.md`, full numbered argument and owning contract; precise source references below. No repair or unresolved mathematical obligation. Local structural checks: passed in the final scoped receipt below. No outstanding item action.

### `cex-identity-on-two-points-is-not-ergodic` — accepted

Authored source metadata (locators retained; not a claim of independently retrieving every listed source):

```yaml
- title: Sarig Definition 1.4, p.5; explicit finite witness
      url: https://www.weizmann.ac.il/math/sarigo/sites/math.sarigo/files/uploads/ergodicnotes.pdf
```

Claim/conventions: The assertion “every measure-preserving probability transformation is ergodic” is false.

Evidence: The identity preserves all four subsets, but the singleton and its complement both have mass one-half; this refutes exactly the assertion stated.

Dependencies: def-ergodic-measure-preserving-system. Source: `items/cex-identity-on-two-points-is-not-ergodic.md`, full numbered argument and owning contract; precise source references below. No repair or unresolved mathematical obligation. Local structural checks: passed in the final scoped receipt below. No outstanding item action.

### `ex-koopman-on-a-finite-probability-space` — accepted

Authored source metadata (locators retained; not a claim of independently retrieving every listed source):

```yaml
- title: Einsiedler–Ward §2.4, pp.28–29; explicit finite specialization
      url: https://maths.qmul.ac.uk/~fvivaldi/teaching/ETAD/NotesI.pdf
```

Claim/conventions: For the two-point probability space with masses $1/2,1/2$ and swap T, the Koopman operator sends $(a,b)$ to $(b,a)$, has matrix $\begin{pmatrix}0&1\\1&0\end{pmatrix}$, and preserves every real or complex Lp norm for $1\le p\le\infty$.

Evidence: The swap has the displayed matrix. Direct weighted finite-p and maximum-norm calculations prove isometry for both scalar fields, including zero coordinates.

Dependencies: def-koopman-operator-on-l-p, thm-koopman-operator-is-a-linear-isometry-on-l-p. Source: `items/ex-koopman-on-a-finite-probability-space.md`, full numbered argument and owning contract; precise source references below. No repair or unresolved mathematical obligation. Local structural checks: passed in the final scoped receipt below. No outstanding item action.

### `lem-endpoint-interpolation-simple-analytic-families` — accepted

Authored source metadata (locators retained; not a claim of independently retrieving every listed source):

```yaml
- title: Laugesen Appendix C proof of Theorem C.6, pp.170–172, equations (C.4)–(C.6); Teschl Theorem 15.2, p.415
      url: https://arxiv.org/pdf/0903.3845
```

Claim/conventions: Let $1\le p_0,p_1<\infty$, $1\le q_0,q_1\le\infty$, and $0<\theta<1$. Define
$$\frac1p=\frac{1-\theta}{p_0}+\frac\theta{p_1},\qquad \frac1q=\frac{1-\theta}{q_0}+\frac\theta{q_1},\qquad \frac1r=1-\frac1q,\quad \frac1{r_\ell}=1-\frac1{q_\ell}.$$
For complex finite simple functions $f=\sum_j a_j\mathbf1_{E_j}$ and $g=\sum_k b_k\mathbf1_{F_k}$ on their respective measure spaces, with disjoint finite-measure fibers, there are coefficientwise entire families $f_z,g_z$ bounded in coefficient modulus on $0\le\operatorname{Re}z\le1$, with $f_\theta=f,g_\theta=g$ as a.e. classes. After discarding zero coefficients and null fibers, for nonzero classes and $\ell\in\{0,1\}$ and every $t\in\mathbb R$,
$$\|f_{\ell+it}\|_{p_\ell}=\|f\|_p^{p/p_\ell}.$$
If $r<\infty$, then $\|g_{\ell+it}\|_{r_\ell}=\|g\|_r^{r/r_\ell}$ when $r_\ell<\infty$, and $\|g_{\ell+it}\|_\infty=1$ when $r_\ell=\infty$. If $r=\infty$, necessarily $q_0=q_1=1$; take $g_z=g$, retaining its infinity norm. Zero classes have identically zero families.

Evidence: Zero coefficients/null fibers are removed before logarithms. Affine exponential coefficients are entire and uniformly bounded on the strip. Disjoint fibers give the exact boundary powers; an infinite dual boundary has unit modulus on positive support. If r is infinite both q endpoints are one and a constant test family is correct.

Dependencies: def-complex-lp-and-euclidean-test-function-conventions, thm-complex-holder-minkowski-and-the-quotient-norm, def-conjugate-exponents,
  thm-complex-exponential-is-entire-with-derivative-itself, thm-complex-exponential-addition-and-real-extension, thm-chain-rule-for-complex-derivatives,
  cor-complex-exponential-cartesian-form-modulus-and-eulers-identity, thm-algebra-of-complex-derivatives, def-natural-logarithm,
  def-real-power, thm-exponential-is-strictly-increasing. Source: `items/lem-endpoint-interpolation-simple-analytic-families.md`, full numbered argument and owning contract; precise source references below. No repair or unresolved mathematical obligation. Local structural checks: passed in the final scoped receipt below. No outstanding item action.

### `lem-riesz-thorin-bound-on-the-finite-simple-core` — accepted

Authored source metadata (locators retained; not a claim of independently retrieving every listed source):

```yaml
- title: Teschl Theorem 15.2 pp.414–415; Laugesen Theorem C.6 pp.168–173, including p.172 norm-recovery caveat
      url: https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf
```

Claim/conventions: Let $(X,\mathcal A,\mu)$ and $(Y,\mathcal B,\nu)$ be sigma-finite measure spaces. Let T be a complex-linear map from the a.e. classes of complex finite simple functions of finite-measure nonzero set on X into measurable complex a.e. classes on Y. Suppose
$$\|Tf\|_{q_\ell}\le M_\ell\|f\|_{p_\ell}\quad(\ell=0,1),\qquad 1\le p_0,p_1<\infty,\quad 1\le q_0,q_1\le\infty,\quad 0\le M_0,M_1<\infty.$$
Then for $0<\theta<1$ and the reciprocal-affine exponents $p_\theta,q_\theta$,
$$Tf\in L^{q_\theta}(\nu),\qquad \|Tf\|_{q_\theta}\le M_0^{1-\theta}M_1^\theta\|f\|_{p_\theta}.$$
The same conclusion holds on arbitrary source and target measure spaces when $q_0,q_1<\infty$. At theta equal to zero or one use the given endpoint estimates, with no convention for $0^0$.

Evidence: Nonzero input and test classes are normalized first. Endpoint Holder makes every fixed I_jk finite; the finite bilinear sum is entire, continuous and bounded on the closed strip. Three-lines covers zero constants at interior theta. The membership dual-test supplier is applied before assuming Lq membership. Finite target moments give an explicit sigma-finite union of positive level sets for arbitrary-space localization, including empty support.

Dependencies: lem-endpoint-interpolation-simple-analytic-families, thm-hadamard-three-lines, lem-complex-lq-norm-from-finite-simple-dual-tests,
  thm-complex-holder-minkowski-and-the-quotient-norm, thm-linearity-of-the-lebesgue-integral-on-l-one, prop-order-and-scalar-rules-for-the-nonnegative-integral,
  thm-finite-and-countable-subadditivity-of-measures, thm-algebra-of-complex-derivatives. Source: `items/lem-riesz-thorin-bound-on-the-finite-simple-core.md`, full numbered argument and owning contract; precise source references below. No repair or unresolved mathematical obligation. Local structural checks: passed in the final scoped receipt below. No outstanding item action.

### `cor-complex-interpolation-extensions-agree-on-intersections` — accepted

Authored source metadata (locators retained; not a claim of independently retrieving every listed source):

```yaml
- title: Teschl Corollary 15.3 p.415 and sum-space discussion p.413; Laugesen Remark C.7(2)–(3) pp.169–170 and proof conclusion
        pp.172–173
      url: https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf
```

Claim/conventions: Assume countable choice and the hypotheses and measure-space alternatives of [[lem-riesz-thorin-bound-on-the-finite-simple-core]]. For each $0\le\theta\le1$ its core operator extends uniquely to a bounded complex-linear map $T_\theta:L^{p_\theta}(\mu)\to L^{q_\theta}(\nu)$ with the interpolated bound for interior theta and the original bound at either endpoint. Every two extensions agree as measurable a.e. classes on their domain intersection. Thus $T_0f_0+T_1f_1$ defines a well-defined linear map on $L^{p_0}+L^{p_1}$, and each interpolated extension is its restriction.

Evidence: Countable choice is explicit for approximation and completeness/representatives. Rounding on {1/n<=|f|<=n} gives finite support, pointwise convergence and a common integrable majorant for both finite source norms. Two successive a.e. subsequences identify output classes, including target infinity. Intersection agreement makes the endpoint sum independent of decomposition; the split at modulus one proves the restriction assertion for either endpoint order and equal exponents.

Dependencies: lem-riesz-thorin-bound-on-the-finite-simple-core, thm-complex-lp-completeness-and-almost-everywhere-subsequences, thm-complex-finite-simple-and-smooth-compact-support-density-for-finite-p,
  thm-complex-holder-minkowski-and-the-quotient-norm, def-countable-choice, thm-dominated-convergence, lem-integer-part, prop-order-and-scalar-rules-for-the-nonnegative-integral,
  thm-real-power-laws, thm-exponential-is-strictly-increasing, def-natural-logarithm, def-real-power. Source: `items/cor-complex-interpolation-extensions-agree-on-intersections.md`, full numbered argument and owning contract; precise source references below. No repair or unresolved mathematical obligation. Local structural checks: passed in the final scoped receipt below. No outstanding item action.

### `cor-l-one-l-infinity-and-l-two-bounds-interpolate-to-l-p-l-p-prime` — accepted

Authored source metadata (locators retained; not a claim of independently retrieving every listed source):

```yaml
- title: Laugesen Theorem C.6 pp.168–173; Teschl Corollary 15.4 p.415 as application motivation
      url: https://arxiv.org/pdf/0903.3845
```

Claim/conventions: On sigma-finite measure spaces suppose a complex-linear finite-simple-core operator satisfies $\|Tf\|_\infty\le A\|f\|_1$ and $\|Tf\|_2\le B\|f\|_2$, for finite $A,B\ge0$. For $1<p<2$, with $1/p+1/p'=1$,
$$\|Tf\|_{p'}\le A^{2/p-1}B^{2-2/p}\|f\|_p.$$
At p=1 and p=2 retain the respective given estimates. Under countable choice these maps have the unique compatible bounded extensions to the full Lp spaces.

Evidence: Theta=2-2/p gives source 1/p and target 1-1/p exactly. Interior powers are positive even for a zero bound; p=1,2 use the given endpoints. Compatible full-space extensions correctly inherit countable choice.

Dependencies: lem-riesz-thorin-bound-on-the-finite-simple-core, def-conjugate-exponents, cor-complex-interpolation-extensions-agree-on-intersections,
  def-countable-choice. Source: `items/cor-l-one-l-infinity-and-l-two-bounds-interpolate-to-l-p-l-p-prime.md`, full numbered argument and owning contract; precise source references below. No repair or unresolved mathematical obligation. Local structural checks: passed in the final scoped receipt below. No outstanding item action.

### `ex-endpoint-interpolation-for-a-finite-matrix` — accepted

Authored source metadata (locators retained; not a claim of independently retrieving every listed source):

```yaml
- title: Laugesen Theorem C.6; explicit finite matrix calculation
      url: https://arxiv.org/pdf/0903.3845
```

Claim/conventions: For two-point counting measure, the matrix $H=\begin{pmatrix}1&1\\1&-1\end{pmatrix}$ acts by $H(a,b)=(a+b,a-b)$. Its $\ell^1\to\ell^\infty$ norm is 1 and its $\ell^2\to\ell^2$ norm is $\sqrt2$. For $1\le p\le2$ its $\ell^p\to\ell^{p'}$ norm is at most $2^{1-1/p}$.

Evidence: Counting-measure norms and the triangle inequality give exact 1-to-infinity norm one; cancellation of conjugate cross terms gives exact 2-to-2 norm sqrt(2). Interpolation yields the displayed power and includes both direct endpoints.

Dependencies: cor-l-one-l-infinity-and-l-two-bounds-interpolate-to-l-p-l-p-prime, def-complex-lp-and-euclidean-test-function-conventions. Source: `items/ex-endpoint-interpolation-for-a-finite-matrix.md`, full numbered argument and owning contract; precise source references below. No repair or unresolved mathematical obligation. Local structural checks: passed in the final scoped receipt below. No outstanding item action.

### `ex-hausdorff-young-endpoint-exponent-arithmetic` — accepted

Authored source metadata (locators retained; not a claim of independently retrieving every listed source):

```yaml
- title: Laugesen Remark C.7(1), p.169; explicit specialization
      url: https://arxiv.org/pdf/0903.3845
```

Claim/conventions: For any sigma-finite-space complex-linear core operator with bounds $L^1\to L^\infty$ of constant A and $L^2\to L^2$ of constant B, the value $p=4/3$ gives target exponent 4 and bound $\sqrt{AB}$. The endpoint targets at p=1 and p=2 are respectively infinity and two.

Evidence: At p=4/3 the interpolation parameter is one-half and target exponent four, giving sqrt(AB). Both endpoints are computed separately; zero constants are permitted and no Fourier theorem is presumed.

Dependencies: cor-l-one-l-infinity-and-l-two-bounds-interpolate-to-l-p-l-p-prime. Source: `items/ex-hausdorff-young-endpoint-exponent-arithmetic.md`, full numbered argument and owning contract; precise source references below. No repair or unresolved mathematical obligation. Local structural checks: passed in the final scoped receipt below. No outstanding item action.

### `cex-finite-target-interpolation-does-not-state-an-infinite-endpoint` — accepted

Authored source metadata (locators retained; not a claim of independently retrieving every listed source):

```yaml
- title: Laugesen Theorem C.6 and Remark C.7, endpoint parameter scope; explicit witness
      url: https://arxiv.org/pdf/0903.3845
```

Claim/conventions: The implication “$L^1\to L^1$ and $L^2\to L^2$ core bounds entail a bounded $L^1\to L^\infty$ core estimate” is false, even with both given constants equal to one. Assume countable choice for the cited Lebesgue measure construction.

Evidence: The identity satisfies the two finite-target bounds. The explicit spike n times the indicator of (0,1/n) has L1 norm one and infinity norm n; the Archimedean property excludes any finite proposed bound. Countable choice is explicitly inherited from interval measure.

Dependencies: def-complex-lp-and-euclidean-test-function-conventions, thm-complex-holder-minkowski-and-the-quotient-norm, thm-lebesgue-measure-of-a-box-of-every-kind,
  def-countable-choice, thm-of-archimedean. Source: `items/cex-finite-target-interpolation-does-not-state-an-infinite-endpoint.md`, full numbered argument and owning contract; precise source references below. No repair or unresolved mathematical obligation. Local structural checks: passed in the final scoped receipt below. No outstanding item action.

### `ex-interpolation-of-an-integral-averaging-operator` — accepted

Authored source metadata (locators retained; not a claim of independently retrieving every listed source):

```yaml
- title: Teschl Theorem 15.2; explicit averaging specialization
      url: https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf
```

Claim/conventions: On a probability space define $Pf=(\int f\,d\mu)\mathbf1_X$ for complex finite simple f. This is a complex-linear operator with $L^1\to L^\infty$ and $L^2\to L^2$ norms at most one. Consequently $\|Pf\|_{p'}\le\|f\|_p$ for $1\le p\le2$.

Evidence: On a probability space the constant one has norm one. Integral triangle and complex Cauchy–Schwarz give both endpoint bounds, attained by one; finite total measure meets sigma-finiteness and the core interpolation yields all stated exponents.

Dependencies: cor-l-one-l-infinity-and-l-two-bounds-interpolate-to-l-p-l-p-prime, thm-integral-triangle-inequality, thm-complex-l-two-inner-product-is-well-defined-and-cauchy-schwarz. Source: `items/ex-interpolation-of-an-integral-averaging-operator.md`, full numbered argument and owning contract; precise source references below. No repair or unresolved mathematical obligation. Local structural checks: passed in the final scoped receipt below. No outstanding item action.

### `measure-preserving-systems-and-mixing-criteria` — accepted page

Read `library/measure-theory/measure-preserving-systems-and-mixing-criteria.md` in full against its manifest and all listed authored items. The 18-item order supplies preservation, Koopman, invariant representatives and probability ergodicity before the mixing criteria. Introductory claims match the proofs; only the completion clause assumes countable choice. No new prerequisites, amendments, repairs or blockers. Local checks passed as recorded below.

### `measure-preserving-systems-and-mixing-criteria-examples` — accepted page

Read `library/measure-theory/measure-preserving-systems-and-mixing-criteria-examples.md` in full against its manifest and all listed authored items. The three examples are leaves and their prose matches the explicit equal-atom swap and nonergodic identity witnesses. No new prerequisites, amendments, repairs or blockers. Local checks passed as recorded below.

### `complex-riesz-thorin-endpoint-interpolation` — accepted page

Read `library/measure-theory/complex-riesz-thorin-endpoint-interpolation.md` in full against its manifest and all listed authored items. The four items occur in supplier-before-consumer order. Prose accurately distinguishes finite-target localization, membership testing, and countable-choice extension; Hausdorff–Young is only an application orientation. No new prerequisites, amendments, repairs or blockers. Local checks passed as recorded below.

### `complex-riesz-thorin-endpoint-interpolation-examples` — accepted page

Read `library/measure-theory/complex-riesz-thorin-endpoint-interpolation-examples.md` in full against its manifest and all listed authored items. The four leaves instantiate matrix and averaging estimates, exponent arithmetic and the precise failed infinity-endpoint inference. The introduction adds no unsupported mathematical assertion. No new prerequisites, amendments, repairs or blockers. Local checks passed as recorded below.

## Batch 1 final review receipt — 2026-09-10

All 29 assigned items and four assigned pages have one accepted `authored:1:<id>` decision, with item-specific inference and boundary evidence. There are no owned repairs, new local suppliers, withdrawals, escalations, or mathematical/source-understanding blockers. Contract `risk_review` entries were recorded with the mathematical decisions, including all 16 HIGH/CRITICAL items. Acceptance creates no defect rows. Existing unrelated group decisions and report sections are preserved.

### Sources and checked interfaces

Independently opened and read Laugesen, *Harmonic Analysis Lecture Notes*, Appendix C, Theorem C.6, Remark C.7 and complete proof, printed pp.168–173, equations (C.4)–(C.7), https://arxiv.org/pdf/0903.3845 (PDF pages 167–172; extracted lines 9458–9851). The theorem gives the geometric operator bound at reciprocal-affine exponents for a linear sum-space operator, with its stated semifiniteness qualification at the double-infinity target. The proof uses finite analytic families and finite scalar integrals; the remark requires agreement on intersections before defining a sum-space operator. The local text establishes its own core-to-extension interface, checks bounded/continuous closed-strip hypotheses, handles zero coefficients and zero constants, and proves finite-target localization rather than assuming intermediate target membership. This is verification against the authored proof, not adoption of a stronger unproved source scope.

Read current exact prerequisite statements through the contract citations and verified every stored citation excerpt occurs verbatim in its current supplier file. Read the complete principal supplier arguments in `items/thm-measure-uniqueness-on-a-sigma-finite-pi-system.md`, `items/lem-complex-lq-norm-from-finite-simple-dual-tests.md`, `items/thm-hadamard-three-lines.md`, `items/thm-complex-lp-completeness-and-almost-everywhere-subsequences.md`, and `items/thm-complex-finite-simple-and-smooth-compact-support-density-for-finite-p.md`. Their actual exhaustion, test-integrability, bounded-strip, finite-source-exponent and countable-choice hypotheses are met at the uses identified in the decisions. Other exact interfaces checked include completion representatives, integral monotone/dominated convergence, quotient norms, complex Cauchy–Schwarz, algebra minimality, level-set bounds and real-power conventions. This is a bounded dependency-interface review, not a whole-library proof audit.

### Published finding and serial amendments

Re-read the complete published `thm-riesz-thorin-interpolation`. Its normalization failures at steps 3.1 and 4.1 remain; the canonical published-consumer ledger now records a concrete one-atom witness, current supplier publication states, and the Phase-3 strategy. Under the acquired `research/.published-consumer-ledger.lock`, re-read and merged the existing entry, moved its one stale U-P index row to A-P, adjusted U-P 1451→1450 and A-P 150→151, and released only this lock. No additional indexed target or repair count was added. Published content remains unchanged. The five complex-Lp suppliers and three-lines are published; this batch's normalized core and extension suppliers remain authored drafts accepted locally, awaiting engine review/publication. Supplier availability does not close the published defect.

No shared-plan or Phase-2 scope amendment is needed. Preserve the already-established Phase-3 atomic rehome of `thm-riesz-thorin-interpolation` to `complex-riesz-thorin-endpoint-interpolation`, after the core and compatible-extension suppliers, with explicit complex linearity and countable-choice extension assumptions. No new pair, weakened result, Recorded dependency, or cross-group edit was used.

### Frontier and local checks

The owning input `research/phase-2-catchup-24-batch-1.cross-batch-dependencies.json` remains `[]`: current authored dependencies equal the manifest, every external item supplier is published, and no declared prerequisite page or item belongs to a different current-run batch. The actual arguments introduce no implicit changing-frontier supplier. Incoming consumers in batch 3 are for their owners and the final cross-batch audit; batch 1 does not assume their proofs. No dependency input changed, so no ledger refresh was necessary.

Checks actually run, all exit 0:

- `node tools/proof-contract.mjs research/phase-2-catchup-24-batch-1.proof-contracts.json --strict`: 29/29; zero errors/warnings.
- `node tools/risk-report.mjs research/phase-2-catchup-24-batch-1.proof-contracts.json --require-reviewed`: all 29 routed; zero errors, including every HIGH/CRITICAL review.
- `node tools/content-policy.mjs research/phase-2-catchup-24-batch-1.pages.json`: 29 items; zero errors/warnings.
- `node tools/tsx-run.mjs tools/precheck.mts` with all 29 explicit owned item paths: 23 proof-bearing items passed, zero failures; six definitions have no proof body.
- `node tools/rendercheck.mjs` with all 29 explicit owned items and four explicit owned pages: all 33 passed renderer YAML/KaTeX checks.
- Read-only exact citation matching, manifest/authored dependency comparison, external supplier publication and different-batch edge checks: passed.

No authored item/page was edited, so no repair reflow or proof-contract regeneration was needed. No workflow transition, publication stamp, judge, self-certification or agent dispatch was performed. Next action belongs to the engine: join the remaining group batches and run the prescribed full-frontier and 6C/6D protocols.

Final record-integrity check: exactly 33 unique owned obligations, all accepted with nonempty evidence and empty defect lists; the published target has exactly one classification row; the owned ledger lock is released. Scoped `git diff --check` on the contract, report, decisions and published ledger exited 0.

### Batch 3: `def-strong-law-of-large-numbers-for-a-sequence` — accepted

Claim/conventions: Let $(X_n)_{n\ge1}$ be integrable real random variables on one probability space, with $S_n=\sum_{k=1}^nX_k$. The **centered strong law** means $(S_n-\mathbb ES_n)/n\to0$ almost surely. If the variables have a common law, their finite expectations equal $\mu=\mathbb EX_1$, so this is equivalent to $S_n/n\to\mu$ almost surely. Independence is not part of this definition.

Evidence: Definition correctly separates integrability, centered convergence and common-law means; independence is not implicit.

Dependency record: `deps: ["def-partial-sums-and-sample-means", "def-almost-sure-convergence-of-random-variables", "def-expectation-of-a-nonnegative-or-integrable-random-variable"]`. Read current item and owning contract. Source metadata (not an independent retrieval claim):

```yaml
references:
    - title: Durrett, §§2.4–2.5, pp. 76–87
      url: https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf
```

No repair or unresolved obligation for this item. Validation pending scoped final checks. Next action: next assigned item.

### Batch 3: `cor-kolmogorov-strong-law-for-independent-uniformly-bounded-variances` — accepted

Claim/conventions: Independent square-integrable real $(X_n)_{n\ge1}$ with $C=\sup_n\operatorname{Var}(X_n)<\infty$ satisfy $(S_n-\mathbb ES_n)/n\to0$ almost surely.

Evidence: The telescoping upper bound is valid including N=1 and C=0. The published normalized-variance theorem was read in full: b_n=n meets positivity, monotonicity and divergence and the proved variance bound supplies its remaining hypothesis.

Dependency record: `deps: ["thm-kolmogorov-strong-law-under-summable-normalized-variances", "def-strong-law-of-large-numbers-for-a-sequence", "thm-integral-test-for-series"]`. Read current item and owning contract. Source metadata (not an independent retrieval claim):

```yaml
references:
    - title: Durrett, §§2.4–2.5, pp. 76–87
      url: https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf
```

No repair or unresolved obligation for this item. Validation pending scoped final checks. Next action: next assigned item.

### Batch 3: `cor-iid-finite-variance-strong-law` — accepted

Claim/conventions: IID square-integrable real variables satisfy $S_n/n\to\mathbb EX_1$ almost surely.

Evidence: Common laws give the same finite first and second moments, hence uniformly bounded variance. Mutual independence and square integrability meet the preceding corollary; adding the common mean gives the result, including constant variables.

Dependency record: `deps: ["def-identically-distributed-and-iid-random-variables", "cor-kolmogorov-strong-law-for-independent-uniformly-bounded-variances"]`. Read current item and owning contract. Source metadata (not an independent retrieval claim):

```yaml
references:
    - title: Durrett, §§2.4–2.5, pp. 76–87
      url: https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf
```

No repair or unresolved obligation for this item. Validation pending scoped final checks. Next action: next assigned item.

### Batch 3: `lem-tail-sum-integrability-equivalence` — accepted

Claim/conventions: For a measurable $X:\Omega\to[0,\infty]$ on a probability space, $\sum_{n\ge1}\mathbb P(X>n)\le\mathbb EX\le1+\sum_{n\ge1}\mathbb P(X>n)$. Thus $\mathbb EX<\infty$ if and only if the tail series is finite.

Evidence: The strict integer count is m-1 at positive integer m and zero at zero; the bracket holds also at infinity. Monotone convergence of measurable finite indicator sums establishes both finiteness implications without independence.

Dependency record: `deps: ["cor-layer-cake-formulas-for-random-variables", "thm-monotone-convergence", "thm-monotone-convergence-for-the-integral"]`. Read current item and owning contract. Source metadata (not an independent retrieval claim):

```yaml
references:
    - title: Durrett, §§2.4–2.5, pp. 76–87
      url: https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf
```

No repair or unresolved obligation for this item. Validation pending scoped final checks. Next action: next assigned item.

### Batch 3: `lem-iid-linear-truncation-occurs-only-finitely-often` — accepted

Claim/conventions: For identically distributed integrable real $(X_n)$, put $Y_n=X_n\mathbf1_{\{|X_n|\le n\}}$. Almost surely $Y_n=X_n$ for all sufficiently large $n$. Consequently $n^{-1}\sum_{k=1}^n(X_k-Y_k)\to0$. Independence is unnecessary.

Evidence: Common-law tails and the previous bracket make the exceptional probabilities summable. First Borel-Cantelli needs no independence. Each remaining path has only finitely many finite differences, so its average tends to zero.

Dependency record: `deps: ["def-truncation-at-a-fixed-level", "lem-tail-sum-integrability-equivalence", "cor-first-borel-cantelli-lemma-for-events"]`. Read current item and owning contract. Source metadata (not an independent retrieval claim):

```yaml
references:
    - title: Durrett, §§2.4–2.5, pp. 76–87
      url: https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf
```

No repair or unresolved obligation for this item. Validation pending scoped final checks. Next action: next assigned item.

### Batch 3: `lem-summability-of-truncated-normalized-variances` — accepted

Claim/conventions: For identically distributed integrable real $(X_n)$ and $Y_n=X_n\mathbf1_{\{|X_n|\le n\}}$, $\sum_{n\ge1}\operatorname{Var}(Y_n)/n^2\le2\mathbb E|X_1|<\infty$. No independence is required.

Evidence: Bounded truncations are square integrable. For t>1 and m=ceil(t), the inverse-square tail is at most m^-2+m^-1 <=2/t; t in [0,1] is separately bounded by 2t. Common-law integration and nonnegative monotone convergence give the stated constant 2 without independence.

Dependency record: `deps: ["def-truncation-at-a-fixed-level", "lem-variance-and-covariance-identities-for-random-variables", "thm-change-of-variables-for-expectation", "thm-monotone-convergence-for-the-integral", "thm-integral-test-for-series", "lem-integer-part"]`. Read current item and owning contract. Source metadata (not an independent retrieval claim):

```yaml
references:
    - title: Durrett, §§2.4–2.5, pp. 76–87
      url: https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf
```

No repair or unresolved obligation for this item. Validation pending scoped final checks. Next action: next assigned item.

### Batch 3: `lem-cesaro-limit-of-truncated-means` — accepted

Claim/conventions: For identically distributed integrable real $(X_n)$, with $Y_k=X_k\mathbf1_{\{|X_k|\le k\}}$, one has $n^{-1}\sum_{k=1}^n\mathbb EY_k\to\mathbb EX_1$.

Evidence: Change of variables compares all truncations on X_1; domination by |X_1| gives convergence of the finite expectations. Cesaro then applies to the numerical sequence; shifting the initial index does not change the limiting mean.

Dependency record: `deps: ["thm-dominated-convergence", "thm-change-of-variables-for-expectation", "thm-cesaro-mean-theorem", "def-truncation-at-a-fixed-level"]`. Read current item and owning contract. Source metadata (not an independent retrieval claim):

```yaml
references:
    - title: Durrett, §§2.4–2.5, pp. 76–87
      url: https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf
```

No repair or unresolved obligation for this item. Validation pending scoped final checks. Next action: next assigned item.

### Batch 3: `thm-kolmogorov-iid-l1-strong-law` — accepted

Claim/conventions: For IID real $(X_n)_{n\ge1}$ with $\mathbb E|X_1|<\infty$, $S_n/n\to\mu=\mathbb EX_1$ almost surely.

Evidence: Coordinatewise Borel truncation preserves mutual independence and gives finite variances. The normalized-variance theorem applies with b_n=n. The three-term decomposition combines its conull limit, the numerical truncated means and the finite-exception error; no new product or Choice is used.

Dependency record: `deps: ["def-identically-distributed-and-iid-random-variables", "lem-iid-linear-truncation-occurs-only-finitely-often", "lem-summability-of-truncated-normalized-variances", "lem-cesaro-limit-of-truncated-means", "lem-measurable-functions-preserve-independence", "thm-kolmogorov-strong-law-under-summable-normalized-variances"]`. Read current item and owning contract. Source metadata (not an independent retrieval claim):

```yaml
references:
    - title: Durrett, §§2.4–2.5, pp. 76–87
      url: https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf
    - title: Roch, Note 5, Theorems 5.8–5.9, printed pp. 5–6 (mutual independence specialization only)
      url: https://people.math.wisc.edu/~roch/grad-prob/gradprob-notes5.pdf
```

No repair or unresolved obligation for this item. Validation pending scoped final checks. Next action: next assigned item.

### Batch 3: `thm-integrability-is-necessary-for-an-iid-finite-mean-strong-law` — accepted

Claim/conventions: If IID real $(X_n)$ have $S_n/n$ converging almost surely to a finite, possibly random, limit $L$, then $\mathbb E|X_1|<\infty$ and $L=\mathbb EX_1$ almost surely.

Evidence: The successive-average identity gives X_n/n tending to zero on the finite-limit event, including random L. Independent coordinate tail events therefore cannot have divergent probability sum by second Borel-Cantelli. Tail integrability and the preceding L1 law identify L uniquely.

Dependency record: `deps: ["def-identically-distributed-and-iid-random-variables", "cor-second-borel-cantelli-lemma-under-pairwise-independence", "lem-tail-sum-integrability-equivalence", "thm-kolmogorov-iid-l1-strong-law"]`. Read current item and owning contract. Source metadata (not an independent retrieval claim):

```yaml
references:
    - title: Durrett, Theorem 2.3.8 and §2.4
      url: https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf
```

No repair or unresolved obligation for this item. Validation pending scoped final checks. Next action: next assigned item.

### Batch 3: `thm-etemadi-strong-law-for-pairwise-independent-iid-variables` — accepted

Claim/conventions: Pairwise independent, identically distributed integrable real $(X_n)$ satisfy $S_n/n\to\mathbb EX_1$ almost surely.

Evidence: Read Durrett Theorem 2.4.1 and complete proof pp.76–78 online. The local proof applies transformations only to independent pairs; variance additivity is sufficient. The inverse-square geometric subsequence bound handles repeated initial floors with a finite constant. Nonnegative partial sums give the sandwich; countably many alpha=1+1/r and error thresholds suffice. Positive and negative parts have finite means, so subtraction is valid.

Dependency record: `deps: ["def-pairwise-independence", "lem-iid-linear-truncation-occurs-only-finitely-often", "lem-summability-of-truncated-normalized-variances", "lem-cesaro-limit-of-truncated-means", "cor-chebyshev-inequality-for-random-variables", "cor-covariance-vanishes-under-independence", "lem-variance-and-covariance-identities-for-random-variables", "lem-measurable-functions-preserve-independence", "cor-first-borel-cantelli-lemma-for-events", "thm-monotone-convergence", "lem-integer-part", "def-integer-power", "thm-geometric-series"]`. Read current item and owning contract. Source metadata (not an independent retrieval claim):

```yaml
references:
    - title: Durrett, Theorem 2.4.1, Lemmas 2.4.2–2.4.4 and complete proof, pp. 76–78
      url: https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf
```

No repair or unresolved obligation for this item. Validation pending scoped final checks. Next action: next assigned item.

### Batch 3: `cor-iid-strong-law-implies-the-weak-law` — accepted

Claim/conventions: For IID integrable real variables, $S_n/n\to\mathbb EX_1$ in probability.

Evidence: The L1 IID theorem supplies almost-sure convergence of real sample means on one probability space. The published almost-sure-to-probability implication applies directly to the finite constant mean.

Dependency record: `deps: ["thm-kolmogorov-iid-l1-strong-law", "thm-almost-sure-convergence-implies-convergence-in-probability"]`. Read current item and owning contract. Source metadata (not an independent retrieval claim):

```yaml
references:
    - title: Durrett, §§2.4–2.5, pp. 76–87
      url: https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf
```

No repair or unresolved obligation for this item. Validation pending scoped final checks. Next action: next assigned item.

### Batch 3: `lem-finite-probability-maximal-ergodic-inequality` — accepted

Claim/conventions: Let $T$ preserve a probability measure $P$, and let $f$ be integrable, real-valued and measurable. Put $S_kf=\sum_{j=0}^{k-1}f\circ T^j$, $M_N=\max(0,S_1f,\ldots,S_Nf)$ and $E_N=\{M_N>0\}$ for $N\ge1$. Then $\int_{E_N}f\,dP\ge0$, and also $\int_E f\,dP\ge0$ for $E=\{\sup_{k\ge1}S_kf>0\}$.

Evidence: Read Durrett Lemma 6.2.2 p.335 in full. The local finite maximum is integrable by integral invariance; f times its positive-set indicator dominates M_N-M_N composed with T both on and off that set, including N=1. Integral cancellation is finite, and |f| dominates the increasing-set indicator products for the infinite-maximal-set conclusion.

Dependency record: `deps: ["def-measure-preserving-transformation-and-system", "thm-integrals-are-invariant-under-measure-preserving-maps", "thm-arithmetic-and-lattice-operations-preserve-measurability", "thm-linearity-of-the-lebesgue-integral-on-l-one", "thm-integral-triangle-inequality", "thm-dominated-convergence", "prop-order-and-scalar-rules-for-the-nonnegative-integral"]`. Read current item and owning contract. Source metadata (not an independent retrieval claim):

```yaml
references:
    - title: 'Durrett, Probability: Theory and Examples, 5th ed., Lemma 6.2.2, printed p.335; complete proof read'
      url: https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf
```

No repair or unresolved obligation for this item. Validation pending scoped final checks. Next action: next assigned item.

### Batch 3: `thm-birkhoff-ergodic-probability-case-for-strong-laws` — accepted

Claim/conventions: If $T$ is an ergodic measure-preserving transformation of a probability space and $f$ is an integrable real-valued measurable function, then $A_nf=n^{-1}\sum_{j=0}^{n-1}f\circ T^j\to c=\int f\,dP$ almost surely and in $L^1$. Invertibility is not required.

Evidence: Read Durrett Theorem 6.2.1 proof pp.335–337. The authored ergodic specialization supplies strict limsup invariance via the shifted-average identity, including both infinite limsups for finite-valued h. Its restricted observable has exactly D as positive-maximal set. Ergodicity excludes mass one by the negative integral; countable thresholds for h and -h give convergence. Bounded truncations and the invariant L1 contraction give the uniform tail estimate and L1 limit without conditional expectation or invertibility.

Dependency record: `deps: ["lem-finite-probability-maximal-ergodic-inequality", "def-ergodic-measure-preserving-system", "thm-integrals-are-invariant-under-measure-preserving-maps", "thm-arithmetic-and-lattice-operations-preserve-measurability", "thm-sequential-suprema-infima-limsup-liminf-and-pointwise-limits-are-measurable", "thm-linearity-of-the-lebesgue-integral-on-l-one", "thm-integral-triangle-inequality", "thm-dominated-convergence", "thm-finite-and-countable-subadditivity-of-measures"]`. Read current item and owning contract. Source metadata (not an independent retrieval claim):

```yaml
references:
    - title: 'Durrett, Probability: Theory and Examples, 5th ed., Theorem 6.2.1 and its complete proof, printed pp.335–337; ergodic specialization proved without conditional expectation'
      url: https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf
```

No repair or unresolved obligation for this item. Validation pending scoped final checks. Next action: next assigned item.

### Batch 3: `cor-birkhoff-strong-law-for-iid-coordinate-shifts` — accepted

Claim/conventions: Assume AC. On the canonical countable product of an integrable real probability law, the left shift is measure preserving and ergodic. Its coordinate averages converge almost surely and in $L^1$ to the common mean by the ergodic theorem.

Evidence: The exact AC use is deriving CC and DC for the supplied canonical-product construction; recursion iterates the chosen successor map. Shifted cylinders preserve probabilities and generate the product sigma-algebra with the whole space as finite exhaustion. Strict invariant events lie in every tail sigma-algebra, so zero-one yields ergodicity. The first coordinate is integrable and the local Birkhoff theorem supplies both limits independently of the IID law proof.

Dependency record: `deps: ["thm-birkhoff-ergodic-probability-case-for-strong-laws", "cor-countable-independent-copies-exist", "thm-kolmogorov-zero-one-law", "thm-measure-preservation-on-a-generating-pi-system", "def-ergodic-measure-preserving-system", "def-axiom-of-choice", "def-countable-choice", "def-dependent-choice", "thm-recursion"]`. Read current item and owning contract. Source metadata (not an independent retrieval claim):

```yaml
references:
    - title: Durrett, Examples 6.1.4–6.1.5 pp.332–333; Theorem 6.2.1, Lemma 6.2.2 and Example 6.2.3, pp.335–337
      url: https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf
```

No repair or unresolved obligation for this item. Validation pending scoped final checks. Next action: next assigned item.

### Batch 3: `rem-strong-law-does-not-assert-a-rate` — accepted

Claim/conventions: ## Remarks

The conclusion of [[thm-kolmogorov-iid-l1-strong-law]] is almost-sure convergence of sample means. It specifies no numerical rate of decay of the error. The finite-variance logarithmic-rate theorem requires an additional second-moment assumption; neither that assumption nor a law of the iterated logarithm is implicit in the $L^1$ law.

Evidence: Accurately describes the L1 theorem as an unquantified convergence assertion; it does not assert an unproved optimal-rate impossibility. The additional second-moment hypothesis is kept explicit.

Dependency record: `deps: ["thm-kolmogorov-iid-l1-strong-law"]`. Read current item and owning contract. Source metadata (not an independent retrieval claim):

```yaml
references:
    - title: Durrett, §§2.4–2.5, pp. 76–87
      url: https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf
```

No repair or unresolved obligation for this item. Validation pending scoped final checks. Next action: next assigned item.

### Batch 3: `thm-finite-variance-logarithmic-rate-for-iid-sums` — accepted

Claim/conventions: If IID real variables have mean $\mu$ and finite variance v, then for every $\varepsilon>0$, $(S_n-n\mu)/(\sqrt n(\log n)^{1/2+\varepsilon})\to0$ almost surely, with the displayed normalization used for $n\ge2$.

Evidence: Positive logarithms and positive powers give nondecreasing divergent b_n from n=2, with b_1=b_2 avoiding log 1. Each dyadic block has the stated p-series bound for p=1+2epsilon>1. This meets the general published normalized-variance theorem, including v=0, without assuming its rate corollary.

Dependency record: `deps: ["thm-kolmogorov-strong-law-under-summable-normalized-variances", "def-integer-power", "def-real-power", "thm-natural-logarithm-laws", "thm-real-power-laws", "thm-real-power-continuity-and-derivatives", "thm-p-series-real-exponents", "thm-direct-comparison-test"]`. Read current item and owning contract. Source metadata (not an independent retrieval claim):

```yaml
references:
    - title: Durrett, Theorem 2.5.11, p. 87; Roch, Theorem 5.9, pp. 5–6
      url: https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf
    - title: Roch, Note 5, Theorems 5.8–5.9, printed pp. 5–6 (mutual independence specialization only)
      url: https://people.math.wisc.edu/~roch/grad-prob/gradprob-notes5.pdf
```

No repair or unresolved obligation for this item. Validation pending scoped final checks. Next action: next assigned item.

### Batch 3: `ex-almost-sure-frequency-of-heads` — accepted

Claim/conventions: Assume AC and $0\le p\le1$. On the countable product of the law $P(\{1\})=p$, $P(\{0\})=1-p$, the proportion of coordinates equal to one converges almost surely to p.

Evidence: The two-atom law has total mass one and mean p, second moment p and variance p(1-p). AC gives the product suppliers CC and DC hypotheses via recursion. Finite-variance SLLN applies to coordinate counts, and countable null unions cover both p=0 and p=1.

Dependency record: `deps: ["cor-countable-independent-copies-exist", "cor-iid-finite-variance-strong-law", "def-axiom-of-choice", "def-probability-measure", "def-expectation-of-a-nonnegative-or-integrable-random-variable", "lem-variance-and-covariance-identities-for-random-variables", "def-countable-choice", "def-dependent-choice", "thm-recursion"]`. Read current item and owning contract. Source metadata (not an independent retrieval claim):

```yaml
references:
    - title: Durrett, §§2.4–2.5, pp. 76–87
      url: https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf
```

No repair or unresolved obligation for this item. Validation pending scoped final checks. Next action: next assigned item.

### Batch 3: `ex-strong-law-for-empirical-indicator-averages` — accepted

Claim/conventions: For IID random elements $(X_n)$ and a fixed measurable A, $n^{-1}\sum_{k\le n}\mathbf1_A(X_k)\to P(X_1\in A)$ almost surely. A single conull event works for any specified countable class of sets A.

Evidence: Measurable indicator transforms preserve the supplied IID law and have expectation P(A) and finite absolute mean. The L1 law applies separately; the explicitly defined failure events admit a countable null union, including an empty class. No uncountable simultaneous assertion is made.

Dependency record: `deps: ["lem-measurable-functions-preserve-independence", "cor-expectation-of-an-indicator-is-probability", "thm-kolmogorov-iid-l1-strong-law", "thm-finite-and-countable-subadditivity-of-measures"]`. Read current item and owning contract. Source metadata (not an independent retrieval claim):

```yaml
references:
    - title: Durrett, §§2.4–2.5, pp. 76–87
      url: https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf
```

No repair or unresolved obligation for this item. Validation pending scoped final checks. Next action: next assigned item.

### Batch 3: `ex-strong-law-estimator-of-an-integrable-mean` — accepted

Claim/conventions: Assume AC. The probability law with $F(x)=0$ for $x<1$ and $F(x)=1-x^{-3/2}$ for $x\ge1$ has density $\rho(x)=(3/2)x^{-5/2}\mathbf1_{[1,\infty)}(x)$, mean 3 and infinite second moment. The sample means of IID copies converge almost surely to 3.

Evidence: The CDF is continuous at 1 and has the correct endpoint limits. Compact FTC computations and Riemann/Lebesgue agreement under CC evaluate the density measure; monotone convergence and interval uniqueness identify its law. Layer cake gives mean 3 and divergent second moment. AC supplies both product choice hypotheses; the L1 law needs no variance bound.

Dependency record: `deps: ["thm-kolmogorov-iid-l1-strong-law", "cor-countable-independent-copies-exist", "thm-probability-law-and-distribution-function-correspondence", "cor-layer-cake-formulas-for-random-variables", "thm-layer-cake-formula-for-l-p-powers", "def-real-power", "thm-real-power-continuity-and-derivatives", "def-countable-choice", "def-axiom-of-choice", "thm-ftc-second-part", "thm-continuous-implies-integrable", "thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral", "thm-monotone-convergence-for-the-integral", "thm-indefinite-integral-of-a-nonnegative-function-is-a-measure", "thm-measure-uniqueness-on-a-sigma-finite-pi-system", "def-dependent-choice", "thm-recursion"]`. Read current item and owning contract. Source metadata (not an independent retrieval claim):

```yaml
references:
    - title: Durrett, §§2.4–2.5, pp. 76–87
      url: https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf
```

No repair or unresolved obligation for this item. Validation pending scoped final checks. Next action: next assigned item.

### Batch 3: `ex-nonidentical-strong-law-under-summable-normalized-variances` — accepted

Claim/conventions: Assume AC. Let $(\epsilon_n)$ be independent copies of $P(\epsilon=1)=P(\epsilon=-1)=1/2$, and set $X_n=n^{1/4}\epsilon_n$. Then $S_n/n\to0$ almost surely although $\operatorname{Var}(X_n)=\sqrt n$ is unbounded.

Evidence: The symmetric two-atom law has mean zero and variance one. Explicit AC-to-CC/DC construction licenses copies. Coordinate scaling preserves independence; the normalized variances are n^-3/2 and summable while the variances themselves diverge. The general normalized-variance theorem applies with n.

Dependency record: `deps: ["cor-countable-independent-copies-exist", "thm-kolmogorov-strong-law-under-summable-normalized-variances", "def-probability-measure", "def-expectation-of-a-nonnegative-or-integrable-random-variable", "lem-variance-and-covariance-identities-for-random-variables", "def-real-power", "thm-real-power-laws", "thm-p-series-real-exponents", "def-axiom-of-choice", "def-countable-choice", "def-dependent-choice", "thm-recursion"]`. Read current item and owning contract. Source metadata (not an independent retrieval claim):

```yaml
references:
    - title: Durrett, §§2.4–2.5, pp. 76–87
      url: https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf
```

No repair or unresolved obligation for this item. Validation pending scoped final checks. Next action: next assigned item.

### Batch 3: `cex-weak-law-does-not-imply-strong-law` — accepted

Claim/conventions: A weak sample-mean law need not be a centered strong law. Assuming AC, there are integrable real $(X_n)$ with $S_n/n\to0$ in probability but $(S_n-\mathbb ES_n)/n$ not tending to zero almost surely.

Evidence: The telescoping construction has integrable finite-valued X_n and S_n/n=B_n; both its expectation and rare-event probability tend to zero. Independent success and failure events each have divergent sums, giving conull limsup 1 and liminf 0 for centered averages. The summands are not claimed independent; AC supplies uniform copies with CC/DC explicitly justified.

Dependency record: `deps: ["cor-countable-independent-copies-exist", "cor-second-borel-cantelli-lemma-under-pairwise-independence", "def-convergence-in-probability", "def-strong-law-of-large-numbers-for-a-sequence", "def-axiom-of-choice", "lem-measurable-functions-preserve-independence", "thm-lebesgue-measure-of-a-box-of-every-kind", "def-countable-choice", "def-dependent-choice", "thm-recursion"]`. Read current item and owning contract. Source metadata (not an independent retrieval claim):

```yaml
references:
    - title: Durrett, §§2.4–2.5, pp. 76–87
      url: https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf
```

No repair or unresolved obligation for this item. Validation pending scoped final checks. Next action: next assigned item.

### Batch 3: `cex-iid-strong-law-fails-at-infinite-absolute-mean` — accepted

Claim/conventions: Assume AC. IID standard Cauchy variables have standard Cauchy sample means for every positive n. Their averages cannot converge in probability to a finite constant, and cannot converge almost surely to any finite random limit. Here the standard Cauchy law has CDF $F(x)=1/2+\arctan(x)/\pi$.

Evidence: Checked the full rational partial-fraction identity: cubic coefficient cancels, quadratic B+D-Ax=0, linear A(x^2+b^2-a^2)-2Bx=0 and constant B(x^2+b^2)+(Ax+D)a^2=1. Finite symmetric integration cancels logs before limits; H vanishes only at a=b,x=0, a null singleton. Interval Tonelli and primitive calculations establish convolution and CDF scaling, hence every mean has fixed Cauchy law. The divergent absolute moment excludes finite random almost-sure limits by the necessity theorem. AC covers the CDF/product construction.

Dependency record: `deps: ["cor-countable-independent-copies-exist", "thm-integrability-is-necessary-for-an-iid-finite-mean-strong-law", "thm-independent-random-elements-have-product-joint-law", "thm-tonelli-theorem-for-sigma-finite-product-spaces", "thm-change-of-variables-for-expectation", "thm-probability-law-and-distribution-function-correspondence", "thm-principal-inverse-tangent-calculus", "thm-substitution-for-improper-integrals", "thm-logarithm-derivative-and-integral", "thm-natural-logarithm-laws", "def-countable-choice", "def-axiom-of-choice", "thm-ftc-second-part", "thm-continuous-implies-integrable", "thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral", "thm-monotone-convergence-for-the-integral", "thm-indefinite-integral-of-a-nonnegative-function-is-a-measure", "thm-measure-uniqueness-on-a-sigma-finite-pi-system", "def-dependent-choice", "thm-recursion", "def-principal-inverse-tangent", "thm-lebesgue-measure-of-a-box-of-every-kind"]`. Read current item and owning contract. Source metadata (not an independent retrieval claim):

```yaml
references:
    - title: Durrett, Example 2.2.15 p.65 and Theorem 2.3.8 pp.70–71; convolution evaluated locally without characteristic functions
      url: https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf
```

No repair or unresolved obligation for this item. Validation pending scoped final checks. Next action: next assigned item.

### Batch 3: `cex-identical-distribution-without-independence-can-defeat-the-mean-law` — accepted

Claim/conventions: Identical integrable marginals alone do not imply the strong mean law: on $\{0,1\}$ with equal masses, set $X(\omega)=\omega$ and $X_n=X$ for every n.

Evidence: The explicit two-point witness gives each mean 1/2 while every sample mean equals the same Bernoulli variable. Its error is 1/2 everywhere and its two-coordinate joint probability differs from the marginal product; no choice is required.

Dependency record: `deps: ["def-strong-law-of-large-numbers-for-a-sequence", "def-probability-measure", "def-expectation-of-a-nonnegative-or-integrable-random-variable"]`. Read current item and owning contract. Source metadata (not an independent retrieval claim):

```yaml
references:
    - title: Durrett, §§2.4–2.5, pp. 76–87
      url: https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf
```

No repair or unresolved obligation for this item. Validation pending scoped final checks. Next action: next assigned item.

### Batch 3: `def-borel-probability-law-on-a-polish-space` — accepted

Claim/conventions: Let S be Polish in the sense of [[def-polish-space]]. A **Borel probability law on S** is a countably additive measure on $\mathcal B(S)$ with total mass one. Here $\mathcal B(S)$ is [[def-borel-sigma-algebra]] and probability measure means [[def-probability-measure]]. A compatible complete metric may be fixed for a construction; it is not additional data in the law. The empty space admits no such law, since its measure must be both zero and one.

Evidence: Defines a countably additive mass-one Borel measure with a topological Polish hypothesis. A complete metric may be fixed without making it part of the law; empty-space impossibility is correct.

Dependency record: `deps: ["def-polish-space", "def-probability-measure", "def-borel-sigma-algebra"]`. Read current item and owning contract. Source metadata (not an independent retrieval claim):

```yaml
references:
    - title: van Gaans, §2, p. 3
      url: https://pub.math.leidenuniv.nl/~gaansowvan/jancol1.pdf
```

No repair or unresolved obligation for this item. Validation pending scoped final checks. Next action: next assigned item.

### Batch 3: `def-weak-convergence-of-borel-probability-measures` — accepted

Claim/conventions: For Borel probability measures $\mu_n,\mu$ on a metric space S, write $\mu_n\Rightarrow\mu$ if $\int f\,d\mu_n\to\int f\,d\mu$ for every bounded continuous real function f on S. Continuity is [[def-metric-continuity]]. Such f is Borel measurable (inverse images of open sets are open) and $\int|f|\,d\mu\le\|f\|_\infty\mu(S)<\infty$, so the integrals are finite in [[def-integrable-real-and-complex-functions-and-their-integrals]]. No completeness or coupling is required.

Evidence: The real bounded-continuous test definition makes sense on arbitrary metric spaces: tests are Borel and integrable under every mass-one law. No completeness or common realization is assumed.

Dependency record: `deps: ["def-probability-measure", "def-borel-sigma-algebra", "def-metric-continuity", "def-integrable-real-and-complex-functions-and-their-integrals"]`. Read current item and owning contract. Source metadata (not an independent retrieval claim):

```yaml
references:
    - title: van Gaans, Definition 3.1, pp. 6–7
      url: https://pub.math.leidenuniv.nl/~gaansowvan/jancol1.pdf
```

No repair or unresolved obligation for this item. Validation pending scoped final checks. Next action: next assigned item.

### Batch 3: `def-convergence-in-distribution-of-random-elements` — accepted

Claim/conventions: Random elements $X_n,X$ with values in the same metric space **converge in distribution**, written $X_n\Rightarrow X$, if their laws from [[def-law-or-distribution-of-a-random-element]] satisfy $P_{X_n}\Rightarrow P_X$ in [[def-weak-convergence-of-borel-probability-measures]]. They may be defined on different probability spaces. The definition specifies only their marginal laws.

Evidence: Uses only weak convergence of pushforward marginal laws on a common target metric space. Allowing different source probability spaces is consistent and does not assert any coupling.

Dependency record: `deps: ["def-law-or-distribution-of-a-random-element", "def-weak-convergence-of-borel-probability-measures"]`. Read current item and owning contract. Source metadata (not an independent retrieval claim):

```yaml
references:
    - title: van Gaans, Definition 3.1 applied to laws
      url: https://pub.math.leidenuniv.nl/~gaansowvan/jancol1.pdf
```

No repair or unresolved obligation for this item. Validation pending scoped final checks. Next action: next assigned item.

### Batch 3: `thm-portmanteau-theorem` — accepted

Claim/conventions: For Borel probabilities $\mu_n,\mu$ on a metric space S, the following are equivalent: (i) $\mu_n\Rightarrow\mu$; (ii) integrals converge for all bounded uniformly continuous real tests; (iii) $\limsup_n\mu_n(F)\le\mu(F)$ for every closed F; (iv) $\liminf_n\mu_n(G)\ge\mu(G)$ for every open G; (v) $\mu_n(A)\to\mu(A)$ for every Borel A with $\mu(\partial A)=0$.

Evidence: All five implications close: uniformly continuous distance cutoffs decrease to a nonempty closed-set indicator, with empty F separate; complements and boundary-null sandwiches give continuity sets. Countably many positive-mass levels leave finitely many admissible range endpoints. Their finite step approximation has uniform error eta for both probabilities, proving the converse without tightness.

Dependency record: `deps: ["def-weak-convergence-of-borel-probability-measures", "lem-distance-to-set-is-lipschitz", "thm-dominated-convergence", "thm-continuity-from-above-for-measures", "thm-dynkin-pi-lambda", "thm-change-of-variables-for-expectation"]`. Read current item and owning contract. Source metadata (not an independent retrieval claim):

```yaml
references:
    - title: van Gaans, Theorem 3.2, pp. 7–9
      url: https://pub.math.leidenuniv.nl/~gaansowvan/jancol1.pdf
```

No repair or unresolved obligation for this item. Validation pending scoped final checks. Next action: next assigned item.

### Batch 3: `lem-real-cdf-and-bounded-continuous-definitions-agree` — accepted

Claim/conventions: For real random variables, the CDF continuity-point definition of convergence in distribution agrees with weak convergence of their laws.

Evidence: Finite-measure continuity identifies jumps with singleton masses and gives the forward ray test. Conversely choose two continuity endpoints with small tails, then a finite continuity-point partition on their compact interval. Uniform continuity gives the interior error; CDF convergence controls both tails and every interval mass. The errors vanish for each bounded continuous test.

Dependency record: `deps: ["thm-portmanteau-theorem", "def-convergence-in-distribution-for-real-random-variables", "thm-continuity-from-above-for-measures", "thm-continuity-from-below-for-measures", "thm-heine-borel-rn"]`. Read current item and owning contract. Source metadata (not an independent retrieval claim):

```yaml
references:
    - title: Durrett, Theorem 3.2.9, pp. 119–120
      url: https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf
```

No repair or unresolved obligation for this item. Validation pending scoped final checks. Next action: next assigned item.

### Batch 3: `cor-weak-limits-are-unique` — accepted

Claim/conventions: Bounded continuous real tests determine Borel probability measures on any metric space. In particular, weak limits are unique.

Evidence: The constant-sequence application of portmanteau gives equality on closed sets by exchanging the two laws. Their equality class is a lambda-system containing the closed generating pi-system. Numerical integral-limit uniqueness then gives uniqueness of any weak limit.

Dependency record: `deps: ["thm-portmanteau-theorem", "thm-dynkin-pi-lambda"]`. Read current item and owning contract. Source metadata (not an independent retrieval claim):

```yaml
references:
    - title: van Gaans, Theorem 4.1, definiteness argument, pp. 9–10
      url: https://pub.math.leidenuniv.nl/~gaansowvan/jancol1.pdf
```

No repair or unresolved obligation for this item. Validation pending scoped final checks. Next action: next assigned item.

### Batch 3: `thm-continuous-mapping-theorem` — accepted

Claim/conventions: Let S,T be metric spaces, $g:S\to T$ measurable, and $\mu_n\Rightarrow\mu$. If the discontinuity set $D_g$ is $\mu$-null, then $g_*\mu_n\Rightarrow g_*\mu$. Consequently $X_n\Rightarrow X$ implies $g(X_n)\Rightarrow g(X)$ whenever $P_X(D_g)=0$.

Evidence: The continuity locus is a countable intersection of open unions of small-image-diameter neighborhoods, so the exceptional set is Borel. Closure of a closed-set preimage adds only discontinuity points. Its null mass gives the pushforward closed-set bound; measurability and law composition verify both formulations.

Dependency record: `deps: ["thm-portmanteau-theorem", "lem-laws-commute-with-measurable-maps", "def-metric-continuity"]`. Read current item and owning contract. Source metadata (not an independent retrieval claim):

```yaml
references:
    - title: van Gaans, Theorem 3.2; local closed-preimage argument
      url: https://pub.math.leidenuniv.nl/~gaansowvan/jancol1.pdf
```

No repair or unresolved obligation for this item. Validation pending scoped final checks. Next action: next assigned item.

### Batch 3: `thm-converging-together-lemma` — accepted

Claim/conventions: Let $X_n$,$Y_n$ take values in a metric space S, on the same probability space for each n. Suppose $d(X_n,Y_n)$ is measurable and $P(d(X_n,Y_n)>\varepsilon)\to0$ for every $\varepsilon$>0. If $X_n\Rightarrow X$, then $Y_n\Rightarrow X$.

Evidence: The explicit distance measurability hypothesis handles general metric targets. For nonempty closed F the closed epsilon enlargement bounds the desired event plus a vanishing distance error. These enlargements decrease to F under finite probability; empty F is separately harmless. Portmanteau gives the conclusion.

Dependency record: `deps: ["thm-portmanteau-theorem", "thm-continuity-from-above-for-measures", "def-convergence-in-probability", "lem-distance-to-set-is-lipschitz"]`. Read current item and owning contract. Source metadata (not an independent retrieval claim):

```yaml
references:
    - title: van Gaans, Theorem 3.2 and closed-neighborhood argument
      url: https://pub.math.leidenuniv.nl/~gaansowvan/jancol1.pdf
```

No repair or unresolved obligation for this item. Validation pending scoped final checks. Next action: next assigned item.

### Batch 3: `def-tight-family-of-probability-measures` — accepted

Claim/conventions: A family $\mathcal A$ of Borel probabilities on a metric space S is **tight** if, for every $\varepsilon>0$, there is a compact $K\subseteq S$ such that $\mu(S\setminus K)<\varepsilon$ for every $\mu\in\mathcal A$. One K must work for the whole family. Compactness is [[def-metric-compactness]]. The empty family is tight, witnessed by the empty compact set.

Evidence: The same compact must control every measure at each tolerance; the empty family is correctly witnessed by empty compact K. No uniform choice across tolerances is asserted.

Dependency record: `deps: ["def-metric-compactness", "def-probability-measure"]`. Read current item and owning contract. Source metadata (not an independent retrieval claim):

```yaml
references:
    - title: van Gaans, Definition 5.1, p. 14
      url: https://pub.math.leidenuniv.nl/~gaansowvan/jancol1.pdf
```

No repair or unresolved obligation for this item. Validation pending scoped final checks. Next action: next assigned item.

### Batch 3: `def-relative-sequential-compactness-for-weak-convergence` — accepted

Claim/conventions: A family $\mathcal A$ of Borel probabilities on a metric space is **relatively sequentially compact for weak convergence** if every sequence from $\mathcal A$ has a subsequence converging weakly to a Borel probability on the same state space. The limit need not belong to $\mathcal A$. Weak convergence means [[def-weak-convergence-of-borel-probability-measures]].

Evidence: Quantifies over sequences and permits limit probabilities outside the family while retaining the same state space. Empty-family vacuity and repeated laws are consistent.

Dependency record: `deps: ["def-weak-convergence-of-borel-probability-measures"]`. Read current item and owning contract. Source metadata (not an independent retrieval claim):

```yaml
references:
    - title: van Gaans, Theorem 5.2, p. 14 (closure of the family)
      url: https://pub.math.leidenuniv.nl/~gaansowvan/jancol1.pdf
```

No repair or unresolved obligation for this item. Validation pending scoped final checks. Next action: next assigned item.

### Batch 3: `thm-every-borel-probability-on-a-polish-space-is-tight` — accepted

Claim/conventions: Assume AC. Every Borel probability on a Polish space S is tight.

Evidence: AC supplies the inner-regularity suppliers countable choice. The explicit alternative construction uses least finite initial ball covers with summable loss, closed intersection, and finite representatives to establish total boundedness. Completeness plus the CC-qualified compactness theorem yields K, including singleton spaces; no local compactness of the ambient space is assumed.

Dependency record: `deps: ["def-borel-probability-law-on-a-polish-space", "def-tight-family-of-probability-measures", "thm-borel-probability-measures-on-polish-spaces-are-inner-regular", "def-axiom-of-choice", "thm-continuity-from-below-for-measures", "thm-finite-and-countable-subadditivity-of-measures", "thm-complete-and-totally-bounded-implies-compact"]`. Read current item and owning contract. Source metadata (not an independent retrieval claim):

```yaml
references:
    - title: van Gaans, Theorem 2.6, pp. 5–6
      url: https://pub.math.leidenuniv.nl/~gaansowvan/jancol1.pdf
```

No repair or unresolved obligation for this item. Validation pending scoped final checks. Next action: next assigned item.

### Batch 3: `lem-countable-uniformly-dense-tests-on-a-compact-metric-space` — accepted

Claim/conventions: Assume AC. For a compact metric K, $C(K;\mathbb R)$ has a countable uniformly dense subset in the supremum norm.

Evidence: AC chooses listed finite nets. The inf-envelope lies between f-eta and f after separating distances below and above delta. Replacing it by finite rational cones incurs lower error eta and upper error 3eta, hence total error at most 3eta from f. Empty K, constants and clipping are handled; the formula family is countable.

Dependency record: `deps: ["def-metric-compactness", "def-totally-bounded", "lem-distance-to-set-is-lipschitz", "thm-compact-implies-complete-and-totally-bounded", "def-axiom-of-choice", "thm-heine-cantor-metric"]`. Read current item and owning contract. Source metadata (not an independent retrieval claim):

```yaml
references:
    - title: van Gaans, Proposition 5.3, pp. 15–16; explicit countable-test replacement for its Alaoglu step
      url: https://pub.math.leidenuniv.nl/~gaansowvan/jancol1.pdf
```

No repair or unresolved obligation for this item. Validation pending scoped final checks. Next action: next assigned item.

### Batch 3: `lem-probability-laws-on-a-compact-metric-space-have-weakly-convergent-subsequences` — accepted

Claim/conventions: Assume AC. Every sequence of Borel probability laws on a compact metric K has a subsequence converging weakly to a Borel probability on K.

Evidence: Nested subsequences and their increasing diagonal converge on the dense tests under the stated AC. Uniform approximation makes every continuous-test integral Cauchy. Its limit is a positive linear functional with L(1)=1. Read the full published RMK representation proof: compact metric K is LCH and C_c(K)=C(K), so its representing Borel measure has mass one and the desired test limits.

Dependency record: `deps: ["lem-countable-uniformly-dense-tests-on-a-compact-metric-space", "def-weak-convergence-of-borel-probability-measures", "thm-rmk-positive-functional-is-integration-against-its-representing-measure", "thm-bolzano-weierstrass", "def-axiom-of-choice"]`. Read current item and owning contract. Source metadata (not an independent retrieval claim):

```yaml
references:
    - title: van Gaans, Proposition 5.3 and §6; diagonal replacement for compact-case functional argument
      url: https://pub.math.leidenuniv.nl/~gaansowvan/jancol1.pdf
```

No repair or unresolved obligation for this item. Validation pending scoped final checks. Next action: next assigned item.

### Batch 3: `thm-prokhorov-tightness-theorem-on-polish-spaces` — accepted

Claim/conventions: Assume AC. A family $\mathcal A$ of Borel probabilities on a Polish space S is tight if and only if it is relatively sequentially compact for weak convergence.

Evidence: Read van Gaans Theorem 5.2, Proposition 5.3 and Lemma 5.4, pp.14–18. The authored proof supplies compact Hilbert cube via the complete product metric and finite meshes; it uses a proved diagonal compact-law lemma. Compact images retain limiting mass by the closed bound. Their Borel union E has full mass and makes E intersect e(B) ambient Borel without requiring e(S) Borel. Relative closed sets yield weak convergence on S. Conversely a violating sequence for a countable open cover contradicts the open bound and mass one. Closed ball intersections have summable uniform loss and are complete/totally bounded. AC and empty-family cases are explicit.

Dependency record: `deps: ["def-tight-family-of-probability-measures", "def-relative-sequential-compactness-for-weak-convergence", "thm-every-borel-probability-on-a-polish-space-is-tight", "lem-probability-laws-on-a-compact-metric-space-have-weakly-convergent-subsequences", "thm-portmanteau-theorem", "thm-hilbert-cube-universal-for-separable-metrizable-spaces", "thm-complete-and-totally-bounded-implies-compact", "thm-finite-and-countable-subadditivity-of-measures", "thm-continuity-from-below-for-measures", "def-axiom-of-choice", "lem-standard-complete-metric-on-a-countable-product"]`. Read current item and owning contract. Source metadata (not an independent retrieval claim):

```yaml
references:
    - title: van Gaans, Theorem 5.2, Proposition 5.3, Lemma 5.4, pp. 14–18
      url: https://pub.math.leidenuniv.nl/~gaansowvan/jancol1.pdf
```

No repair or unresolved obligation for this item. Validation pending scoped final checks. Next action: next assigned item.

### Batch 3: `cor-weakly-convergent-sequences-are-tight` — accepted

Claim/conventions: Assume AC. If $\mu_n\Rightarrow\mu$ on a Polish space, then $\{\mu,\mu_1,\mu_2,\ldots\}$ is tight.

Evidence: Any selected sequence either repeats a law infinitely or admits a subsequence with strictly increasing least original indices. The latter inherits the original weak limit. This proves relative sequential compactness and licenses the reverse Prokhorov implication under AC, including repeated laws.

Dependency record: `deps: ["thm-prokhorov-tightness-theorem-on-polish-spaces", "def-axiom-of-choice"]`. Read current item and owning contract. Source metadata (not an independent retrieval claim):

```yaml
references:
    - title: Durrett, §§2.4–2.5, pp. 76–87
      url: https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf
```

No repair or unresolved obligation for this item. Validation pending scoped final checks. Next action: next assigned item.

### Batch 3: `cor-tightness-extracts-a-weakly-convergent-subsequence` — accepted

Claim/conventions: Assume AC. A tight sequence of Borel probability laws on a Polish S has a subsequence converging weakly to a Borel probability on that same S.

Evidence: The sequence range has precisely the assumed uniform compact bounds. Prokhorov under AC gives relative sequential compactness; applying its definition to this very sequence preserves the state space and total mass one.

Dependency record: `deps: ["thm-prokhorov-tightness-theorem-on-polish-spaces", "def-axiom-of-choice"]`. Read current item and owning contract. Source metadata (not an independent retrieval claim):

```yaml
references:
    - title: Durrett, §§2.4–2.5, pp. 76–87
      url: https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf
```

No repair or unresolved obligation for this item. Validation pending scoped final checks. Next action: next assigned item.

### Batch 3: `def-levy-prokhorov-metric` — accepted

Claim/conventions: For Borel probabilities $\mu$,$\nu$ on a metric space S, put $F^{[\varepsilon]}=\{x:d(x,F)\le\varepsilon\}$ for nonempty closed F, and $\varnothing^{[\varepsilon]}=\varnothing$. Define $\pi(\mu,\nu)$ as the infimum of $\varepsilon$>0 such that, for every closed F, both $\mu(F)\le\nu(F^{[\varepsilon]})+\varepsilon$ and $\nu(F)\le\mu(F^{[\varepsilon]})+\varepsilon$. The admissible set contains every $\varepsilon$>=1 and is bounded below by zero, so its real infimum exists by [[thm-infimum-property]]. Enlargements are closed because distance to a nonempty set is continuous. [[lem-distance-to-set-is-lipschitz]] The metric assertion is proved in the following lemma.

Evidence: Closed enlargements are measurable by distance continuity, with the empty case explicit. Every epsilon>=1 is admissible, so the real infimum is defined and nonnegative. The next lemma supplies its metric property.

Dependency record: `deps: ["def-probability-measure", "def-metric-bounded-diameter", "thm-infimum-property", "lem-distance-to-set-is-lipschitz"]`. Read current item and owning contract. Source metadata (not an independent retrieval claim):

```yaml
references:
    - title: van Gaans, §4, pp. 9–10 (open-enlargement convention; equivalence must be proved locally)
      url: https://pub.math.leidenuniv.nl/~gaansowvan/jancol1.pdf
```

No repair or unresolved obligation for this item. Validation pending scoped final checks. Next action: next assigned item.

### Batch 3: `lem-levy-prokhorov-distance-is-a-metric` — accepted

Claim/conventions: The closed-set definition of $\pi$ is a metric on Borel probabilities on any metric space, and $0\le\pi\le1$. It equals the infimum obtained by testing all Borel B and using open enlargements $B^\varepsilon=\{x:d(x,B)<\varepsilon\}$, with empty enlargement empty.

Evidence: Upward admissibility allows arbitrarily close upper approximants to each infimum. Zero distance gives equality on closed sets by finite-measure continuity, then Borel uniqueness. Nested closed enlargements lie in the summed-radius enlargement by infimum slack, proving the triangle inequality. B subset closure(B) and equality of distances yield the all-Borel open convention with arbitrary positive slack, without any regularity assumption.

Dependency record: `deps: ["def-levy-prokhorov-metric", "thm-continuity-from-above-for-measures", "thm-dynkin-pi-lambda", "lem-distance-to-set-is-lipschitz"]`. Read current item and owning contract. Source metadata (not an independent retrieval claim):

```yaml
references:
    - title: van Gaans, Theorem 4.1, pp. 9–10
      url: https://pub.math.leidenuniv.nl/~gaansowvan/jancol1.pdf
```

No repair or unresolved obligation for this item. Validation pending scoped final checks. Next action: next assigned item.

### Batch 3: `lem-countable-boundary-null-partitions-of-a-separable-metric-space` — accepted

Claim/conventions: Assume AC. For a separable metric S with Borel probability $\mu$, there are countable refining Borel partitions $\mathcal P_k$ for $k\ge1$, all of whose nonempty atoms have diameter at most $2^{-k}$ and $\mu$-null boundary. Together these partitions generate $\mathcal B(S)$.

Evidence: For each center only countably many sphere radii carry mass; AC chooses countably many allowed radii with a positive lower bound per scale, preserving the dense-center cover. Ordered disjointization and finite-level intersections preserve countability, small diameters and boundary nullity. Every open set is a union of contained atoms across the countable levels, proving generation.

Dependency record: `deps: ["def-separable-space", "def-metric-ball", "thm-finite-and-countable-subadditivity-of-measures", "def-axiom-of-choice"]`. Read current item and owning contract. Source metadata (not an independent retrieval claim):

```yaml
references:
    - title: van Gaans, Lemma 4.3, pp. 10–11; refining-partition consequence
      url: https://pub.math.leidenuniv.nl/~gaansowvan/jancol1.pdf
```

No repair or unresolved obligation for this item. Validation pending scoped final checks. Next action: next assigned item.

### Batch 3: `thm-levy-prokhorov-metric-metrizes-weak-convergence` — accepted

Claim/conventions: Assume AC. For Borel probabilities on a separable metric space, $\pi(\mu_n,\mu)\to0$ if and only if $\mu_n\Rightarrow\mu$. Completeness is not required.

Evidence: The forward implication uses decreasing closed enlargements and finite mass. Conversely finitely many small continuity atoms leave mu loss delta and eventually mu_n loss 2delta; their total mass discrepancies are below delta. For every Borel B, selected atoms meeting B lie in its strict epsilon enlargement. The 3delta bound works uniformly in B and in both directions, establishing metric convergence without completeness.

Dependency record: `deps: ["lem-levy-prokhorov-distance-is-a-metric", "lem-countable-boundary-null-partitions-of-a-separable-metric-space", "thm-portmanteau-theorem", "thm-continuity-from-below-for-measures", "def-axiom-of-choice", "thm-continuity-from-above-for-measures"]`. Read current item and owning contract. Source metadata (not an independent retrieval claim):

```yaml
references:
    - title: van Gaans, Theorem 4.2 and Lemma 4.3, pp. 10–12
      url: https://pub.math.leidenuniv.nl/~gaansowvan/jancol1.pdf
```

No repair or unresolved obligation for this item. Validation pending scoped final checks. Next action: next assigned item.

### Batch 3: `lem-interval-realization-from-refining-small-diameter-partitions` — accepted

Claim/conventions: Assume AC. Let S be nonempty, complete and separable, and let $(\mathcal P_k)$ be countable refining Borel partitions with nonempty atoms of diameter at most $2^{-k}$. Fix orders on each family of children. Every Borel probability $\sigma$ on S is the law of a measurable $T_\sigma:(0,1)\to S$ under Borel Lebesgue probability, obtained by nested interval allocation.

Evidence: Steps 1.1–1.3 allocate countably enumerated child intervals with correct lengths, remove their Borel null endpoints under AC-implied CC, and obtain Cauchy representatives in the complete target. Limits need only lie in atom closures. Closed-set distance tests prove measurability; step 2.1 applies bounded DCT twice and measure uniqueness to identify the law. Zero-mass atoms and the exceptional basepoint are handled. Read Vienna Advanced Probability Theorem 5.29 pp.65–66, lines4918–5001; the authored representative-limit argument supplies the needed justification without assuming nonclosed nested atoms intersect.

Dependency record: `deps: ["lem-countable-boundary-null-partitions-of-a-separable-metric-space", "cor-weak-limits-are-unique", "thm-dominated-convergence", "def-complete-metric-space", "def-axiom-of-choice", "thm-lebesgue-measure-of-a-box-of-every-kind", "prop-countable-subsets-of-rn-are-lebesgue-null", "def-countable-choice"]`. Read current item and owning contract. Source metadata (not an independent retrieval claim):

```yaml
references:
    - title: Advanced Probability, Theorem 5.29, pp. 65–67; representative-limit repair of the nonclosed-atom intersection step
      url: https://www.mat.univie.ac.at/~mathias/Advanced_Probability.pdf
```

No repair or unresolved obligation for this item. Validation pending scoped final checks. Next action: next assigned item.

### Batch 3: `thm-skorokhod-representation-on-polish-spaces` — accepted

Claim/conventions: Assume AC. If $\mu_n\Rightarrow\mu$ on a Polish S, there are random elements $Y_n,Y$ on $((0,1),\mathcal B((0,1)),\lambda)$ with laws $\mu_n,\mu$ and $Y_n\to Y$ almost surely.

Evidence: The compatible complete metric and mu-boundary-null refining partitions meet the realization lemma hypotheses. Portmanteau gives every fixed atom mass limit. Endpoints are finite sums along each finite ancestral address, so they converge even with countably many children. Outside the union of endpoint null sets for all laws, each fixed-level atom eventually agrees; closure diameter bounds give convergence. Prescribed marginals are proved by the preceding lemma. Checked against Vienna Theorem 5.29 pp.65–66; no original joint law is asserted.

Dependency record: `deps: ["lem-countable-boundary-null-partitions-of-a-separable-metric-space", "lem-interval-realization-from-refining-small-diameter-partitions", "thm-portmanteau-theorem", "def-axiom-of-choice"]`. Read current item and owning contract. Source metadata (not an independent retrieval claim):

```yaml
references:
    - title: Advanced Probability, Theorem 5.29, pp. 65–67, repaired as in the preceding lemma
      url: https://www.mat.univie.ac.at/~mathias/Advanced_Probability.pdf
```

No repair or unresolved obligation for this item. Validation pending scoped final checks. Next action: next assigned item.

### Batch 3: `rem-skorokhod-representation-does-not-couple-the-original-variables` — accepted

Claim/conventions: ## Remarks

[[thm-skorokhod-representation-on-polish-spaces]] constructs new random elements with the prescribed marginal laws. It gives almost-sure convergence on that new probability space. It does not assert almost-sure convergence of any originally given variables, and it does not preserve their joint distribution.

Evidence: The warning accurately distinguishes the constructed variables with prescribed marginals from any supplied joint coupling. The cited theorem proves only the former and its almost-sure convergence.

Dependency record: `deps: ["thm-skorokhod-representation-on-polish-spaces"]`. Read current item and owning contract. Source metadata (not an independent retrieval claim):

```yaml
references:
    - title: Advanced Probability, Theorem 5.29
      url: https://www.mat.univie.ac.at/~mathias/Advanced_Probability.pdf
```

No repair or unresolved obligation for this item. Validation pending scoped final checks. Next action: next assigned item.

### Batch 3: `lem-countable-compactly-supported-tests-determine-euclidean-weak-convergence` — accepted

Claim/conventions: For each finite $d\ge1$ there is a countable uniformly dense subset $\mathcal D$ of $C_c(\mathbb R^d;\mathbb R)$ containing nonnegative compact cutoffs $\chi_m\uparrow1$. If Borel probabilities $\mu_n,\mu$ have $\int h\,d\mu_n\to\int h\,d\mu$ for every $h\in\mathcal D$, then $\mu_n\Rightarrow\mu$.

Evidence: Finite rational grid data with zero boundary values produce countably many continuous compactly supported interpolants. Uniform continuity on a containing compact cube and convex interpolation give uniform density in C_c. Explicit increasing cutoffs have integrals tending to one by MCT; convergence of their integrals bounds late tails. Step 2.1 first extends to C_c by uniform approximation, then to C_b using a larger cutoff and the 3||f|| eta tail estimate. No norm separability of C_b is assumed.

Dependency record: `deps: ["def-weak-convergence-of-borel-probability-measures", "thm-portmanteau-theorem", "thm-heine-borel-rn", "thm-monotone-convergence-for-the-integral"]`. Read current item and owning contract. Source metadata (not an independent retrieval claim):

```yaml
references:
    - title: van Gaans, compact-test approximation in Proposition 5.3 and tightness transfer; explicit Euclidean construction
      url: https://pub.math.leidenuniv.nl/~gaansowvan/jancol1.pdf
```

No repair or unresolved obligation for this item. Validation pending scoped final checks. Next action: next assigned item.

### Batch 3: `thm-empirical-measures-of-iid-euclidean-samples-converge-weakly` — accepted

Claim/conventions: For IID $\mathbb R^d$-valued samples $(X_i)$ with common law $\mu$ and finite $d\ge1$, the empirical probabilities $\widehat\mu_n=n^{-1}\sum_{i=1}^n\delta_{X_i}$ converge weakly to $\mu$ almost surely on one common event.

Evidence: Finite averages of Dirac measures are probabilities pathwise. Every test in the explicit countable determining class is bounded, so its IID transformed samples meet the L1 strong law without a moment assumption on the original Euclidean samples. Change of variables identifies the mean. Countably many measurable convergence events have a conull intersection, on which the determining lemma proves weak convergence.

Dependency record: `deps: ["thm-kolmogorov-iid-l1-strong-law", "lem-countable-compactly-supported-tests-determine-euclidean-weak-convergence", "lem-measurable-functions-preserve-independence", "thm-change-of-variables-for-expectation", "thm-finite-and-countable-subadditivity-of-measures"]`. Read current item and owning contract. Source metadata (not an independent retrieval claim):

```yaml
references:
    - title: Durrett, strong law Theorem 2.5.10 plus countable-test argument
      url: https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf
```

No repair or unresolved obligation for this item. Validation pending scoped final checks. Next action: next assigned item.

### Batch 3: `lem-normal-density-has-total-mass-one` — accepted

Claim/conventions: Assume AC. The function $\phi(x)=e^{-x^2/2}/\sqrt{2\pi}$ is positive and Borel measurable on $\mathbb R$, with Lebesgue integral one.

Evidence: Positivity, continuity and AC-implied CC meet the Borel and compact Riemann/Lebesgue comparison hypotheses. Substitution x/sqrt(2) on nondegenerate compact intervals has constant integrable derivative. MCT identifies the whole-line Lebesgue integral with the improper Gaussian limit. Read the current published Gaussian integral proof: positivity and its squared-integral identity identify sqrt(pi). Positive square-root uniqueness gives sqrt(2)*sqrt(pi)=sqrt(2*pi), and homogeneity normalizes to one.

Dependency record: `deps: ["thm-gaussian-integral", "thm-substitution", "thm-continuous-implies-integrable", "thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral", "thm-monotone-convergence-for-the-integral", "thm-exponential-definition-equivalence", "thm-derivative-of-exponential", "cor-continuous-functions-are-borel-measurable", "thm-of-square-roots", "prop-order-and-scalar-rules-for-the-nonnegative-integral", "def-axiom-of-choice", "def-countable-choice"]`. Read current item and owning contract. Source metadata (not an independent retrieval claim):

```yaml
references:
    - title: 'Durrett, Probability: Theory and Examples, Example 1.6.11, p.34; local normalization from the earlier published Gaussian integral'
      url: https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf
```

No repair or unresolved obligation for this item. Validation pending scoped final checks. Next action: next assigned item.

### Batch 3: `def-standard-normal-and-normal-laws` — accepted

Claim/conventions: Assume AC. Define $\gamma(E)=\int_E e^{-x^2/2}/\sqrt{2\pi}\,dx$ for Borel E in $\mathbb R$. By [[lem-normal-density-has-total-mass-one]] and [[thm-indefinite-integral-of-a-nonnegative-function-is-a-measure]], gamma is a probability measure; denote it $N(0,1)$. For $m\in\mathbb R$ and $\sigma\ge0$, define $N(m,\sigma^2)$ as the law of $x\mapsto m+\sigma x$ on $(\mathbb R,\mathcal B,\gamma)$. This affine map is continuous: for $\sigma$>0 choose $\delta$=$\varepsilon$/$\sigma$, and for $\sigma$=0 it is constant. Its inverse images of opens are open, so it is Borel measurable. [[lem-law-of-a-random-element-is-a-probability-measure]] makes its pushforward a probability. When $\sigma$=0, the preimage of E is all of R if m belongs to E and empty otherwise, so $N(m,0)=\delta_m$ in [[def-dirac-measure]].

Evidence: The proved positive Borel density induces a countably additive measure of mass one. The affine map is continuous and Borel for every sigma>=0; its pushforward is a probability. At sigma=0 the explicit preimage computation yields delta_m. No unsupported variance or multivariate-normal claim is used.

Dependency record: `deps: ["lem-normal-density-has-total-mass-one", "thm-indefinite-integral-of-a-nonnegative-function-is-a-measure", "def-probability-measure", "def-law-or-distribution-of-a-random-element", "lem-law-of-a-random-element-is-a-probability-measure", "cor-continuous-functions-are-borel-measurable", "def-dirac-measure", "def-axiom-of-choice"]`. Read current item and owning contract. Source metadata (not an independent retrieval claim):

```yaml
references:
    - title: 'Durrett, Probability: Theory and Examples, Example 1.6.11, p.34; local normalization from the earlier published Gaussian integral'
      url: https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf
```

No repair or unresolved obligation for this item. Validation pending scoped final checks. Next action: next assigned item.

### Batch 3: `ex-dirac-laws-converge-weakly-exactly-when-their-points-converge` — accepted

Claim/conventions: On a metric space S, $\delta_{x_n}\Rightarrow\delta_x$ if and only if $x_n\to x$. For example, on the real line $\delta_{1/n}\Rightarrow\delta_0$.

Evidence: The point-mass integral formula follows by simple approximation. Continuity proves the forward point-to-law implication; the bounded continuous clipped distance to x proves the converse without compactness or completeness. The 1/n example and distances at least one are covered.

Dependency record: `deps: ["def-weak-convergence-of-borel-probability-measures", "thm-portmanteau-theorem"]`. Read current item and owning contract. Source metadata (not an independent retrieval claim):

```yaml
references:
    - title: van Gaans, §9, Dirac embedding
      url: https://pub.math.leidenuniv.nl/~gaansowvan/jancol1.pdf
```

No repair or unresolved obligation for this item. Validation pending scoped final checks. Next action: next assigned item.

### Batch 3: `ex-uniform-laws-on-expanding-finite-grids-converge-to-uniform-zero-one` — accepted

Claim/conventions: Assume AC. The laws $\mu_n=n^{-1}\sum_{k=1}^n\delta_{k/n}$ converge weakly to Lebesgue probability on [0,1].

Evidence: AC supplies CC for the box and Heine–Cantor interfaces. Right-closed cells have mass 1/n and zero is null. The step test has exactly the empirical integral, and uniform continuity makes its error uniformly vanish; integral linearity and triangle inequality finish. Both endpoints and n=1 are handled.

Dependency record: `deps: ["def-weak-convergence-of-borel-probability-measures", "thm-heine-cantor-r", "thm-lebesgue-measure-of-a-box-of-every-kind", "def-axiom-of-choice", "def-countable-choice", "prop-the-nonnegative-integral-agrees-with-the-simple-integral", "thm-linearity-of-the-lebesgue-integral-on-l-one", "thm-integral-triangle-inequality"]`. Read current item and owning contract. Source metadata (not an independent retrieval claim):

```yaml
references:
    - title: Durrett, §3.2.1, weak convergence examples; elementary Riemann sum specialization
      url: https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf
```

No repair or unresolved obligation for this item. Validation pending scoped final checks. Next action: next assigned item.

### Batch 3: `ex-tightness-from-a-uniform-moment-bound` — accepted

Claim/conventions: For a family $\mathcal A$ of probability laws on $\mathbb R^d$ with finite $d\ge1$, if $p>0$ and $\sup_{\mu\in\mathcal A}\int\|x\|^p\,d\mu\le C<\infty$, then the family is tight.

Evidence: The norm power is Borel including its zero value, and monotonicity on positive arguments licenses Markov with threshold R^p. For a nonempty family C>=0; the explicit positive R gives strict error below epsilon including C=0. Heine–Borel supplies compact closed balls. The empty family is separately handled; no necessity claim is made.

Dependency record: `deps: ["def-tight-family-of-probability-measures", "cor-markov-inequality-for-random-variables", "thm-heine-borel-rn", "lem-metrics-on-rn", "def-real-power", "thm-real-power-laws", "thm-real-power-continuity-and-derivatives"]`. Read current item and owning contract. Source metadata (not an independent retrieval claim):

```yaml
references:
    - title: Durrett, Theorem 3.2.14, p. 123
      url: https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf
```

No repair or unresolved obligation for this item. Validation pending scoped final checks. Next action: next assigned item.

### Batch 3: `ex-weak-convergence-of-gaussian-laws-by-parameters` — accepted

Claim/conventions: Assume AC. If $m_n\to m$ and $\sigma_n\ge0$ with $\sigma_n\to\sigma\ge0$, then $N(m_n,\sigma_n^2)\Rightarrow N(m,\sigma^2)$, including $N(m,0)=\delta_m$.

Evidence: The common standard-normal probability space is already constructed under AC. The affine variables converge pointwise at every finite x, and bounded continuous tests have an integrable constant bound. DCT and change of variables prove weak convergence, including zero scales and the Dirac limit.

Dependency record: `deps: ["def-weak-convergence-of-borel-probability-measures", "thm-dominated-convergence", "thm-change-of-variables-for-expectation", "def-standard-normal-and-normal-laws", "def-axiom-of-choice"]`. Read current item and owning contract. Source metadata (not an independent retrieval claim):

```yaml
references:
    - title: Durrett, §3.2, bounded continuous test criterion
      url: https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf
```

No repair or unresolved obligation for this item. Validation pending scoped final checks. Next action: next assigned item.

### Batch 3: `ex-quantile-coupling-on-the-real-line` — accepted

Claim/conventions: Assume AC. If real probability laws $\mu_n\Rightarrow\mu$ have CDFs $F_n$,F and generalized inverses $Q_n(u)=\inf\{x:F_n(x)\ge u\}$, $Q(u)=\inf\{x:F(x)\ge u\}$ for 0<$u<1$, then on Borel Lebesgue probability (0,1), $Q_n$ and Q have those laws and $Q_n\to Q$ almost surely.

Evidence: CDF endpoint limits make the inverse infima finite; right continuity proves the exact sublevel equivalence in both directions and hence measurability and the prescribed laws. At a continuity point u of Q, the auxiliary v>u supplies a strict upper CDF inequality even on flat parts; continuity points a,b of F exist by Froda. Portmanteau then traps Q_n(u). Froda plus AC-implied CC makes the remaining discontinuities null; u=0,1 are excluded. Compared with Vienna Lemma 5.26 and Theorem 5.27 pp.64–65, lines4873–4912.

Dependency record: `deps: ["thm-probability-law-and-distribution-function-correspondence", "thm-portmanteau-theorem", "thm-froda", "thm-lebesgue-measure-of-a-box-of-every-kind", "prop-countable-subsets-of-rn-are-lebesgue-null", "def-countable-choice", "def-axiom-of-choice"]`. Read current item and owning contract. Source metadata (not an independent retrieval claim):

```yaml
references:
    - title: Durrett, Theorem 3.2.8, pp. 118–119
      url: https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf
```

No repair or unresolved obligation for this item. Validation pending scoped final checks. Next action: next assigned item.

### Batch 3: `cex-pointwise-cdf-convergence-at-a-jump-is-not-required` — accepted

Claim/conventions: Weak convergence does not require CDF convergence at a jump of the limiting CDF. The witness is $\mu_n=\delta_{1/n}$ and $\mu=\delta_0$ on the real line.

Evidence: The point masses converge on every bounded continuous test, but the right-closed CDF at zero stays zero while the limiting CDF equals one. This refutes precisely unrestricted CDF convergence at jumps.

Dependency record: `deps: ["def-weak-convergence-of-borel-probability-measures", "def-cumulative-distribution-function-of-a-random-variable"]`. Read current item and owning contract. Source metadata (not an independent retrieval claim):

```yaml
references:
    - title: Durrett, §3.2.1, continuity-point convention
      url: https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf
```

No repair or unresolved obligation for this item. Validation pending scoped final checks. Next action: next assigned item.

### Batch 3: `cex-bounded-continuous-cannot-be-replaced-by-all-bounded-measurable-functions` — accepted

Claim/conventions: Weak convergence need not give convergence of integrals for all bounded Borel tests. Take $\mu_n=\delta_{1/n}$, $\mu=\delta_0$, and $h=\mathbf1_{\{0\}}$ on the real line.

Evidence: The same point masses converge weakly; the indicator of the closed singleton zero is bounded Borel and has integrals zero versus one. The witness supplies the claimed failure.

Dependency record: `deps: ["def-weak-convergence-of-borel-probability-measures"]`. Read current item and owning contract. Source metadata (not an independent retrieval claim):

```yaml
references:
    - title: van Gaans, Definition 3.1; Dirac test example
      url: https://pub.math.leidenuniv.nl/~gaansowvan/jancol1.pdf
```

No repair or unresolved obligation for this item. Validation pending scoped final checks. Next action: next assigned item.

### Batch 3: `cex-a-nontight-sequence-with-no-probability-law-subsequence-limit` — accepted

Claim/conventions: The laws $\mu_n=\delta_n$ on the real line form a nontight sequence with no subsequence converging weakly to a probability law on the real line.

Evidence: Compact subsets of R are bounded, so escaped point masses defeat a common compact set at epsilon=1/2. Along any subsequence the open-set Portmanteau inequality forces zero limiting mass on every (-m,m); continuity from below contradicts total mass one.

Dependency record: `deps: ["def-tight-family-of-probability-measures", "thm-portmanteau-theorem", "thm-continuity-from-below-for-measures", "thm-compact-subset-is-closed-and-bounded"]`. Read current item and owning contract. Source metadata (not an independent retrieval claim):

```yaml
references:
    - title: van Gaans, example after Theorem 5.2, p. 18; Dirac variant
      url: https://pub.math.leidenuniv.nl/~gaansowvan/jancol1.pdf
```

No repair or unresolved obligation for this item. Validation pending scoped final checks. Next action: next assigned item.

### Batch 3: `cex-boundedness-of-first-moments-alone-does-not-give-uniform-integrability` — accepted

Claim/conventions: There are nonnegative variables $X_n$ on one probability space with $P(X_n=n)=1/n$, $P(X_n=0)=1-1/n$. They have $\mathbb E|X_n|=1$ and tight laws converging weakly to $\delta_0$, but are not uniformly integrable.

Evidence: The explicit countable probability weights telescope to one and countable additivity follows from nonnegative finite subsums. The variables on this single space have the stated laws including n=1. Their first moments and all supremum tail integrals equal one, while bounded test errors are at most 2||f||/n. Markov and compact intervals prove tightness independently of uniform integrability.

Dependency record: `deps: ["def-uniformly-integrable-family", "def-weak-convergence-of-borel-probability-measures", "def-tight-family-of-probability-measures", "cor-markov-inequality-for-random-variables", "thm-heine-borel-rn"]`. Read current item and owning contract. Source metadata (not an independent retrieval claim):

```yaml
references:
    - title: Durrett, §3.2, weak convergence versus moment convergence; explicit two-point construction
      url: https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf
```

No repair or unresolved obligation for this item. Validation pending scoped final checks. Next action: next assigned item.

### Batch 3: `ex-empirical-laws-of-a-finite-valued-iid-sample` — accepted

Claim/conventions: For IID samples with law $\mu=\sum_{j=1}^mp_j\delta_{a_j}$ on distinct points $a_1,\ldots,a_m\in\mathbb R^d$, where $p_j\ge0$ and $\sum_jp_j=1$, the empirical laws converge weakly almost surely. On outcomes whose samples all lie in this finite set, weak convergence is equivalent to convergence of all atom frequencies to $p_j$.

Evidence: The empirical theorem applies and countable subadditivity gives one conull event containing all samples in the finite set. On those outcomes finite sums prove frequency convergence implies weak convergence. Positive separation radii provide continuous atom-isolating tests for the converse, with m=1 treated separately and zero weights allowed.

Dependency record: `deps: ["thm-empirical-measures-of-iid-euclidean-samples-converge-weakly", "def-weak-convergence-of-borel-probability-measures", "thm-finite-and-countable-subadditivity-of-measures"]`. Read current item and owning contract. Source metadata (not an independent retrieval claim):

```yaml
references:
    - title: Durrett, §§2.4–2.5, pp. 76–87
      url: https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf
```

No repair or unresolved obligation for this item. Validation pending scoped final checks. Next action: next assigned item.

### Batch 4: `lem-hilbert-cube-has-a-bimeasurable-real-coding` — accepted

Claim/conventions: There is an explicit Borel measurable bijection $c:[0,1]^{\mathbb N}\to C$ onto a Borel subset $C\subseteq[0,1]$, whose inverse is Borel measurable. The cube carries its product topology and its Borel sigma-algebra; indices start at zero.

Evidence: The floor digits of x_i/2 are Borel, reconstruct the value and have infinitely many zeros, including endpoints. The converse row criterion recovers the unique canonical expansion. Ternary first differences dominate their tails; separated closed cylinders prove a homeomorphism onto a closed Cantor set without product compactness. The row conditions are Borel, so the image C is Borel; explicit finite rational-box codes establish inverse measurability into the cube. All constructions are explicit and use no choice. Read Durrett Theorem 2.1.22 and full coding paragraph/caveat, printed p.54, PDF index61 lines3303–3354; the authored proof supplies its abbreviated image detail.

Dependency record: `deps: [def-borel-sigma-algebra, def-product-topology, thm-seven-generators-of-the-borel-sigma-algebra-on-r, thm-sequential-suprema-infima-limsup-liminf-and-pointwise-limits-are-measurable, thm-geometric-series, thm-rationals-countable, lem-rat-embeds-dense, lem-integer-part, def-integer-power, thm-n-cross-n-countable]`. Read current item and owning contract. Source metadata (not an independent retrieval claim):

```yaml
references:
    - title: "Durrett, Probability: Theory and Examples, 5th ed."
      url: https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf
---

## Statement

There is an explicit Borel measurable bijection $c:[0,1]^{\mathbb N}\to C$ onto a Borel subset $C\subseteq[0,1]$, whose inverse is Borel measurable. The cube carries its product topology and its Borel sigma-algebra; indices start at zero.

## Facts & Assumptions

**Given:** The cube $Q=[0,1]^{\mathbb N}$ with its product topology and Borel sigma-algebra; natural indices start at zero.

[F1] The integer part is the unique integer $m$ with $m\le t<m+1$. ([[lem-integer-part]])

[F2] Geometric series with ratios $1/2$ and $1/3$ converge, with their stated sums. ([[thm-geometric-series]])

[F3] The explicit map $J(i,l)=2^i(2l+1)$ bijects pairs of naturals with positive integers. ([[thm-n-cross-n-countable]])

[F4] Pointwise limits of measurable real functions are measurable. ([[thm-sequential-suprema-infima-limsup-liminf-and-pointwise-limits-are-measurable]])

[F5] Rational intervals generate the real Borel sigma-algebra. ([[thm-seven-generators-of-the-borel-sigma-algebra-on-r]])

[F6] The rationals have an explicit countable enumeration. ([[thm-rationals-countable]])

[F7] Between distinct reals lies a rational. ([[lem-rat-embeds-dense]])

[F8] Finite intersections of coordinate open sets form a basis of the product topology. ([[def-product-topology]])

[F9] Borel sets are the sigma-algebra generated by open sets. ([[def-borel-sigma-algebra]])

[F10] Positive-base integer powers and their reciprocals are defined. ([[def-integer-power]])

## Proof

**Proof technique:** direct.

1.1 For $0\le t\le1/2$ put $m_k=\lfloor2^kt\rfloor$ for $k\ge0$ and $b_k=m_k-2m_{k-1}$ for $k\ge1$. Since $m_{k-1}\le2^{k-1}t<m_{k-1}+1$, we have $b_k\in\{0,1\}$. Each $m_k$ is Borel: $\{m_k=l\}=[l2^{-k},(l+1)2^{-k})\cap[0,1/2]$. Thus each digit is Borel. [F1, F5, F10]

2.1 Here $m_0=0$. Telescoping gives $\sum_{k=1}^n b_k2^{-k}=2^{-n}m_n$ and $0\le t-2^{-n}m_n<2^{-n}$, so $t=\sum_{k\ge1}b_k2^{-k}$. The digits cannot be eventually all ones: such a tail would make $t$ dyadic, whereas for dyadic $t$ the integers $2^kt$ are exact for all sufficiently large $k$, giving $b_k=0$. Thus there are infinitely many zeros, including when $t=0$ or $t=1/2$. [step 1.1, F2]

2.2 Interleave cube digits by $a_{J(i,k-1)}=b_k(x_i/2)$. The bijection in [F3] assigns exactly one digit to each positive position. For any binary sequence $a$, define $T(a)=\sum_{j\ge1}2a_j3^{-j}$. Its values lie in $[0,1]$. Agreement through position $n$ gives $|T(a)-T(a^{\ast})|\le3^{-n}$. If the first differing position is $n$, its contribution has magnitude $2\,3^{-n}$ and the remaining tail has magnitude at most $3^{-n}$, so $|T(a)-T(a^{\ast})|\ge3^{-n}>0$. Thus $T$ is continuous and injective. [F2, F3, step 1.1]

3.1 Conversely let $(b_k)$ be a binary sequence with infinitely many zeros and sum $t\le1/2$. Its tail after $n$, multiplied by $2^n$, lies in $[0,1)$: the all-one tail sums to one, and at least one digit is zero. Hence $\lfloor2^nt\rfloor=\sum_{k=1}^n b_k2^{n-k}$, recovering exactly the digits of step 1.1. In binary sequence space $D=\{0,1\}^{\mathbb N_{\ge1}}$, the allowable row set is $R=\bigcap_{N\ge1}\bigcup_{k\ge N}\{b:b_k=0\}\cap\{b:\sum_{k\ge1}b_k2^{-k}\le1/2\}$. It is Borel: cylinders are clopen and the sum is continuous because the tail is at most $2^{-n}$. [step 1.1, step 2.1, F2, F9]

3.2 For a binary word $w$ of length $n$, let $s_w=\sum_{j=1}^n2w_j3^{-j}$ and $I_w=[s_w,s_w+3^{-n}]$. Distinct words of the same length give disjoint intervals separated by a positive gap. The closed set $K=\bigcap_{n\ge1}\bigcup_{|w|=n}I_w$ equals $T[D]$: each point of the intersection has a unique word at each length; nesting forces consistent prefixes; the resulting sequence has sum equal to the point since interval lengths tend to zero. Conversely each sum lies in every prefix interval. The inverse digits are continuous on $K$ because the finitely many cylinders at each length are separated. Hence $T:D\to K$ is a homeomorphism, without an appeal to product compactness. [step 2.2, F2]

4.1 The deinterleaving row maps $D\to D$, $a\mapsto(a_{J(i,k-1)})_{k\ge1}$, are continuous: a finite row-cylinder condition is a finite cylinder condition on $a$. Therefore $H=\{a:\text{every deinterleaved row belongs to }R\}$ is Borel in $D$. The homeomorphism gives $C=T[H]=(T^{-1})^{-1}[H]$ Borel in $K$. Since $K$ is closed in $[0,1]$, a trace Borel set in $K$ is Borel in $[0,1]$: the trace sets form a sigma-algebra, and relative opens are traces of ambient opens. [step 3.1, step 3.2, F9]

5.1 The map $c(x)=T(a(x))$ is measurable: every interleaved digit is Borel by step 1.1 and every finite sum has finite range with Borel level sets (finite unions of intersections of digit level sets), so [F4] applies. Its inverse on $C$ is $x_i=2\sum_{k\ge1}(T^{-1}z)_{J(i,k-1)}2^{-k}$. These coordinates are measurable by [F4]. They lie in $[0,1]$ and recover both compositions by the row characterization; thus $c$ is a bijection onto precisely $C$. [step 1.1, step 3.1, step 2.2, step 4.1, F4]

6.1 For completeness, rational intervals restricted to $[0,1]$ form a countable basis by density. Finite coordinate boxes from these intervals are countable explicitly. Enumerate rational endpoints by [F6]. A coordinate condition $x_i\in(p_j,p_k)\cap[0,1]$ has code $J(i,J(j,k))$. A list of condition codes $(z_0,\ldots,z_{l-1})$ has code $J(l,e_l)$, where $e_0=0$ and $e_{r+1}=J(e_r,z_r)$. Inverting the injective J recovers the length and every entry, so this encodes lists injectively. Each box is represented by such a finite list; assigning the least code of its representations injects the family of boxes into the naturals. The empty list represents the whole cube. Every open subset of the cube is a union of a subfamily of this countable basis. Thus the Borel sigma-algebra equals the coordinate-generated sigma-algebra, and coordinate measurability in step 5.1 proves measurability of the whole inverse. This establishes all assertions. [F3, F5, F6, F7, F8, F9, step 5.1] ∎

## Source notes

Durrett, Probability: Theory and Examples, 5th ed., Theorem 2.1.22, printed pp.53–54 (PDF pp.61–62). The complete coding paragraph and its caveat were read. The present proof replaces the abbreviated digit argument by a Borel row condition and separated ternary cylinders. The interleaving uses the actual bijection in the local supplier rather than attributing a diagonal formula to that supplier.
```

No repair or unresolved obligation for this item. Validation pending scoped final checks. Next action: next assigned item.

### Batch 4: `thm-standard-borel-spaces-admit-bimeasurable-real-codings` — accepted

Claim/conventions: Assume AC. Every standard-Borel space $(E,\mathcal S)$ is measurably isomorphic to a Borel subset of $[0,1]$, including $E=\varnothing$.

Evidence: A single Polish presentation embeds homeomorphically in the cube. The bounded complete interval metrics license its weighted product metric. Transporting completeness and AC-implied DC meet the forward G_delta supplier. Read its current published proof fully: simultaneous ambient and complete-metric smallness, ambient closure, DC selection, and uniqueness establish ambient equality. The coding inverse makes the image of this Borel subset Borel; restricted maps give both measurable compositions. Empty and singleton cases are valid.

Dependency record: `deps: [lem-hilbert-cube-has-a-bimeasurable-real-coding, def-standard-borel-space, thm-hilbert-cube-universal-for-separable-metrizable-spaces, thm-completely-metrizable-subspaces-of-metric-spaces-are-g-delta, def-axiom-of-choice, lem-standard-complete-metric-on-a-countable-product, thm-reals-cauchy-complete]`. Read current item and owning contract. Source metadata (not an independent retrieval claim):

```yaml
references:
    - title: "Durrett, Probability: Theory and Examples, 5th ed."
      url: https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf
---

## Statement

Assume AC. Every standard-Borel space $(E,\mathcal S)$ is measurably isomorphic to a Borel subset of $[0,1]$, including $E=\varnothing$.

## Facts & Assumptions

**Given:** AC and a standard-Borel space $(E,\mathcal S)$.

[F1] There is a Polish presentation $h:E\to P$ preserving Borel sets in both directions. ([[def-standard-borel-space]])

[F2] A separable metrizable space embeds homeomorphically in the Hilbert cube. ([[thm-hilbert-cube-universal-for-separable-metrizable-spaces]])

[F3] The weighted sum of complete coordinate metrics bounded by one metrizes the cube. ([[lem-standard-complete-metric-on-a-countable-product]])

[F4] Under DC, a completely metrizable subspace of a metric space is $G_\delta$. ([[thm-completely-metrizable-subspaces-of-metric-spaces-are-g-delta]])

[F5] The cube has a bimeasurable coding $c$ onto a Borel $C\subseteq[0,1]$. ([[lem-hilbert-cube-has-a-bimeasurable-real-coding]])

[F6] AC supplies the choices in the metric interfaces, including DC by selecting a successor for each admissible finite history and recursively iterating. ([[def-axiom-of-choice]])

[F7] Every real Cauchy sequence converges. ([[thm-reals-cauchy-complete]])

## Proof

**Proof technique:** direct.

1.1 If $E=\varnothing$, the empty bijection onto $\varnothing$ is bimeasurable. Otherwise fix the single Polish presentation $h:E\to P$ of [F1]. Its separability and metrizability give a homeomorphic embedding $e:P\to Q=[0,1]^{\mathbb N}$ by [F2]. [F1, F2]

2.1 The interval $[0,1]$ is complete: a Cauchy sequence converges in $\mathbb R$ by [F7], and its limit stays between zero and one by the limit inequalities. Its metric is bounded by one. The metric $D(x,y)=\sum_{n\ge0}2^{-(n+1)}|x_n-y_n|$ makes $Q$ a metric space by [F3]. The image $Y=e[P]$ is completely metrizable, transporting a complete compatible metric from $P$. AC supplies DC as described in [F6], so [F4] yields that $Y$ is $G_\delta$ and consequently Borel in $Q$. The currently repaired supplier proves the ambient equality: points in every small open neighbourhood union lie within $1/n$ of $Y$, hence in its closure, before the complete-metric limit argument. [step 1.1, F3, F4, F6, F7]

3.1 Let $c:Q\to C$ be [F5]. Since $c^{-1}$ is measurable, $c[Y]=(c^{-1})^{-1}[Y]$ is Borel in $C$, and therefore in $[0,1]$, because $C$ itself is Borel. Restricting $c$ and its inverse to $Y$ and $c[Y]$ preserves measurability. The homeomorphism $e$ is bimeasurable on trace Borel sets. Thus $c\circ e\circ h$ and $h^{-1}\circ e^{-1}\circ c^{-1}$ are mutually inverse measurable maps between $E$ and $c[Y]$. [step 1.1, step 2.1, F5] ∎

## Source notes

Durrett Theorem 2.1.22, printed pp.53–54, provides the coding route. Its omitted image detail is supplied by the local cube lemma and the current forward completely-metrizable-to-G-delta theorem; no converse or external recorded theorem is imported.
```

No repair or unresolved obligation for this item. Validation pending scoped final checks. Next action: next assigned item.

### Batch 4: `cor-standard-borel-spaces-have-countable-generating-and-measure-determining-algebras` — accepted

Claim/conventions: Assume AC. Every standard-Borel space $(E,\mathcal S)$ has a countable algebra $\mathcal A$ which generates $\mathcal S$, separates points, and determines finite measures: if finite measures $\mu,\nu$ agree on $\mathcal A$, then $\mu=\nu$. In particular it determines probability measures.

Evidence: Boolean algebras from the first n rational-ray pullbacks are finite and increasing, so their union is an algebra and is countable under the stated AC-implied CC. Rational cuts generate and separate codes. Equality of finite measures is a lambda-system because their common finite total permits subtraction; pi-lambda gives equality on all measurable sets. Empty spaces, zero mass and singleton spaces are included; arbitrary infinite measures are excluded.

Dependency record: `deps: [thm-standard-borel-spaces-admit-bimeasurable-real-codings, thm-dynkin-pi-lambda, thm-seven-generators-of-the-borel-sigma-algebra-on-r, def-axiom-of-choice, thm-rationals-countable, thm-countable-union-of-countable, def-countable-choice, lem-rat-embeds-dense]`. Read current item and owning contract. Source metadata (not an independent retrieval claim):

```yaml
references:
    - title: "Durrett, Probability: Theory and Examples, 5th ed."
      url: https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf
---

## Statement

Assume AC. Every standard-Borel space $(E,\mathcal S)$ has a countable algebra $\mathcal A$ which generates $\mathcal S$, separates points, and determines finite measures: if finite measures $\mu,\nu$ agree on $\mathcal A$, then $\mu=\nu$. In particular it determines probability measures.

## Facts & Assumptions

**Given:** AC and a standard-Borel space $(E,\mathcal S)$; in the determination assertion, two finite measures agreeing on the constructed algebra.

[F1] There is a bimeasurable bijection $f:E\to B$ with $B\subseteq[0,1]$ Borel. ([[thm-standard-borel-spaces-admit-bimeasurable-real-codings]])

[F2] The rational cuts can be enumerated. ([[thm-rationals-countable]])

[F3] Rational right rays generate real Borel sets; their complementary closed left rays do also. ([[thm-seven-generators-of-the-borel-sigma-algebra-on-r]])

[F4] Under countable choice a countable union of finite sets is countable. ([[thm-countable-union-of-countable]])

[F5] Countable choice selects from each nonempty set in a sequence. ([[def-countable-choice]])

[F6] AC supplies that countable choice by restriction of a choice function. ([[def-axiom-of-choice]])

[F7] A lambda-system containing a pi-system contains its generated sigma-algebra. ([[thm-dynkin-pi-lambda]])

[F8] Rational cuts separate two distinct real numbers. ([[lem-rat-embeds-dense]])

## Proof

**Proof technique:** direct.

1.1 Fix $f$ from [F1]. Enumerate the pullbacks $H_q=f^{-1}[B\cap(-\infty,q]]$ using [F2]. Let $\mathcal A_n$ be the Boolean algebra on the first $n$ pullbacks, with $\mathcal A_0=\{\varnothing,E\}$. Its atoms are the at most $2^n$ intersections obtained by taking each generator or its complement; every member is a union of atoms. Thus each $\mathcal A_n$ is finite, and $\mathcal A=\bigcup_n\mathcal A_n$ is an algebra: any two elements lie in a common $\mathcal A_n$. [F1, F2]

2.1 AC implies [F5], so [F4] makes $\mathcal A$ countable. This is the exact countable-choice use for enumerating the finite algebras. The trace of the generators of [F3] generates $\mathcal B(B)$, so bimeasurability of $f$ gives $\sigma(\mathcal A)=\mathcal S$. If $x\ne y$, injectivity gives different codes; [F8] provides a rational between them, and its pullback contains exactly the lower-coded point. [step 1.1, F1, F3, F4, F5, F6, F8]

3.1 For finite $\mu,\nu$ agreeing on $\mathcal A$, their total masses agree because $E\in\mathcal A$. The equality class $\mathcal D=\{A\in\mathcal S:\mu(A)=\nu(A)\}$ contains $E$, is closed under complements by subtracting from the common finite total, and under countable disjoint unions by countable additivity. It is a lambda-system containing the pi-system $\mathcal A$. By [F7], $\mathcal S\subseteq\mathcal D$. This also covers zero total mass and $E=\varnothing$; finiteness prevents subtraction of infinite totals. [step 1.1, step 2.1, F7] ∎

## Source notes

Durrett Theorem 2.1.22 (printed pp.53–54) motivates real coding. The finite-algebra construction and finite-total lambda-system argument are derived here from the exact local countability and pi-lambda statements; arbitrary infinite measures are outside the claim.
```

No repair or unresolved obligation for this item. Validation pending scoped final checks. Next action: next assigned item.

### Batch 3 page `strong-laws-of-large-numbers` — accepted

The A page orders truncation and variance suppliers before the L1 and pairwise strong laws, and the maximal lemma before ergodic applications. The prose accurately describes the reviewed results, including finite limits, finite-variance rate and explicit AC product constructions. Read full current page and all listed items. Dependencies and conventions are those recorded in the preceding item reviews and owned manifest. No repairs, new suppliers, shared-plan amendments or published defects found. Scoped checks pending. Next action: batch 4 authored review.

### Batch 3 page `strong-laws-of-large-numbers-examples` — accepted

All seven listed examples were reviewed. The summary matches the frequency, heavy-tail integrable mean, nonidentical law and three independence/integrability/convergence witnesses; it adds no stronger mathematical assertion. Read full current page and all listed items. Dependencies and conventions are those recorded in the preceding item reviews and owned manifest. No repairs, new suppliers, shared-plan amendments or published defects found. Scoped checks pending. Next action: batch 4 authored review.

### Batch 3 page `weak-convergence-tightness-and-representation` — accepted

The page orders definitions and Portmanteau before tightness, compact extraction and Prokhorov, then metric and realization suppliers before consumers. The countable test and density-normalization lemmas precede their applications. Its prose accurately describes the reviewed mathematics. Read full current page and all listed items. Dependencies and conventions are those recorded in the preceding item reviews and owned manifest. No repairs, new suppliers, shared-plan amendments or published defects found. Scoped checks pending. Next action: batch 4 authored review.

### Batch 3 page `weak-convergence-tightness-and-representation-examples` — accepted

All ten examples are reviewed and have the required A-page suppliers. The prose describes the actual Dirac, grid, moment, Gaussian, quantile and empirical witnesses; bounded moments versus uniform integrability is illustrated without asserting a converse tightness theorem. Read full current page and all listed items. Dependencies and conventions are those recorded in the preceding item reviews and owned manifest. No repairs, new suppliers, shared-plan amendments or published defects found. Scoped checks pending. Next action: batch 4 authored review.

### Batch 4: `lem-borel-subspaces-admit-polish-presentations` — accepted

Claim/conventions: Assume AC. If $B$ is a Borel subset of a Polish space $(P,\tau)$, then $B$ has a finer Polish topology with exactly the trace sigma-algebra $\mathcal B(P)|_B$. In fact there is a finer Polish topology on $P$ with the same Borel sets which makes $B$ clopen. Thus $(B,\mathcal B(P)|_B)$ is standard Borel.

Evidence: Open and closed pieces are completely metrizable with countable trace bases under AC-implied CC. Bounding metrics and cross-distance two gives a complete separable split topology with old Borel sets. AC selects witnesses for countably many refinements; their diagonal is closed because each refines the same Hausdorff topology. The weighted product metric is complete and finite cylinders have a countable basis, so the common refinement is Polish and Borel-preserving. Splitting the union proves sigma-algebra closure and restriction to the clopen B proves the trace assertion. Empty pieces are handled. Read Marker Lemmas 2.22–2.23 and Theorem 2.24 proof, printed pp.20–21, PDF indices19–20 lines1334–1393; the authored proof explicitly supplies refinement and countable-basis qualifications.

Dependency record: `deps: [def-standard-borel-space, def-polish-space, thm-g-delta-subspaces-of-complete-metric-spaces-are-completely-metrizable, lem-standard-complete-metric-on-a-countable-product, prop-polish-space-countability-conventions-agree, def-axiom-of-choice, thm-countable-union-of-countable, thm-product-of-countable]`. Read current item and owning contract. Source metadata (not an independent retrieval claim):

```yaml
references:
    - title: "Rao and Srivastava, An Elementary Proof of the Borel Isomorphism Theorem"
      url: https://math.iisc.ac.in/~manju/MartBM/RaoSrivastava_borelisomorphism.pdf
    - title: "Marker, Descriptive Set Theory, Lemmas 2.22-2.23 and Theorem 2.24"
      url: https://www.math.uic.edu/~marker/math512/dst.pdf
---

## Statement

Assume AC. If $B$ is a Borel subset of a Polish space $(P,\tau)$, then $B$ has a finer Polish topology with exactly the trace sigma-algebra $\mathcal B(P)|_B$. In fact there is a finer Polish topology on $P$ with the same Borel sets which makes $B$ clopen. Thus $(B,\mathcal B(P)|_B)$ is standard Borel.

## Facts & Assumptions

**Given:** AC, a Polish space $(P,\tau)$, and a Borel subset $B\subseteq P$.

[F1] Polish means separable and completely metrizable. ([[def-polish-space]])

[F2] Under countable choice, a $G_\delta$ subspace of a complete metric space has a compatible complete metric. ([[thm-g-delta-subspaces-of-complete-metric-spaces-are-completely-metrizable]])

[F3] Countably many complete metrics bounded by one have a complete product metric. ([[lem-standard-complete-metric-on-a-countable-product]])

[F4] Under countable choice, complete metrizability plus a countable basis is equivalent to being Polish. ([[prop-polish-space-countability-conventions-agree]])

[F5] AC selects the countable family of topology, metric and basis witnesses and supplies countable choice. ([[def-axiom-of-choice]])

[F6] A Polish presentation with exactly the given Borel sigma-algebra makes a space standard Borel. ([[def-standard-borel-space]])

[F7] Under countable choice, a countable union of countable sets is countable. ([[thm-countable-union-of-countable]])

[F8] A finite product of countable sets is countable, by iteration of the binary product statement. ([[thm-product-of-countable]])

## Proof

**Proof technique:** direct.

1.1 If $P$ is empty there is only the empty subset and the assertion holds. On nonempty $P$, fix a compatible complete metric and a countable basis using [F1], [F4] and [F5]. An open $U$ is $G_\delta$ (repeat $U$), so [F2] completely metrizes it; its closed complement is complete in the restricted original metric since a limit of a sequence in a closed set stays there. Both subspaces have countable trace bases and hence are Polish by [F4]. [F1, F2, F4, F5]

2.1 Bound each component metric by replacing $d$ with $\min(d,1)$; this preserves its topology and Cauchy sequences, hence completeness. On the disjoint union of $U$ and $P\setminus U$, retain those metrics within components and set cross-component distance equal to two. The triangle inequality holds within a component and across components (any cross-component path includes an edge of length two). A Cauchy sequence is eventually in one component and converges there. A union of the two countable bases is countable. This Polish topology is finer than $\tau$, makes $U$ clopen, and has the same Borel sets: each new open is the union of two old trace-open sets, hence old Borel. Empty components simply contribute no points. [step 1.1]

3.1 Let $\mathcal R$ be the old Borel subsets that can be made clopen by such a refinement. Step 2.1 puts every open set in $\mathcal R$; closure under complements uses the same topology. Given $B_n\in\mathcal R$, [F5] selects a witnessing Polish topology $\tau_{n+1}$, complete bounded metric and countable basis for each $n$. Include $\tau_0=\tau$. In $\prod_{n\ge0}(P,\tau_n)$ let $\Delta=\{(x,x,\ldots):x\in P\}$. [step 2.1, F5]

4.1 The diagonal $\Delta$ is closed. If two coordinates differ, disjoint neighbourhoods in the original metric topology pull back to open neighbourhoods in both refined coordinates; their product cylinder misses $\Delta$. The product is completely metrized by [F3], so its closed subspace $\Delta$ is complete. It has a countable basis of finite cylinders restricted to $\Delta$; For each finite length the coordinate-index and basis-index lists form a countable set by [F8]; [F7] makes the union over lengths countable, with its countable-choice hypothesis supplied by [F5]. By [F4] it is Polish. Pull its topology back to $P$ along $x\mapsto(x,x,\ldots)$. This refines every $\tau_n$. Each basic open is a finite intersection of old Borel sets, and every open is a union of a subfamily of the countable basis. Thus every new open is old Borel; the two Borel sigma-algebras coincide. [step 3.1, F3, F4, F5, F7, F8]

5.1 Each $B_n$ is clopen in the common refinement, so $\bigcup_n B_n$ is open. Apply the splitting construction of step 2.1 to that Polish topology, making the union clopen while preserving its Borel sets, hence the original Borel sets. Consequently $\mathcal R$ is a sigma-algebra containing $\tau$, and contains every old Borel set. For the specified $B$, restrict the resulting complete metric and countable basis to the closed set $B$. This is a Polish topology on $B$, finer than its original subspace topology; its Borel sets are precisely the old traces, since relative opens generate traces of Borel sets in either topology. The identity is the Polish presentation required by [F6]. [step 2.1, step 4.1, F4, F6] ∎

## Source notes

Marker, Descriptive Set Theory, Lemmas 2.22–2.23 and Theorem 2.24, printed pp.20–21 (PDF indices 19–20), full statements and proofs read. The closed-diagonal argument is expanded using continuity to the original Hausdorff topology. Rao–Srivastava, An Elementary Proof of the Borel Isomorphism Theorem, pp.347–349, is retained as the scaffold’s independent background treatment, not a load-bearing citation in this proof.
```

No repair or unresolved obligation for this item. Validation pending scoped final checks. Next action: next assigned item.

### Batch 4: `ex-countable-discrete-spaces-are-standard-borel` — accepted

Claim/conventions: Every at most countable set $S$ with its full power-set sigma-algebra is standard Borel, including the empty set. For example $S=\mathbb N$ has the discrete complete metric $d(m,n)=\mathbf1_{\{m\ne n\}}$.

Evidence: The 0/1 metric satisfies the triangle inequality and forces Cauchy sequences eventually constant. S is its own countable dense set and all subsets are open. The identity supplies the Polish presentation, with empty and singleton cases explicitly valid.

Dependency record: `deps: [def-standard-borel-space, def-polish-space]`. Read current item and owning contract. Source metadata (not an independent retrieval claim):

```yaml
references:
    - title: "Durrett, Probability: Theory and Examples, 5th ed."
      url: https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf
---

## Example

Every at most countable set $S$ with its full power-set sigma-algebra is standard Borel, including the empty set. For example $S=\mathbb N$ has the discrete complete metric $d(m,n)=\mathbf1_{\{m\ne n\}}$.

## Facts & Assumptions

**Given:** An at most countable set S with its full power-set sigma-algebra.

[F1] A separable completely metrizable space is Polish. ([[def-polish-space]])

[F2] A measurable space with a Polish presentation is standard Borel. ([[def-standard-borel-space]])

## Verification

**Proof technique:** direct.

1.1 On S define $d(x,y)=0$ if $x=y$ and $d(x,y)=1$ otherwise. Symmetry and separation are immediate, and if $x\ne z$, at least one of $x\ne y$ or $y\ne z$ holds, giving $d(x,z)=1\le d(x,y)+d(y,z)$. Balls of radius one half are singletons. Every Cauchy sequence is eventually constant, by applying the Cauchy condition with tolerance one half; hence d is complete. On N, for instance, $d(2,5)=1$ and $B_d(2,1/2)=\{2\}$. [given]

2.1 The countable set S itself is dense. Every subset is a union of singleton opens, so the Borel sigma-algebra is exactly its full power set. By [F1] S is Polish and the identity gives the presentation in [F2]. For empty S there are no Cauchy sequences, the empty metric is complete, and the empty set is a countable dense subset; for a singleton the only sequence is constant. [step 1.1, F1, F2] ∎

## Source notes

Marker, Descriptive Set Theory, Example 1.2, printed p.2; Durrett Theorem 2.1.22, printed pp.53–54. The metric and its Cauchy property are explicitly evaluated here.
```

No repair or unresolved obligation for this item. Validation pending scoped final checks. Next action: next assigned item.

### Batch 4: `ex-euclidean-borel-spaces-are-standard-borel` — accepted

Claim/conventions: For each finite $n\ge0$, $(\mathbb R^n,\mathcal B(\mathbb R^n))$ is standard Borel. For $n\ge1$ use $d_\infty(x,y)=\max_{i<n}|x_i-y_i|$; $\mathbb R^0$ is a singleton.

Evidence: Coordinatewise real completeness and finitely many convergence thresholds establish completeness of the maximum metric; the norm inequalities identify the Euclidean topology. Finite rational products are countable and dense using only finite choices. Dimension zero is treated as a singleton without an empty maximum.

Dependency record: `deps: [def-standard-borel-space, def-polish-space, thm-reals-cauchy-complete, thm-rationals-countable, lem-rat-embeds-dense, lem-metrics-on-rn, thm-product-of-countable]`. Read current item and owning contract. Source metadata (not an independent retrieval claim):

```yaml
references:
    - title: "Durrett, Probability: Theory and Examples, 5th ed."
      url: https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf
---

## Example

For each finite $n\ge0$, $(\mathbb R^n,\mathcal B(\mathbb R^n))$ is standard Borel. For $n\ge1$ use $d_\infty(x,y)=\max_{i<n}|x_i-y_i|$; $\mathbb R^0$ is a singleton.

## Facts & Assumptions

**Given:** A finite integer $n\ge0$ and the Borel measurable space $\mathbb R^n$.

[F1] The maximum-coordinate formula is a metric for n>=1. ([[lem-metrics-on-rn]])

[F2] Every real Cauchy sequence converges. ([[thm-reals-cauchy-complete]])

[F3] Q is countable. ([[thm-rationals-countable]])

[F4] The product of two countable sets is countable without choice. ([[thm-product-of-countable]])

[F5] Rational points approximate every real coordinate. ([[lem-rat-embeds-dense]])

[F6] A separable space with a complete compatible metric is Polish. ([[def-polish-space]])

[F7] The Borel space of a Polish space is standard Borel. ([[def-standard-borel-space]])

## Verification

**Proof technique:** direct.

1.1 For $n\ge1$, [F1] supplies the metric. A d-infinity Cauchy sequence is Cauchy in each coordinate since $|x_i-y_i|\le d_\infty(x,y)$. The coordinate limits exist by [F2]. For a fixed tolerance take the maximum of the finitely many coordinate convergence thresholds; beyond it all coordinate errors are below that tolerance, so the vectors converge in d-infinity. This metric induces the usual Euclidean topology: $d_\infty\le d_2\le\sqrt n\,d_\infty$ follows by bounding each squared coordinate by the maximum squared. [F1, F2]

1.2 Induction using [F3]–[F4] makes $\mathbb Q^n$ countable. Given a vector x and positive epsilon, [F5] gives a rational in each of its finitely many coordinate intervals of radius epsilon; the resulting vector q satisfies $d_\infty(x,q)<\varepsilon$. Hence Q to the nth power is dense. For instance in dimension two, $d_\infty((0,1),(1/3,4/3))=1/3$. [F3, F4, F5]

2.1 Steps 1.1–1.2 and [F6] show R to the nth power is Polish. The identity is the presentation of [F7]. For n=0 there is just the empty tuple, with zero metric and itself as a finite dense set; it is complete and Polish. No maximum over an empty index set is used. [step 1.1, step 1.2, F6, F7] ∎

## Source notes

Durrett Theorem 2.1.22, printed pp.53–54. The explicit complete Euclidean metric and rational density give the Polish presentation directly.
```

No repair or unresolved obligation for this item. Validation pending scoped final checks. Next action: next assigned item.

### Batch 4: `ex-borel-subspaces-of-polish-spaces-are-standard-borel` — accepted

Claim/conventions: Under AC, every Borel subset $B$ of a Polish space $P$ is standard Borel with its trace Borel sigma-algebra. A concrete instance is $\mathbb Q\subset\mathbb R$, presented by its discrete topology.

Evidence: The refinement lemma has exactly the stated AC and Borel hypotheses. In the rational example each subset is a countable union of closed singletons, so both trace and discrete Borel sigma-algebras equal the power set. The complete discrete presentation is distinguished from the inherited topology.

Dependency record: `deps: [lem-borel-subspaces-admit-polish-presentations, def-axiom-of-choice, thm-rationals-countable, thm-reals-cauchy-complete, lem-rat-embeds-dense]`. Read current item and owning contract. Source metadata (not an independent retrieval claim):

```yaml
references:
    - title: "Durrett, Probability: Theory and Examples, 5th ed."
      url: https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf
---

## Example

Under AC, every Borel subset $B$ of a Polish space $P$ is standard Borel with its trace Borel sigma-algebra. A concrete instance is $\mathbb Q\subset\mathbb R$, presented by its discrete topology.

## Facts & Assumptions

**Given:** AC, a Polish space P and a Borel subset B; the concrete instance is Q inside R.

[F1] Under AC a Borel subset has a finer Polish topology with exactly its trace Borel sets. ([[lem-borel-subspaces-admit-polish-presentations]])

[F2] Q is countable. ([[thm-rationals-countable]])

[F3] AC supplies the topology and metric choices in the refinement lemma. ([[def-axiom-of-choice]])

[F4] The usual real metric is complete. ([[thm-reals-cauchy-complete]])

[F5] Q is dense in R. ([[lem-rat-embeds-dense]])

## Verification

**Proof technique:** direct.

1.1 Apply [F1] with its AC hypothesis [F3]. It gives a Polish topology on B whose Borel sigma-algebra is the trace of that of P. The identity map from the trace measurable space to this presentation is therefore bimeasurable, proving the general assertion, including B empty. [F1, F3]

2.1 For the instance, R is complete by [F4] and separable by [F2]–[F5], hence Polish. Each singleton rational is closed in R (a point outside it has a ball avoiding it), so Q and every subset of Q are Borel by [F2] and countable unions. Thus $\mathcal B(\mathbb R)|_{\mathbb Q}=\mathcal P(\mathbb Q)$. The discrete metric $d(q,r)=\mathbf1_{\{q\ne r\}}$ is complete because a Cauchy sequence is eventually constant; Q itself is countable dense for this topology. Its Borel sets are again all subsets. For example the preimage of $\{1/2,2/3\}$ under the identity is exactly $\{1/2,2/3\}$ in both measurable structures. This gives the claimed explicit Polish presentation without requiring the inherited metric to be complete. [F2, F4, F5] ∎

## Source notes

Marker Theorem 2.24, printed pp.20–21, and Definition 2.29, pp.21–22; Durrett Theorem 2.1.22, printed pp.53–54. The Q instance is calculated locally.
```

No repair or unresolved obligation for this item. Validation pending scoped final checks. Next action: next assigned item.

### Batch 4: `def-conditional-expectation-given-a-sigma-algebra` — accepted

Claim/conventions: Let $(\Omega,\mathcal F,P)$ be a probability space, $\mathcal G\subseteq\mathcal F$ a sub-sigma-algebra, and $X:\Omega\to\mathbb R$ integrable. A **conditional-expectation version of $X$ given $\mathcal G$** is a real, $\mathcal G$-measurable, integrable function $Y$ such that $\int_A Y\,dP=\int_A X\,dP$ for every $A\in\mathcal G$. No completeness of $\mathcal G$ is assumed.

Expectation means the integral of [[def-expectation-of-a-nonnegative-or-integrable-random-variable]]. Integrable representatives use [[def-l-one-of-a-measure]]; quotient notation is introduced after uniqueness.

Evidence: The definition requires an everywhere real, G-measurable integrable representative with the event integral identities for all A in G. This is the correct version definition for integrable real X without completeness of G, and quotient notation is deferred until uniqueness.

Dependency record: `deps: [def-expectation-of-a-nonnegative-or-integrable-random-variable, def-l-one-of-a-measure]`. Read current item and owning contract. Source metadata (not an independent retrieval claim):

```yaml
references:
    - title: "Durrett, Probability: Theory and Examples, 5th ed."
      url: https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf
---

## Definition

Let $(\Omega,\mathcal F,P)$ be a probability space, $\mathcal G\subseteq\mathcal F$ a sub-sigma-algebra, and $X:\Omega\to\mathbb R$ integrable. A **conditional-expectation version of $X$ given $\mathcal G$** is a real, $\mathcal G$-measurable, integrable function $Y$ such that $\int_A Y\,dP=\int_A X\,dP$ for every $A\in\mathcal G$. No completeness of $\mathcal G$ is assumed.

Expectation means the integral of [[def-expectation-of-a-nonnegative-or-integrable-random-variable]]. Integrable representatives use [[def-l-one-of-a-measure]]; quotient notation is introduced after uniqueness.

## Source notes

Durrett §4.1, printed pp.205–206; van der Vaart §1.1, Definition 1.1, printed p.1. Integrability is imposed explicitly here.
```

No repair or unresolved obligation for this item. Validation pending scoped final checks. Next action: next assigned item.

### Batch 4: `thm-conditional-expectation-exists-by-radon-nikodym` — accepted

Claim/conventions: Assume AC. For every real integrable $X$ on $(\Omega,\mathcal F,P)$ and every sub-sigma-algebra $\mathcal G$, a conditional-expectation version of $X$ given $\mathcal G$ exists.

Evidence: The positive and negative indefinite measures restricted to G are finite and absolutely continuous, with the constant finite exhaustion Omega. Read the current RN statement and proof: under AC it returns real integrable densities for finite variation. Their negative sets are G-measurable null sets; replacement by zero is valid without completeness. Subtracting integrable real densities gives all required event identities without infinite subtraction.

Dependency record: `deps: [def-conditional-expectation-given-a-sigma-algebra, thm-radon-nikodym-density-exists-and-is-unique-up-to-almost-everywhere-equality, thm-indefinite-integral-of-a-nonnegative-function-is-a-measure, thm-linearity-of-the-lebesgue-integral-on-l-one, thm-nonnegative-integral-zero-iff-zero-almost-everywhere, def-axiom-of-choice, cor-integral-over-a-null-set-vanishes]`. Read current item and owning contract. Source metadata (not an independent retrieval claim):

```yaml
references:
    - title: "Durrett, Probability: Theory and Examples, 5th ed."
      url: https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf
---

## Statement

Assume AC. For every real integrable $X$ on $(\Omega,\mathcal F,P)$ and every sub-sigma-algebra $\mathcal G$, a conditional-expectation version of $X$ given $\mathcal G$ exists.

## Facts & Assumptions

**Given:** AC, a probability space $(\Omega,\mathcal F,P)$, a sub-sigma-algebra $\mathcal G$, and real $X\in L^1(P)$.

[F1] A version is real, integrable, $\mathcal G$-measurable, and has the required event integrals. ([[def-conditional-expectation-given-a-sigma-algebra]])

[F2] The indefinite integral of a nonnegative measurable function is a measure. ([[thm-indefinite-integral-of-a-nonnegative-function-is-a-measure]])

[F3] Under AC, an absolutely continuous signed measure with a common finite exhaustion has a real measurable RN density, integrable when its total variation is finite. ([[thm-radon-nikodym-density-exists-and-is-unique-up-to-almost-everywhere-equality]])

[F4] Linear combinations of integrable functions are integrable and event integrals are linear. ([[thm-linearity-of-the-lebesgue-integral-on-l-one]])

[F5] A nonnegative measurable function has zero integral exactly when it is zero almost everywhere. ([[thm-nonnegative-integral-zero-iff-zero-almost-everywhere]])

[F6] AC supplies the selections in the cited RN proof: a maximizing sequence and countably many Hahn decompositions. ([[def-axiom-of-choice]])

[F7] Nonnegative integrals over measurable null sets vanish. ([[cor-integral-over-a-null-set-vanishes]])

## Proof

**Proof technique:** direct.

1.1 Let $\mu=P|_{\mathcal G}$ and $\nu_\pm(A)=\int_A X^\pm\,dP$. Restricting the measures in [F2] from $\mathcal F$ to $\mathcal G$ makes $\nu_\pm$ finite positive measures, with total mass at most $E|X|$. If $\mu(A)=0$, [F7] gives $\nu_\pm(A)=0$, so $\nu_\pm\ll\mu$. The constant exhaustion $\Omega$ has finite $\mu$ and finite variation for both positive measures. [F2, F7]

2.1 Apply [F3] separately to $(\mu,\nu_+)$ and $(\mu,\nu_-)$. Its AC hypothesis is [F6]; its exhaustion and absolute continuity were checked in step 1.1. It supplies real, $\mathcal G$-measurable integrable $f_+,f_-$ with $\int_A f_\pm\,d\mu=\nu_\pm(A)$. They are nonnegative almost everywhere: on $N_\pm=\{f_\pm<0\}$ positivity of $\nu_\pm$ and nonpositivity of the integral force $\int_{N_\pm}(-f_\pm)=0$, so [F5] makes $N_\pm$ null. Set them to zero there. These are $\mathcal G$-measurable null sets, so the modification is legitimate without completing $\mathcal G$. The current RN interface already supplies real integrable densities, so no infinite density is subtracted. [step 1.1, F3, F5, F6, F7]

3.1 Put $Y=f_+-f_-$. It is real, $\mathcal G$-measurable and integrable, and for every $A\in\mathcal G$, $\int_A Y\,dP=\nu_+(A)-\nu_-(A)=\int_A(X^+-X^-)\,dP=\int_A X\,dP$, with only finite subtractions. Thus [F1] makes $Y$ the required version. [step 2.1, F1, F4] ∎

## Source notes

Durrett §4.1, existence paragraph, printed pp.206–207; van der Vaart Theorem 1.3, printed pp.1–2. The local current RN statement (including AC and its integrable real-valued output) is used exactly as stated.
```

No repair or unresolved obligation for this item. Validation pending scoped final checks. Next action: next assigned item.

### Batch 4: `lem-conditional-expectation-is-unique-almost-surely` — accepted

Claim/conventions: If $Y,Z$ are conditional-expectation versions of the same real integrable $X$ given $\mathcal G$, then $Y=Z$ almost surely.

Evidence: The difference is G-measurable and integrable with zero integral on every G-event. Testing its positive and negative sets makes both parts have zero integral and hence vanish a.s. Only the union of two measurable null sets is needed.

Dependency record: `deps: [def-conditional-expectation-given-a-sigma-algebra, thm-linearity-of-the-lebesgue-integral-on-l-one, thm-nonnegative-integral-zero-iff-zero-almost-everywhere, prop-closure-properties-of-measurable-functions-used-by-the-integral]`. Read current item and owning contract. Source metadata (not an independent retrieval claim):

```yaml
references:
    - title: "Durrett, Probability: Theory and Examples, 5th ed."
      url: https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf
---

## Statement

If $Y,Z$ are conditional-expectation versions of the same real integrable $X$ given $\mathcal G$, then $Y=Z$ almost surely.

## Facts & Assumptions

**Given:** A probability space, a sub-sigma-algebra $\mathcal G$, an integrable real X, and two versions Y,Z with all its G-event integrals.

[F1] Both versions have the same event integrals. ([[def-conditional-expectation-given-a-sigma-algebra]])

[F2] The difference is integrable and its integral is the difference of integrals. ([[thm-linearity-of-the-lebesgue-integral-on-l-one]])

[F3] Differences and their positive and negative parts are measurable. ([[prop-closure-properties-of-measurable-functions-used-by-the-integral]])

[F4] Zero integral of a nonnegative function implies it vanishes almost everywhere. ([[thm-nonnegative-integral-zero-iff-zero-almost-everywhere]])

## Proof

**Proof technique:** direct.

1.1 The difference $D=Y-Z$ is $\mathcal G$-measurable and integrable, and $\int_A D\,dP=0$ for every $A\in\mathcal G$. In particular the sets $A_+=\{D>0\}$ and $A_-=\{D<0\}$ belong to $\mathcal G$. [F1, F2, F3]

2.1 On $A_+$, $D\mathbf1_{A_+}=D^+\ge0$ has zero integral; on $A_-$, $-D\mathbf1_{A_-}=D^-\ge0$ also has zero integral. By [F4], both parts vanish almost surely. Off the union of their two null exceptional sets, $D=D^+-D^-=0$, proving $Y=Z$ almost surely. [step 1.1, F4] ∎

## Source notes

Durrett §4.1, uniqueness paragraph, printed p.206; van der Vaart Theorem 1.3, printed p.2.
```

No repair or unresolved obligation for this item. Validation pending scoped final checks. Next action: next assigned item.

### Batch 4: `def-conditional-expectation-as-an-ae-class` — accepted

Claim/conventions: Assume AC for the supplied existence theorem. Write $E[X\mid\mathcal G]$ for the unique class in $L^1(\Omega,\mathcal G,P|_{\mathcal G})$ consisting of conditional-expectation versions of $X$. A chosen real $\mathcal G$-measurable representative is a **version**. Equalities and inequalities involving these classes mean almost-sure equalities and inequalities.

Existence is [[thm-conditional-expectation-exists-by-radon-nikodym]] and uniqueness is [[lem-conditional-expectation-is-unique-almost-surely]], applied to [[def-conditional-expectation-given-a-sigma-algebra]]. The quotient is [[def-l-p-space-as-a-quotient-by-null-functions]]. If $X=X^{\ast}$ almost surely, [[thm-the-lebesgue-integral-respects-almost-everywhere-equality]] gives identical event integrals, so the output class is independent of the input representative. The [[def-axiom-of-choice]] assumption is inherited from RN existence.

Evidence: Existence under AC and the preceding uniqueness lemma define exactly one L1(G) class. G-measurable representatives differing a.s. satisfy the same event integrals; a.s. changes to X also preserve the output class. The statement does not assume arbitrary null modifications are G-measurable.

Dependency record: `deps: [def-conditional-expectation-given-a-sigma-algebra, thm-conditional-expectation-exists-by-radon-nikodym, lem-conditional-expectation-is-unique-almost-surely, def-l-p-space-as-a-quotient-by-null-functions, thm-the-lebesgue-integral-respects-almost-everywhere-equality, def-axiom-of-choice]`. Read current item and owning contract. Source metadata (not an independent retrieval claim):

```yaml
references:
    - title: "Durrett, Probability: Theory and Examples, 5th ed."
      url: https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf
---

## Definition

Assume AC for the supplied existence theorem. Write $E[X\mid\mathcal G]$ for the unique class in $L^1(\Omega,\mathcal G,P|_{\mathcal G})$ consisting of conditional-expectation versions of $X$. A chosen real $\mathcal G$-measurable representative is a **version**. Equalities and inequalities involving these classes mean almost-sure equalities and inequalities.

Existence is [[thm-conditional-expectation-exists-by-radon-nikodym]] and uniqueness is [[lem-conditional-expectation-is-unique-almost-surely]], applied to [[def-conditional-expectation-given-a-sigma-algebra]]. The quotient is [[def-l-p-space-as-a-quotient-by-null-functions]]. If $X=X^{\ast}$ almost surely, [[thm-the-lebesgue-integral-respects-almost-everywhere-equality]] gives identical event integrals, so the output class is independent of the input representative. The [[def-axiom-of-choice]] assumption is inherited from RN existence.

## Source notes

Durrett §4.1, printed p.206, version/uniqueness convention; van der Vaart Definition 1.1 and Theorem 1.3, printed pp.1–2.
```

No repair or unresolved obligation for this item. Validation pending scoped final checks. Next action: next assigned item.

### Batch 4: `thm-basic-algebra-and-order-properties-of-conditional-expectation` — accepted

Claim/conventions: Assume AC for existence. For real $X,Y\in L^1(P)$ and $a,b\in\mathbb R$, $E[aX+bY\mid\mathcal G]=aE[X\mid\mathcal G]+bE[Y\mid\mathcal G]$. Conditional expectation is positive, preserves order and constants, satisfies $E(E[X\mid\mathcal G])=EX$, and $|E[X\mid\mathcal G]|\le E[|X|\mid\mathcal G]$ almost surely. Also $X<Y$ almost surely implies $E[X\mid\mathcal G]<E[Y\mid\mathcal G]$ almost surely.

Evidence: Linearity and constants satisfy the defining event identities and uniqueness. Testing the negative event proves positivity, hence order and the conditional modulus bound; Omega gives expectation preservation. For W>0 a.s., the G-event on which its nonnegative conditional mean is zero has integral of W zero and must be null, proving strict a.s. order. This stronger correct clause is compatible with possible exceptional-point failures.

Dependency record: `deps: [def-conditional-expectation-as-an-ae-class, lem-conditional-expectation-is-unique-almost-surely, thm-linearity-of-the-lebesgue-integral-on-l-one, thm-nonnegative-integral-zero-iff-zero-almost-everywhere, prop-closure-properties-of-measurable-functions-used-by-the-integral, def-axiom-of-choice]`. Read current item and owning contract. Source metadata (not an independent retrieval claim):

```yaml
references:
    - title: "Durrett, Probability: Theory and Examples, 5th ed."
      url: https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf
---

## Statement

Assume AC for existence. For real $X,Y\in L^1(P)$ and $a,b\in\mathbb R$, $E[aX+bY\mid\mathcal G]=aE[X\mid\mathcal G]+bE[Y\mid\mathcal G]$. Conditional expectation is positive, preserves order and constants, satisfies $E(E[X\mid\mathcal G])=EX$, and $|E[X\mid\mathcal G]|\le E[|X|\mid\mathcal G]$ almost surely. Also $X<Y$ almost surely implies $E[X\mid\mathcal G]<E[Y\mid\mathcal G]$ almost surely.

## Facts & Assumptions

**Given:** AC, a probability space, a sub-sigma-algebra G, real integrable X,Y and real scalars a,b; for the strict clause assume X<Y almost surely.

[F1] Under AC the conditional class exists and each version has the defining event integrals. ([[def-conditional-expectation-as-an-ae-class]])

[F2] Versions with the same defining data agree almost surely. ([[lem-conditional-expectation-is-unique-almost-surely]])

[F3] Integrability and integrals are preserved by finite linear combinations. ([[thm-linearity-of-the-lebesgue-integral-on-l-one]])

[F4] A nonnegative measurable function has zero integral exactly when it is zero almost everywhere. ([[thm-nonnegative-integral-zero-iff-zero-almost-everywhere]])

[F5] Linear combinations, absolute values and discrepancy sets are measurable. ([[prop-closure-properties-of-measurable-functions-used-by-the-integral]])

## Proof

**Proof technique:** direct.

1.1 Choose versions $U=E[X\mid\mathcal G]$ and $V=E[Y\mid\mathcal G]$. The function $aU+bV$ is $\mathcal G$-measurable and integrable. For every $A\in\mathcal G$, $\int_A(aU+bV)=a\int_A X+b\int_A Y=\int_A(aX+bY)$. It is a version of the left side, so uniqueness proves linearity. [F1, F2, F3, F5]

2.1 If $X\ge0$ almost surely, on $A=\{U<0\}\in\mathcal G$ we have $0\le\int_A X=\int_A U\le0$. Thus $\int_A(-U)=0$, and [F4] gives $P(A)=0$. For $X\le Y$ apply this to $Y-X$ and use linearity; this proves order preservation. [step 1.1, F1, F4, F5]

3.1 The constant function $c$ is integrable, $\mathcal G$-measurable, and has its own event integrals, so $E[c\mid\mathcal G]=c$ by uniqueness. Testing $A=\Omega$ in [F1] gives $EU=EX$. Finally $-|X|\le X\le|X|$ and steps 1.1–2.1 give $-E[|X|\mid\mathcal G]\le U\le E[|X|\mid\mathcal G]$. Hence $|U|\le E[|X|\mid\mathcal G]$ and $E|U|\le E|X|$. [step 1.1, step 2.1, F1, F2]

4.1 If $W=Y-X>0$ almost surely, let $T=E[W\mid\mathcal G]\ge0$ almost surely by step 2.1. The event $A=\{T=0\}$ has $\int_A W=\int_A T=0$, so $W\mathbf1_A=0$ almost surely by [F4]. Since $W>0$ off a null set, this forces $P(A)=0$. Together with $P(T<0)=0$ this gives $T>0$ almost surely; linearity identifies $T=V-U$. [step 1.1, step 2.1, F1, F4] ∎

## Source notes

Durrett Lemma 4.1.1 and Theorem 4.1.9(a)–(b), printed pp.206,210–211; van der Vaart Lemma 1.9(i),(iii),(iv), printed p.4. The strict almost-sure statement is derived by the zero-event argument, not attributed to a counterexample.
```

No repair or unresolved obligation for this item. Validation pending scoped final checks. Next action: next assigned item.

### Batch 4: `thm-taking-out-what-is-known` — accepted

Claim/conventions: Assume AC for existence. If $X\in L^1(P)$ and $Z$ is bounded real $\mathcal G$-measurable, then $E[ZX\mid\mathcal G]=ZE[X\mid\mathcal G]$ almost surely. The identity also holds for finite real $\mathcal G$-measurable $Z$ whenever $ZX$ and $ZE[X\mid\mathcal G]$ are integrable. In fact $X,ZX\in L^1$ imply the latter integrability.

Evidence: Indicators use intersections with G-events, simple factors follow by linearity, and bounded factors by simple approximation with integrable majorants on both sides. For unbounded finite Z, ordinary MCT applied to (|Z| wedge n)E[|X||G] yields E[|Z|E[|X||G]]=E|ZX|. The modulus bound establishes the missing product integrability before signed truncation and DCT. The additional locality statement follows from the indicator case; no conditional convergence theorem is used circularly.

Dependency record: `deps: [def-conditional-expectation-as-an-ae-class, thm-basic-algebra-and-order-properties-of-conditional-expectation, lem-conditional-expectation-is-unique-almost-surely, thm-increasing-simple-approximation-of-a-nonnegative-measurable-function, thm-monotone-convergence-for-the-integral, thm-dominated-convergence, thm-sequential-suprema-infima-limsup-liminf-and-pointwise-limits-are-measurable, def-axiom-of-choice]`. Read current item and owning contract. Source metadata (not an independent retrieval claim):

```yaml
references:
    - title: "Durrett, Probability: Theory and Examples, 5th ed."
      url: https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf
---

## Statement

Assume AC for existence. If $X\in L^1(P)$ and $Z$ is bounded real $\mathcal G$-measurable, then $E[ZX\mid\mathcal G]=ZE[X\mid\mathcal G]$ almost surely. The identity also holds for finite real $\mathcal G$-measurable $Z$ whenever $ZX$ and $ZE[X\mid\mathcal G]$ are integrable. In fact $X,ZX\in L^1$ imply the latter integrability.

## Facts & Assumptions

**Given:** AC, real integrable X, and a real G-measurable factor Z; first assume Z bounded, then assume Z finite and ZX integrable (or explicitly both products integrable).

[F1] Conditional versions are integrable and satisfy all event integrals. ([[def-conditional-expectation-as-an-ae-class]])

[F2] Linearity, expectation preservation and the conditional modulus bound hold. ([[thm-basic-algebra-and-order-properties-of-conditional-expectation]])

[F3] The event identities characterize the version up to almost-sure equality. ([[lem-conditional-expectation-is-unique-almost-surely]])

[F4] Nonnegative measurable functions have increasing nonnegative simple approximations. ([[thm-increasing-simple-approximation-of-a-nonnegative-measurable-function]])

[F5] Pointwise almost-everywhere convergence with an integrable majorant permits convergence of event integrals. ([[thm-dominated-convergence]])

[F6] Integrals of increasing nonnegative functions converge to the integral of the limit. ([[thm-monotone-convergence-for-the-integral]])

## Proof

**Proof technique:** direct.

1.1 Write $U=E[X\mid\mathcal G]$. If $Z=\mathbf1_B$ with $B\in\mathcal G$, then for every $A\in\mathcal G$, $\int_A ZU=\int_{A\cap B}U=\int_{A\cap B}X=\int_A ZX$. The products are integrable and $ZU$ is $\mathcal G$-measurable, so uniqueness gives the identity. Finite sums of such indicators give the identity for bounded simple $Z$ by linearity. [F1, F2, F3]

2.1 If $|Z|\le M$, apply [F4] to $Z^+$ and $Z^-$ and subtract their approximations to obtain simple $Z_n\to Z$ with $|Z_n|\le M$. Then $|Z_nX|\le M|X|$ and $|Z_nU|\le M|U|$, both integrable majorants. By [F5] in each event identity of step 1.1, $\int_A ZU=\int_A ZX$. The limit $ZU$ is measurable and integrable, so [F3] proves the bounded case. [step 1.1, F4, F5, F3]

3.1 For finite measurable $Z$ with $ZX\in L^1$, set $V=E[|X|\mid\mathcal G]\ge0$ and $R_n=|Z|\wedge n$. The bounded case and expectation preservation imply $E[R_nV]=E[R_n|X|]$. MCT gives $E[|Z|V]=E|ZX|<\infty$. Since $|U|\le V$ almost surely, $E|ZU|\le E|ZX|<\infty$. [step 2.1, F2, F6]

4.1 Let $Z_n=\max(-n,\min(Z,n))$. For each event $A$ the bounded case gives $\int_A Z_nU=\int_A Z_nX$. Now $Z_nU\to ZU$ and $Z_nX\to ZX$, dominated by the integrable $|ZU|$ and $|ZX|$ respectively. DCT and uniqueness yield $E[ZX\mid\mathcal G]=ZU$. This proves both the stated two-product extension and its stronger integrability observation. [step 2.1, step 3.1, F5, F3]

5.1 The same indicator identity gives locality: if $X=Y$ almost surely on $B\in\mathcal G$, then $\mathbf1_BE[X\mid\mathcal G]=E[\mathbf1_BX\mid\mathcal G]=E[\mathbf1_BY\mid\mathcal G]=\mathbf1_BE[Y\mid\mathcal G]$ as classes. No assertion is made about arbitrary values on exceptional points. [step 1.1, F1] ∎

## Source notes

Durrett Theorem 4.1.14, printed pp.212–213; locality Theorem 4.1.2, printed p.206. The absolute-product integrability estimate is explicitly proved by ordinary MCT before the signed DCT limit; conditional MCT is not used.
```

No repair or unresolved obligation for this item. Validation pending scoped final checks. Next action: next assigned item.

### Batch 4: `thm-tower-property-of-conditional-expectation` — accepted

Claim/conventions: Assume AC for existence. If $\mathcal H\subseteq\mathcal G\subseteq\mathcal F$ and $X\in L^1(P)$, then $E[E[X\mid\mathcal G]\mid\mathcal H]=E[X\mid\mathcal H]$ and $E[E[X\mid\mathcal H]\mid\mathcal G]=E[X\mid\mathcal H]$ almost surely. Also, if a version of $E[X\mid\mathcal G]$ is $\mathcal H$-measurable, it is a version of $E[X\mid\mathcal H]$.

Evidence: The first identity tests H-events through both conditional expectations using H subset G. The second conditions an already G-measurable integrable representative and uses its own event identities. The additional H-measurable-version clause follows by restricting its G-event identities. Equal, trivial and full sigma-algebras are permitted.

Dependency record: `deps: [def-conditional-expectation-as-an-ae-class, lem-conditional-expectation-is-unique-almost-surely, def-axiom-of-choice]`. Read current item and owning contract. Source metadata (not an independent retrieval claim):

```yaml
references:
    - title: "Durrett, Probability: Theory and Examples, 5th ed."
      url: https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf
---

## Statement

Assume AC for existence. If $\mathcal H\subseteq\mathcal G\subseteq\mathcal F$ and $X\in L^1(P)$, then $E[E[X\mid\mathcal G]\mid\mathcal H]=E[X\mid\mathcal H]$ and $E[E[X\mid\mathcal H]\mid\mathcal G]=E[X\mid\mathcal H]$ almost surely. Also, if a version of $E[X\mid\mathcal G]$ is $\mathcal H$-measurable, it is a version of $E[X\mid\mathcal H]$.

## Facts & Assumptions

**Given:** AC, real integrable X, and $\mathcal H\subseteq\mathcal G\subseteq\mathcal F$; for the last clause a G-conditional version is H-measurable.

[F1] Conditional versions are measurable and integrable and have the defining event integrals. ([[def-conditional-expectation-as-an-ae-class]])

[F2] Versions for the same input and sigma-algebra agree almost surely. ([[lem-conditional-expectation-is-unique-almost-surely]])

## Proof

**Proof technique:** direct.

1.1 Set $U=E[X\mid\mathcal G]$ and take a version $V=E[U\mid\mathcal H]$. For $A\in\mathcal H\subseteq\mathcal G$, $\int_A V=\int_A U=\int_A X$. Since $V$ is $\mathcal H$-measurable and integrable, [F2] identifies it with $E[X\mid\mathcal H]$. [F1, F2]

2.1 A version $W=E[X\mid\mathcal H]$ is already $\mathcal G$-measurable and integrable. It has its own event integrals $\int_A W=\int_A W$ on every $A\in\mathcal G$, so it is a version of $E[W\mid\mathcal G]$; [F2] gives the second identity. Finally if $U$ itself is $\mathcal H$-measurable, its $\mathcal G$ event identities restrict to $\mathcal H$, so [F2] gives the additional assertion. [F1, F2, step 1.1] ∎

## Source notes

Durrett Theorems 4.1.12–4.1.13, printed p.212; van der Vaart Lemma 1.9(v), printed p.4.
```

No repair or unresolved obligation for this item. Validation pending scoped final checks. Next action: next assigned item.

### Batch 4: `lem-conditioning-a-known-variable-and-an-independent-variable` — accepted

Claim/conventions: Assume AC for existence. For real $X\in L^1(P)$, if $X$ is $\mathcal G$-measurable, then $E[X\mid\mathcal G]=X$. If $P(\{X\in B\}\cap A)=P(X\in B)P(A)$ for every real Borel $B$ and $A\in\mathcal G$, then $E[X\mid\mathcal G]=EX$ almost surely.

Evidence: A known integrable G-measurable input is its own version. The independence rectangle identity extends from indicators through nonnegative simple functions and ordinary MCT. Applying it to finite-integral positive and negative parts gives the event integrals of the finite constant EX; uniqueness proves the independent case. No converse to independence is asserted.

Dependency record: `deps: [def-conditional-expectation-as-an-ae-class, lem-conditional-expectation-is-unique-almost-surely, thm-increasing-simple-approximation-of-a-nonnegative-measurable-function, thm-monotone-convergence-for-the-integral, thm-linearity-of-the-lebesgue-integral-on-l-one, def-axiom-of-choice]`. Read current item and owning contract. Source metadata (not an independent retrieval claim):

```yaml
references:
    - title: "Durrett, Probability: Theory and Examples, 5th ed."
      url: https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf
---

## Statement

Assume AC for existence. For real $X\in L^1(P)$, if $X$ is $\mathcal G$-measurable, then $E[X\mid\mathcal G]=X$. If $P(\{X\in B\}\cap A)=P(X\in B)P(A)$ for every real Borel $B$ and $A\in\mathcal G$, then $E[X\mid\mathcal G]=EX$ almost surely.

## Facts & Assumptions

**Given:** AC, real integrable X and sub-sigma-algebra G; separately either X is G-measurable or its Borel events satisfy the displayed independence identity.

[F1] Conditional classes are characterized by measurable integrable versions with all event identities. ([[def-conditional-expectation-as-an-ae-class]])

[F2] The version class is unique. ([[lem-conditional-expectation-is-unique-almost-surely]])

[F3] Nonnegative Borel functions admit increasing Borel simple approximations. ([[thm-increasing-simple-approximation-of-a-nonnegative-measurable-function]])

[F4] Increasing nonnegative simple limits pass through integrals. ([[thm-monotone-convergence-for-the-integral]])

[F5] Finite linear combinations and differences of integrable functions pass through the integral. ([[thm-linearity-of-the-lebesgue-integral-on-l-one]])

## Proof

**Proof technique:** direct.

1.1 If $X$ is $\mathcal G$-measurable it itself meets every condition for a version: integrability is assumed and every event equality is $\int_A X=\int_A X$. Hence uniqueness gives the first identity. [F1, F2]

1.2 Fix $A\in\mathcal G$ under the independence hypothesis. For $h=\mathbf1_B$, $E[h(X)\mathbf1_A]=E[h(X)]P(A)$ is exactly that hypothesis. For nonnegative Borel simple $h=\sum_{j=1}^m c_j\mathbf1_{B_j}$, multiplication by $c_j$ and addition give the same equality. For any nonnegative Borel $h$, compose the increasing Borel simple approximations from [F3] with $X$ and use [F4] on both sides to obtain the equality, allowing infinite values. [given, F3, F4, F5]

2.1 Apply step 1.2 to $h(t)=t^+$ and $h(t)=t^-$. Their expectations are finite because $X\in L^1$, so subtracting yields $\int_A X=EX\,P(A)$. The constant $EX$ is finite, $\mathcal G$-measurable and integrable, and its integral on $A$ is $EX\,P(A)$. Since $A$ was arbitrary, [F1]–[F2] identify it with $E[X\mid\mathcal G]$. [step 1.2, F1, F2, F5] ∎

## Source notes

Durrett Examples 4.1.3–4.1.4, printed pp.207–208; van der Vaart Examples 1.4–1.5, printed p.2. The rectangle hypothesis is extended by simple approximation explicitly, without importing a general factorization theorem.
```

No repair or unresolved obligation for this item. Validation pending scoped final checks. Next action: next assigned item.

### Batch 4: `def-conditional-expectation-for-nonnegative-variables` — accepted

Claim/conventions: Assume AC. For measurable $X:\Omega\to[0,\infty]$, select versions $U_n$ of $E[X\wedge n\mid\mathcal G]$, $n\ge1$. Outside one $\mathcal G$-measurable null set they are nonnegative and increasing. Set all of them to zero on that set. Define $E[X\mid\mathcal G]$ to be the almost-sure class of $\lim_n U_n$, allowing $+\infty$.

The integrable classes come from [[def-conditional-expectation-as-an-ae-class]]. Their order is [[thm-basic-algebra-and-order-properties-of-conditional-expectation]]. The union of the measurable sets where a nonnegativity or consecutive-order condition fails is a measurable null set. The limit is measurable by [[thm-sequential-suprema-infima-limsup-liminf-and-pointwise-limits-are-measurable]]. The [[def-axiom-of-choice]] supplies both inherited RN choices and the countable selection of versions. The event-integral characterization and independence of truncations are the well-definedness obligations recorded in `justified_by`.

Evidence: AC licenses countably many bounded-truncation versions. Their positivity and consecutive-order failure sets are G-measurable null sets, so simultaneous zero modification yields an increasing nonnegative measurable limit, allowing infinity. The declared justified_by theorem supplies the event characterization and independence of approximations, which have been read together.

Dependency record: `deps: [def-conditional-expectation-as-an-ae-class, thm-basic-algebra-and-order-properties-of-conditional-expectation, thm-sequential-suprema-infima-limsup-liminf-and-pointwise-limits-are-measurable, def-axiom-of-choice]`. Read current item and owning contract. Source metadata (not an independent retrieval claim):

```yaml
references:
    - title: "Durrett, Probability: Theory and Examples, 5th ed."
      url: https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf
---

## Definition

Assume AC. For measurable $X:\Omega\to[0,\infty]$, select versions $U_n$ of $E[X\wedge n\mid\mathcal G]$, $n\ge1$. Outside one $\mathcal G$-measurable null set they are nonnegative and increasing. Set all of them to zero on that set. Define $E[X\mid\mathcal G]$ to be the almost-sure class of $\lim_n U_n$, allowing $+\infty$.

The integrable classes come from [[def-conditional-expectation-as-an-ae-class]]. Their order is [[thm-basic-algebra-and-order-properties-of-conditional-expectation]]. The union of the measurable sets where a nonnegativity or consecutive-order condition fails is a measurable null set. The limit is measurable by [[thm-sequential-suprema-infima-limsup-liminf-and-pointwise-limits-are-measurable]]. The [[def-axiom-of-choice]] supplies both inherited RN choices and the countable selection of versions. The event-integral characterization and independence of truncations are the well-definedness obligations recorded in `justified_by`.

## Source notes

Van der Vaart Lemma 1.10(i), printed p.4; Durrett Theorem 4.1.9(c), printed pp.210–211, supplies the integrable case. The local next theorem proves the extended-valued definition.
```

No repair or unresolved obligation for this item. Validation pending scoped final checks. Next action: next assigned item.

### Batch 4: `thm-conditional-monotone-convergence` — accepted

Claim/conventions: Assume AC. For nonnegative measurable $X$ (possibly infinite), $E[X\mid\mathcal G]$ is the unique almost-sure class of nonnegative $\mathcal G$-measurable $Y$ satisfying $\int_A Y\,dP=\int_A X\,dP$ for every $A\in\mathcal G$. If $0\le X_n\uparrow X$ almost surely, then $E[X_n\mid\mathcal G]\uparrow E[X\mid\mathcal G]$ almost surely. Every increasing integrable nonnegative approximation to $X$ gives the same class. For integrable real $V_n\downarrow V$ almost surely with $V_1,V\in L^1$, $E[V_n\mid\mathcal G]\downarrow E[V\mid\mathcal G]$ almost surely.

Evidence: MCT on both sides of each event identity establishes the truncation characterization. Extended uniqueness and order localize to {Y>=Z+1/k,Z<=m}, where both relevant integrals are finite; the union covers strict discrepancy without infinite subtraction. Countable G-null output modifications give increasing representatives, while ambient input null changes only affect integrals. MCT plus uniqueness proves arbitrary increasing approximation independence. Subtracting V_n from the integrable V_1 proves the decreasing clause with integrable lower limit.

Dependency record: `deps: [def-conditional-expectation-for-nonnegative-variables, lem-conditional-expectation-is-unique-almost-surely, thm-basic-algebra-and-order-properties-of-conditional-expectation, thm-monotone-convergence-for-the-integral, prop-closure-properties-of-measurable-functions-used-by-the-integral, def-axiom-of-choice, cor-integral-over-a-null-set-vanishes]`. Read current item and owning contract. Source metadata (not an independent retrieval claim):

```yaml
references:
    - title: "Durrett, Probability: Theory and Examples, 5th ed."
      url: https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf
---

## Statement

Assume AC. For nonnegative measurable $X$ (possibly infinite), $E[X\mid\mathcal G]$ is the unique almost-sure class of nonnegative $\mathcal G$-measurable $Y$ satisfying $\int_A Y\,dP=\int_A X\,dP$ for every $A\in\mathcal G$. If $0\le X_n\uparrow X$ almost surely, then $E[X_n\mid\mathcal G]\uparrow E[X\mid\mathcal G]$ almost surely. Every increasing integrable nonnegative approximation to $X$ gives the same class. For integrable real $V_n\downarrow V$ almost surely with $V_1,V\in L^1$, $E[V_n\mid\mathcal G]\downarrow E[V\mid\mathcal G]$ almost surely.

## Facts & Assumptions

**Given:** AC and nonnegative measurable inputs X and $0\le X_n\uparrow X$ almost surely; for the decreasing clause, real $V_n\downarrow V$ with $V_1,V\in L^1$.

[F1] The extended version is the increasing truncation limit. ([[def-conditional-expectation-for-nonnegative-variables]])

[F2] Integrable versions preserve order and finite linear combinations. ([[thm-basic-algebra-and-order-properties-of-conditional-expectation]])

[F3] Ordinary MCT applies to nonnegative increasing functions. ([[thm-monotone-convergence-for-the-integral]])

[F4] Positive/negative parts, level sets and increasing limits are measurable. ([[prop-closure-properties-of-measurable-functions-used-by-the-integral]])

[F5] Integrals of nonnegative functions on measurable null sets vanish. ([[cor-integral-over-a-null-set-vanishes]])

[F6] AC selects countably many versions and covers inherited existence choices. ([[def-axiom-of-choice]])

## Proof

**Proof technique:** direct.

1.1 For the ordered nonnegative versions $U_n$ of [F1], ordinary MCT on each event gives $\int_A\lim_n U_n=\lim_n\int_A U_n=\lim_n\int_A(X\wedge n)=\int_A X$. Changes on the common measurable null set have zero event integral by [F5]. Thus the limit has the stated event characterization. If inputs are changed almost surely, their nonnegative integrals also agree by splitting each event into its part in and outside the measurable exceptional null set. [F1, F3, F5, F6]

2.1 For uniqueness, let $Y,Z$ be two characterized versions and set $A_{k,m}=\{Y\ge Z+1/k,\ Z\le m\}$ for positive integers $k,m$. This is in $\mathcal G$: the difference is formed only on the finite-Z set. On $A_{k,m}$, $\int Z\le m$, and the event identities give $\int Y=\int Z<\infty$. Integration of $Y\ge Z+1/k$ there yields $P(A_{k,m})/k\le0$. Their countable union is $\{Y>Z\}$, since strict extended inequality forces the smaller value to be finite. Thus $P(Y>Z)=0$; interchanging the two variables gives equality almost surely. No infinite integrals are subtracted. [step 1.1, F4]

3.1 More generally, if $X\le X^{\ast}$ almost surely and $Y,Z$ are their characterized versions, then $\int_A Y\le\int_A Z$ on all $\mathcal G$ events. On the same $A_{k,m}$ as in step 2.1, the right integral is finite and the inequality forces $P(A_{k,m})=0$. Thus $Y\le Z$ almost surely. This extends order to the nonnegative classes, including infinite values. [step 1.1, step 2.1]

4.1 Choose versions $Y_n$ for the given $X_n$ using [F6]. By step 3.1 remove one $\mathcal G$-null union of consecutive order-exception sets and set all $Y_n$ to zero there. Their limit $Y$ is measurable by [F4]. MCT and the event identities give $\int_A Y=\lim_n\int_A X_n=\int_A X$. For almost-sure input monotonicity the common ambient measurable null set can be removed from the inputs using [F5]; this does not require that set to belong to $\mathcal G$. Step 2.1 now identifies $Y$ with $E[X\mid\mathcal G]$. The same argument works for any increasing integrable nonnegative approximations. [step 1.1, step 2.1, step 3.1, F3, F4, F5, F6]

5.1 Finally $0\le V_1-V_n\uparrow V_1-V$ almost surely, and all these variables are integrable because $|V_n|\le|V_1|+|V|$. Apply step 4.1 and linearity [F2] to obtain $E[V_1\mid\mathcal G]-E[V_n\mid\mathcal G]\uparrow E[V_1\mid\mathcal G]-E[V\mid\mathcal G]$. The fixed first term is finite almost surely, so subtraction gives the claimed decreasing convergence. [step 4.1, F2] ∎

## Source notes

Van der Vaart Lemma 1.10(i), printed p.4; Durrett Theorem 4.1.9(c) and its decreasing-limit remark, printed pp.210–211. Extended uniqueness and order are supplied locally by finite-level localization; the decreasing clause preserves the coverage promise.
```

No repair or unresolved obligation for this item. Validation pending scoped final checks. Next action: next assigned item.

### Batch 4: `thm-conditional-fatou-and-dominated-convergence` — accepted

Claim/conventions: Assume AC. For nonnegative measurable $X_n$, $E[\liminf_n X_n\mid\mathcal G]\le\liminf_n E[X_n\mid\mathcal G]$ almost surely, in the extended sense. If real $X_n\to X$ almost surely and $|X_n|\le W$ almost surely for one nonnegative $W\in L^1(P)$, then $E[X_n\mid\mathcal G]\to E[X\mid\mathcal G]$ almost surely and in $L^1$.

Evidence: Tail infima are measurable and increasing; countably many order inequalities and conditional MCT give extended Fatou. For dominated real inputs, applying Fatou to W plus and minus X_n traps both limits after subtracting the finite conditional T=E[W|G]. The modulus bound supplies an integrable 2T majorant for ordinary DCT, proving L1 convergence as well. All exceptional sets are countably combined.

Dependency record: `deps: [thm-conditional-monotone-convergence, thm-basic-algebra-and-order-properties-of-conditional-expectation, thm-dominated-convergence, def-conditional-expectation-as-an-ae-class, def-axiom-of-choice, thm-sequential-suprema-infima-limsup-liminf-and-pointwise-limits-are-measurable]`. Read current item and owning contract. Source metadata (not an independent retrieval claim):

```yaml
references:
    - title: "Durrett, Probability: Theory and Examples, 5th ed."
      url: https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf
---

## Statement

Assume AC. For nonnegative measurable $X_n$, $E[\liminf_n X_n\mid\mathcal G]\le\liminf_n E[X_n\mid\mathcal G]$ almost surely, in the extended sense. If real $X_n\to X$ almost surely and $|X_n|\le W$ almost surely for one nonnegative $W\in L^1(P)$, then $E[X_n\mid\mathcal G]\to E[X\mid\mathcal G]$ almost surely and in $L^1$.

## Facts & Assumptions

**Given:** AC and nonnegative measurable X_n; separately real $X_n\to X$ almost surely with $|X_n|\le W$ for one nonnegative integrable W.

[F1] Extended conditional expectation preserves order and increasing limits. ([[thm-conditional-monotone-convergence]])

[F2] Integrable conditional expectation is linear and satisfies the modulus bound. ([[thm-basic-algebra-and-order-properties-of-conditional-expectation]])

[F3] A common integrable dominator and almost-sure convergence give integrability and $L^1$ convergence. ([[thm-dominated-convergence]])

[F4] Under AC integrable conditional classes and their versions exist. ([[def-conditional-expectation-as-an-ae-class]])

[F5] Countable infima and liminf of measurable functions are measurable. ([[thm-sequential-suprema-infima-limsup-liminf-and-pointwise-limits-are-measurable]])

## Proof

**Proof technique:** direct.

1.1 Put $Z_n=\inf_{k\ge n}X_k$. These are measurable by [F5], nonnegative, and increase to $\liminf_kX_k$. For each $k\ge n$, [F1] gives $E[Z_n\mid\mathcal G]\le E[X_k\mid\mathcal G]$ almost surely. There are only countably many pairs $(n,k)$; after removing their null union, take the infimum over $k\ge n$ and then the increasing limit in $n$. Conditional MCT gives exactly the claimed Fatou inequality. [F1, F5]

2.1 In the dominated case, $|X|\le W$ almost surely, so [F3] gives $X\in L^1$. Set $T=E[W\mid\mathcal G]$, $U_n=E[X_n\mid\mathcal G]$ and $U=E[X\mid\mathcal G]$. These are finite almost surely. Apply step 1.1 to $W+X_n$ and $W-X_n$, which are nonnegative. By linearity this gives $T+U\le T+\liminf U_n$ and $T-U\le T-\limsup U_n$. The modulus bound gives $|U_n|,|U|\le T$ outside one common null set. Subtracting the finite $T$ yields $U\le\liminf U_n\le\limsup U_n\le U$, hence almost-sure convergence. [step 1.1, F2, F3, F4]

3.1 The differences $|U_n-U|$ tend to zero almost surely and are bounded by $2T$, with $ET=EW<\infty$. Ordinary DCT therefore gives $E|U_n-U|\to0$, the claimed $L^1$ convergence. [step 2.1, F2, F3] ∎

## Source notes

Van der Vaart Lemma 1.10(ii)–(iii), printed p.4, full statements read; ordinary MCT, conditional order and the two nonnegative dominated sequences supply the proof here.
```

No repair or unresolved obligation for this item. Validation pending scoped final checks. Next action: next assigned item.

### Batch 4: `lem-convex-functions-have-countable-supporting-line-representations` — accepted

Claim/conventions: Let $\phi:\mathbb R\to\mathbb R$ be finite and convex. For each $q\in\mathbb Q$ define $\ell_q(t)=\phi(q)+\phi^{\prime}_-(q)(t-q)$. Then $\phi(t)=\sup_{q\in\mathbb Q}\ell_q(t)$ for every real $t$. This is a countable family with deterministic real coefficients; the coefficients need not be rational. The function $\phi$ is locally Lipschitz and Borel measurable.

Evidence: The finite left derivative at each rational contact point is an allowed supporting slope. The ordered derivative/secant inequalities bound both secant slopes and contact slopes on each compact interval by finite outer derivative values, giving local Lipschitz continuity. Rational density then approximates phi(x) by these lines with error at most 2M|q-x|. Coefficients are real, not restricted to rational, so irrational affine functions and M=0 are included without slope choice.

Dependency record: `deps: [thm-supporting-lines-for-convex-functions, thm-one-sided-derivatives-of-convex-functions, thm-rationals-countable, lem-rat-embeds-dense, thm-continuous-preimages-of-borel-sets-are-borel]`. Read current item and owning contract. Source metadata (not an independent retrieval claim):

```yaml
references:
    - title: "Durrett, Probability: Theory and Examples, 5th ed."
      url: https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf
---

## Statement

Let $\phi:\mathbb R\to\mathbb R$ be finite and convex. For each $q\in\mathbb Q$ define $\ell_q(t)=\phi(q)+\phi^{\prime}_-(q)(t-q)$. Then $\phi(t)=\sup_{q\in\mathbb Q}\ell_q(t)$ for every real $t$. This is a countable family with deterministic real coefficients; the coefficients need not be rational. The function $\phi$ is locally Lipschitz and Borel measurable.

## Facts & Assumptions

**Given:** A finite convex function $\phi:\mathbb R\to\mathbb R$.

[F1] The finite one-sided derivatives bound secant slopes and are ordered at ordered points. ([[thm-one-sided-derivatives-of-convex-functions]])

[F2] A slope between the one-sided derivatives defines a supporting line. ([[thm-supporting-lines-for-convex-functions]])

[F3] The rational contact points form a countable set. ([[thm-rationals-countable]])

[F4] Rational points approximate each real point arbitrarily closely. ([[lem-rat-embeds-dense]])

[F5] A continuous real function is Borel measurable. ([[thm-continuous-preimages-of-borel-sets-are-borel]])

## Proof

**Proof technique:** direct.

1.1 By [F1], $m_q=\phi^{\prime}_-(q)$ is finite and lies between $\phi^{\prime}_-(q)$ and $\phi^{\prime}_+(q)$. Therefore [F2] gives $\ell_q(t)\le\phi(t)$ for every $t$, with equality at $t=q$. The family is countable by [F3], and no slope choice is made. [F1, F2, F3]

1.2 Fix real $a<b$. For $a\le u<v\le b$, the inequalities in [F1], also applied between $a-1,u$ and $v,b+1$, bound the secant slope between the finite numbers $\phi^{\prime}_+(a-1)$ and $\phi^{\prime}_-(b+1)$. The same bounds hold for $\phi^{\prime}_-(q)$ for $q\in[a,b]$. Let $M$ be the maximum of their absolute values. Then $|\phi(v)-\phi(u)|\le M|v-u|$, proving Lipschitz continuity on $[a,b]$ and thus continuity everywhere; [F5] gives Borel measurability. [F1, F5]

2.1 For fixed $x$ use step 1.2 on $[x-1,x+1]$. Given $\varepsilon>0$, [F4] supplies rational $q$ in this interval with $|q-x|<\varepsilon/(2M+1)$. Then $0\le\phi(x)-\ell_q(x)\le|\phi(x)-\phi(q)|+|m_q||x-q|\le2M|x-q|<\varepsilon$. Thus the supremum of the supporting lines is at least $\phi(x)-\varepsilon$ for every positive $\varepsilon$, and at most $\phi(x)$ by step 1.1, proving equality. This also handles $M=0$ and affine functions with irrational slopes. [step 1.1, step 1.2, F4] ∎

## Source notes

Durrett Theorem 4.1.10 and countability remark, printed p.211, motivate the countable-support method. Here rational contact points with real slopes avoid any rational-coefficient ambiguity; the exact local supporting-line and derivative interfaces give the complete derivation.
```

No repair or unresolved obligation for this item. Validation pending scoped final checks. Next action: next assigned item.

### Batch 4: `thm-conditional-jensen-inequality` — accepted

Claim/conventions: Assume AC. If $\phi:\mathbb R\to\mathbb R$ is finite convex and both $X$ and $\phi(X)$ are integrable, then $\phi(E[X\mid\mathcal G])\le E[\phi(X)\mid\mathcal G]$ almost surely; the left side is measurable and integrable.

Evidence: For each rational-contact supporting affine line, integrability, conditional linearity and order give the required bound. Countably many lines permit a single null union before taking their supremum. The conditional upper bound controls the positive part and the fixed line at zero controls the negative part, proving integrability of phi(E[X|G]) rather than assuming it.

Dependency record: `deps: [def-conditional-expectation-as-an-ae-class, thm-basic-algebra-and-order-properties-of-conditional-expectation, lem-convex-functions-have-countable-supporting-line-representations, def-axiom-of-choice]`. Read current item and owning contract. Source metadata (not an independent retrieval claim):

```yaml
references:
    - title: "Durrett, Probability: Theory and Examples, 5th ed."
      url: https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf
---

## Statement

Assume AC. If $\phi:\mathbb R\to\mathbb R$ is finite convex and both $X$ and $\phi(X)$ are integrable, then $\phi(E[X\mid\mathcal G])\le E[\phi(X)\mid\mathcal G]$ almost surely; the left side is measurable and integrable.

## Facts & Assumptions

**Given:** AC, finite convex $\phi:\mathbb R\to\mathbb R$, and integrable real X such that $\phi(X)$ is integrable.

[F1] Integrable inputs have conditional classes under AC. ([[def-conditional-expectation-as-an-ae-class]])

[F2] Conditional expectation is linear, fixes constants and preserves order. ([[thm-basic-algebra-and-order-properties-of-conditional-expectation]])

[F3] Finite convex functions are Borel and are suprema of their rational-contact supporting lines. ([[lem-convex-functions-have-countable-supporting-line-representations]])

## Proof

**Proof technique:** direct.

1.1 Set $U=E[X\mid\mathcal G]$ and $V=E[\phi(X)\mid\mathcal G]$. For each supporting line $\ell_q(t)=m_qt+b_q$ of [F3], the variable $m_qX+b_q$ is integrable and bounded above by $\phi(X)$. Linearity and order give $m_qU+b_q\le V$ almost surely. There are countably many $q$, so remove one measurable null union to make all inequalities hold together. [F1, F2, F3]

2.1 On the resulting conull set take the supremum over $q$. By [F3], $\phi(U)=\sup_q(m_qU+b_q)\le V$. Measurability follows either from that countable supremum or composition with the Borel function $\phi$. The fixed supporting line at $q=0$ also gives $m_0U+b_0\le\phi(U)$. Hence $(\phi(U))^+\le V^+$ and $(\phi(U))^-\le(m_0U+b_0)^-$ almost surely. Both upper bounds are integrable, proving integrability as well as the inequality. [step 1.1, F3] ∎

## Source notes

Durrett Theorem 4.1.10 and following remark, printed p.211; van der Vaart Lemma 1.9(vi), printed p.4. The integrability of the left side is checked using one lower supporting line and the conditional upper bound.
```

No repair or unresolved obligation for this item. Validation pending scoped final checks. Next action: next assigned item.

### Batch 4: `lem-absolute-real-powers-are-convex` — accepted

Claim/conventions: For each real $p\ge1$, the function $\phi_p:\mathbb R\to\mathbb R$ defined by $\phi_p(t)=|t|^p$ is finite, continuous, Borel measurable and convex. Here $0^p=0$.

Evidence: For p>1 the derivative and second derivative have the stated nonnegative signs on positive bases, including noninteger p. The bound 0<=u^p<=u for 0<u<=1 proves continuity at zero and allows convexity to extend to the closed half-line. Monotonicity and the triangle inequality yield convexity after absolute value; p=1 is handled directly. Continuity gives Borel measurability, with zero bases and weights zero/one checked.

Dependency record: `deps: [def-real-power, thm-real-power-continuity-and-derivatives, thm-natural-logarithm-laws, thm-exponential-is-strictly-increasing, cor-exponential-reciprocal-and-positivity, thm-algebra-of-derivatives, thm-monotonicity-from-the-derivative, cor-second-derivative-characterises-convexity, def-convex-concave-and-midpoint-convex-functions, lem-of-triangle-inequality, lem-of-abs-value, thm-algebra-of-continuous-functions, thm-squeeze-for-function-limits, thm-continuous-preimages-of-borel-sets-are-borel, def-measurable-function-between-measurable-spaces, def-natural-logarithm]`. Read current item and owning contract. Source metadata (not an independent retrieval claim):

```yaml
references:
    - title: "Durrett, Probability: Theory and Examples, 5th ed."
      url: https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf
    - title: "van der Vaart, Martingales, Diffusions and Financial Mathematics"
      url: https://diamhomes.ewi.tudelft.nl/~avandervaart/books/stochint.pdf
---

## Statement

For each real $p\ge1$, the function $\phi_p:\mathbb R\to\mathbb R$ defined by $\phi_p(t)=|t|^p$ is finite, continuous, Borel measurable and convex. Here $0^p=0$.

## Facts & Assumptions

**Given:** A real exponent $p\ge1$, with the real-power convention $0^p=0$.

[F1] For positive bases $u^p=\exp(p\log u)$; $0^p=0$ for $p>0$. ([[def-real-power]])

[F2] On positive bases $u\mapsto u^p$ is continuous with derivative $pu^{p-1}$. ([[thm-real-power-continuity-and-derivatives]])

[F3] Constant factors pass through differentiation. ([[thm-algebra-of-derivatives]])

[F4] A twice differentiable function with nonnegative second derivative on an open interval is convex. ([[cor-second-derivative-characterises-convexity]])

[F5] A continuous function with nonnegative derivative on an interval is nondecreasing. ([[thm-monotonicity-from-the-derivative]])

[F6] Logarithm is increasing and $\log1=0$. ([[thm-natural-logarithm-laws]])

[F7] Exponential is increasing. ([[thm-exponential-is-strictly-increasing]])

[F8] Exponential is positive. ([[cor-exponential-reciprocal-and-positivity]])

[F9] Two equal bounding limits force the intermediate limit. ([[thm-squeeze-for-function-limits]])

[F10] $|a+b|\le|a|+|b|$. ([[lem-of-triangle-inequality]])

[F11] Absolute value is nonnegative and multiplicative. ([[lem-of-abs-value]])

[F12] Convexity is the convex-combination inequality for all weights in $[0,1]$. ([[def-convex-concave-and-midpoint-convex-functions]])

[F13] The identity and its absolute value are continuous. ([[thm-algebra-of-continuous-functions]])

[F14] Continuous preimages of Borel sets are Borel. ([[thm-continuous-preimages-of-borel-sets-are-borel]])

[F15] Measurability means that every measurable target preimage is measurable. ([[def-measurable-function-between-measurable-spaces]])

[F16] For $u>0$, $\exp(\log u)=u$ by the inverse definition. ([[def-natural-logarithm]])

## Proof

**Proof technique:** direct.

1.1 For $p>1$ and $u>0$, differentiation gives $h^{\prime}(u)=pu^{p-1}$ and $h^{\prime\prime}(u)=p(p-1)u^{p-2}\ge0$ for $h(u)=u^p$. Thus $h$ is nondecreasing and convex on $(0,\infty)$. The derivative and second-derivative hypotheses hold at every positive $u$. [F2, F3, F4, F5]

1.2 For $0<u\le1$, $\log u\le0$, hence $p\log u\le\log u$ and $0<u^p=\exp(p\log u)\le\exp(\log u)=u$. The last equality is the inverse identity [F16]. The squeeze theorem gives $u^p\to0$ as $u\downarrow0$. With $h(0)=0$, this extends $h$ continuously to $[0,\infty)$. [F1, F6, F7, F8, F9, F16]

2.1 For $a,b\ge0$ and $0\le\lambda\le1$, apply positive-half-line convexity to $a+\varepsilon,b+\varepsilon$ and let $\varepsilon\downarrow0$ using step 1.2: $h(\lambda a+(1-\lambda)b)\le\lambda h(a)+(1-\lambda)h(b)$. The inequality remains valid at weights zero and one, where it is equality. Monotonicity extends to zero because $h\ge0=h(0)$. [step 1.1, step 1.2]

3.1 For real $x,y$, [F10]–[F11] give $|\lambda x+(1-\lambda)y|\le\lambda|x|+(1-\lambda)|y|$. Apply monotonicity and then step 2.1 to get $|\lambda x+(1-\lambda)y|^p\le\lambda|x|^p+(1-\lambda)|y|^p$. For $p=1$ the same inequality is already precisely the triangle inequality with the scalar absolute values evaluated. Thus [F12] proves convexity for every $p\ge1$. [step 2.1, F10, F11, F12]

4.1 The function is finite by [F1]. Continuity of absolute value [F13] and continuity of $h$ (steps 1.1–1.2, or the identity for $p=1$) imply continuity of $h(|t|)$: choose an output tolerance for $h$ at $|t|$ and then the corresponding input tolerance for absolute value. Consequently all Borel preimages are Borel by [F14], which is exactly [F15]. [step 1.1, step 1.2, F1, F13, F14, F15] ∎

## Source notes

Durrett Theorem 4.1.11, printed pp.211–212, and van der Vaart Lemma 1.9(vii), printed p.4, use this power in the contraction argument. The calculus and endpoint proof is supplied here from the explicitly cited local real-analysis results.
```

No repair or unresolved obligation for this item. Validation pending scoped final checks. Next action: next assigned item.

### Batch 4: `cor-conditional-lp-contraction` — accepted

Claim/conventions: Assume AC. For $1\le p\le\infty$, conditional expectation is a linear map from real $L^p(P)$ to real $L^p(P|_{\mathcal G})$ satisfying $\|E[X\mid\mathcal G]\|_p\le\|X\|_p$.

Evidence: On the probability space finite-measure inclusion supplies L1 for p>1, including infinity. For finite p the preceding power lemma and the assumed p-moment meet Jensen hypotheses; expectation preservation gives the norm bound. At infinity the countable essential bounds M+1/n yield the attained a.s. bound M and conditional order preserves it. Linearity and independence of representatives make this a well-defined quotient map.

Dependency record: `deps: [thm-conditional-jensen-inequality, lem-absolute-real-powers-are-convex, thm-basic-algebra-and-order-properties-of-conditional-expectation, def-l-p-space-as-a-quotient-by-null-functions, thm-finite-measure-l-r-includes-into-l-p-for-p-less-r, def-axiom-of-choice]`. Read current item and owning contract. Source metadata (not an independent retrieval claim):

```yaml
references:
    - title: "Durrett, Probability: Theory and Examples, 5th ed."
      url: https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf
---

## Statement

Assume AC. For $1\le p\le\infty$, conditional expectation is a linear map from real $L^p(P)$ to real $L^p(P|_{\mathcal G})$ satisfying $\|E[X\mid\mathcal G]\|_p\le\|X\|_p$.

## Facts & Assumptions

**Given:** AC, $1\le p\le\infty$, real $X\in L^p(P)$, and a conditioning sub-sigma-algebra G.

[F1] On a finite measure space, higher Lp spaces and L-infinity embed in $L^1$. ([[thm-finite-measure-l-r-includes-into-l-p-for-p-less-r]])

[F2] $t\mapsto|t|^p$ is finite Borel convex for every finite $p\ge1$. ([[lem-absolute-real-powers-are-convex]])

[F3] Conditional Jensen applies when X and the finite convex function of X are integrable. ([[thm-conditional-jensen-inequality]])

[F4] Conditional expectation is linear, preserves expectation and order, and satisfies the modulus bound. ([[thm-basic-algebra-and-order-properties-of-conditional-expectation]])

[F5] Lp elements are almost-everywhere classes of measurable representatives. ([[def-l-p-space-as-a-quotient-by-null-functions]])

## Proof

**Proof technique:** direct.

1.1 For $p>1$, [F1] with $P(\Omega)=1$ makes $X$ integrable; for $p=1$ it is integrable by assumption. Put $U=E[X\mid\mathcal G]$. For finite $p$, [F2] supplies the convex Borel function and $E|X|^p<\infty$ supplies its integrability. Jensen yields $|U|^p\le E[|X|^p\mid\mathcal G]$. Taking expectations using [F4] gives $E|U|^p\le E|X|^p$ and hence the norm inequality by taking the increasing positive pth root. At $p=1$ this is also the modulus estimate of [F4]. [F1, F2, F3, F4]

2.1 If $p=\infty$, let $M=\|X\|_\infty$. The inequalities $|X|\le M+1/n$ for all positive integers hold outside a common null set; their limit gives $|X|\le M$ almost surely. Conditional order and constants imply $-M\le U\le M$ almost surely. Thus $\|U\|_\infty\le M$. Equality of input representatives preserves the conditional class, so the maps are well defined on [F5]; linearity is [F4]. [F1, F4, F5] ∎

## Source notes

Durrett Theorem 4.1.11 and proof, printed pp.211–212; van der Vaart Lemma 1.9(vii), printed p.4. The infinite endpoint uses the essential bound directly.
```

No repair or unresolved obligation for this item. Validation pending scoped final checks. Next action: next assigned item.

### Batch 4: `thm-conditional-expectation-is-the-l2-orthogonal-projection` — accepted

Claim/conventions: Assume AC. Real $L^2(\Omega,\mathcal G,P|_{\mathcal G})$ embeds isometrically as a closed subspace of real $L^2(\Omega,\mathcal F,P)$. For $X\in L^2(P)$, $U=E[X\mid\mathcal G]$ is its orthogonal projection onto this subspace. It uniquely minimizes $E[(X-Z)^2]$ over $Z\in L^2(\mathcal G)$ as an almost-sure class.

Evidence: The restricted L2 inclusion preserves null equivalence and integrals, hence is an isometry. Restricted completeness under AC-implied CC makes its image closed. Contraction puts U in that image; Cauchy–Schwarz supplies integrability of ZX and ZU for every L2(G) test. Taking-out and expectation preservation give orthogonality without a density premise. The integrable square expansion gives the Pythagorean identity and uniqueness as a class; known variables are fixed.

Dependency record: `deps: [cor-conditional-lp-contraction, lem-conditioning-a-known-variable-and-an-independent-variable, thm-taking-out-what-is-known, cor-cauchy-schwarz-inequality-for-l-two, thm-riesz-fischer-completeness-of-l-p, def-axiom-of-choice, thm-basic-algebra-and-order-properties-of-conditional-expectation]`. Read current item and owning contract. Source metadata (not an independent retrieval claim):

```yaml
references:
    - title: "Durrett, Probability: Theory and Examples, 5th ed."
      url: https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf
---

## Statement

Assume AC. Real $L^2(\Omega,\mathcal G,P|_{\mathcal G})$ embeds isometrically as a closed subspace of real $L^2(\Omega,\mathcal F,P)$. For $X\in L^2(P)$, $U=E[X\mid\mathcal G]$ is its orthogonal projection onto this subspace. It uniquely minimizes $E[(X-Z)^2]$ over $Z\in L^2(\mathcal G)$ as an almost-sure class.

## Facts & Assumptions

**Given:** AC, a probability space, a sub-sigma-algebra G, and real $X\in L^2(P)$.

[F1] The conditional mean of an $L^2$ input belongs to $L^2$(G). ([[cor-conditional-lp-contraction]])

[F2] Under countable choice $L^2$ on every measure space is complete. ([[thm-riesz-fischer-completeness-of-l-p]])

[F3] AC supplies countable choice for Riesz–Fischer, including representatives, and the inherited RN existence choices. ([[def-axiom-of-choice]])

[F4] $L^2$ products are integrable, with $E|AB|\le\|A\|_2\|B\|_2$. ([[cor-cauchy-schwarz-inequality-for-l-two]])

[F5] A G-measurable finite factor can be taken out whenever the input and its product are integrable. ([[thm-taking-out-what-is-known]])

[F6] Conditional expectation fixes G-measurable integrable variables. ([[lem-conditioning-a-known-variable-and-an-independent-variable]])

[F7] Conditional expectation preserves ordinary expectation. ([[thm-basic-algebra-and-order-properties-of-conditional-expectation]])

## Proof

**Proof technique:** direct.

1.1 The inclusion sends the class of a $\mathcal G$-measurable function to its ambient class. Two such functions agree almost surely for the restricted measure exactly when they do for P; their squared integrals are identical. Thus inclusion is well defined, injective, linear and isometric. If a sequence in its image converges in ambient $L^2$, its preimages are Cauchy, converge by [F2] under [F3], and their images converge to the same ambient limit by the isometry and uniqueness of metric limits. Hence the image is closed. [F2, F3]

1.2 By [F1], $U\in L^2(\mathcal G)$. Fix $Z\in L^2(\mathcal G)$. Both $ZX$ and $ZU$ are integrable by [F4]. Taking-out [F5] gives $E[ZX\mid\mathcal G]=ZU$. Taking ordinary expectations by [F7] yields $E[ZX]=E[ZU]$, hence $E[Z(X-U)]=0$. This establishes orthogonality for every Z directly, and in particular for bounded G-measurable tests, without a density argument. [F1, F4, F5, F7]

2.1 For every $Z\in L^2(\mathcal G)$, expand $X-Z=(X-U)+(U-Z)$. All products are integrable by [F4], and step 1.2 annihilates the cross term. Therefore $E[(X-Z)^2]=E[(X-U)^2]+E[(U-Z)^2]$. The last term is nonnegative and is zero exactly when $U=Z$ as an $L^2$ class, since $L^2$ is a normed space. The minimizer is therefore unique. Finally [F6] fixes every member of the subspace, so the conditional map is indeed the projection onto it. [step 1.1, step 1.2, F4, F6] ∎

## Source notes

Durrett Theorem 4.1.15 and geometric remark, printed p.213; van der Vaart Lemma 1.8 and proof, printed p.3. The product-integrability route proves orthogonality for all $L^2$ tests directly; closedness is separately established from the restricted $L^2$ completeness interface.
```

No repair or unresolved obligation for this item. Validation pending scoped final checks. Next action: next assigned item.

### Batch 4: `def-conditional-variance` — accepted

Claim/conventions: Assume AC. For real $X\in L^2(P)$ define $\operatorname{Var}(X\mid\mathcal G)=E[(X-E[X\mid\mathcal G])^2\mid\mathcal G]$ as an almost-sure class. Its integrability, nonnegativity, representative independence and second-moment formula are justified by the following lemma.

The conditional class is [[def-conditional-expectation-as-an-ae-class]], with [[def-axiom-of-choice]] inherited from existence. By [[cor-conditional-lp-contraction]], a version of the conditional mean is square integrable. The unbounded-factor rule [[thm-taking-out-what-is-known]] will apply to products whose integrability is verified in the well-definedness lemma, recorded under `justified_by`.

Evidence: L2 contraction makes the residual square integrable and the definition explicitly defers well-definedness to the next lemma, read together. It defines an almost-sure class under the inherited AC assumption rather than a canonical pointwise function.

Dependency record: `deps: [def-conditional-expectation-as-an-ae-class, cor-conditional-lp-contraction, thm-taking-out-what-is-known, def-axiom-of-choice]`. Read current item and owning contract. Source metadata (not an independent retrieval claim):

```yaml
references:
    - title: "Durrett, Probability: Theory and Examples, 5th ed."
      url: https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf
---

## Definition

Assume AC. For real $X\in L^2(P)$ define $\operatorname{Var}(X\mid\mathcal G)=E[(X-E[X\mid\mathcal G])^2\mid\mathcal G]$ as an almost-sure class. Its integrability, nonnegativity, representative independence and second-moment formula are justified by the following lemma.

The conditional class is [[def-conditional-expectation-as-an-ae-class]], with [[def-axiom-of-choice]] inherited from existence. By [[cor-conditional-lp-contraction]], a version of the conditional mean is square integrable. The unbounded-factor rule [[thm-taking-out-what-is-known]] will apply to products whose integrability is verified in the well-definedness lemma, recorded under `justified_by`.

## Source notes

Durrett §4.1.2, printed pp.211–213, supplies the conditional $L^2$ machinery; the following local lemma establishes the variance formula.
```

No repair or unresolved obligation for this item. Validation pending scoped final checks. Next action: next assigned item.

### Batch 4: `lem-conditional-variance-is-well-defined-and-has-the-second-moment-formula` — accepted

Claim/conventions: Assume AC. For real $X\in L^2(P)$, conditional variance is an integrable nonnegative class independent of representatives and satisfies $\operatorname{Var}(X\mid\mathcal G)=E[X^2\mid\mathcal G]-(E[X\mid\mathcal G])^2$ almost surely.

Evidence: The residual-square bound 2X^2+2U^2 gives integrability. Changes of measurable representatives change the residual only on a measurable null union. Cauchy–Schwarz makes XU integrable before the unbounded taking-out rule is applied. U^2 is a known integrable variable. Thus all three terms in the square expansion have finite conditional classes and yield the second-moment formula and positivity.

Dependency record: `deps: [def-conditional-variance, thm-taking-out-what-is-known, cor-conditional-lp-contraction, thm-basic-algebra-and-order-properties-of-conditional-expectation, thm-the-lebesgue-integral-respects-almost-everywhere-equality, def-axiom-of-choice, cor-cauchy-schwarz-inequality-for-l-two, lem-conditioning-a-known-variable-and-an-independent-variable]`. Read current item and owning contract. Source metadata (not an independent retrieval claim):

```yaml
references:
    - title: "Durrett, Probability: Theory and Examples, 5th ed."
      url: https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf
---

## Statement

Assume AC. For real $X\in L^2(P)$, conditional variance is an integrable nonnegative class independent of representatives and satisfies $\operatorname{Var}(X\mid\mathcal G)=E[X^2\mid\mathcal G]-(E[X\mid\mathcal G])^2$ almost surely.

## Facts & Assumptions

**Given:** AC, real $X\in L^2(P)$, a sub-sigma-algebra G and the proposed conditional-variance definition.

[F1] Conditional variance is the conditional expectation of the squared residual. ([[def-conditional-variance]])

[F2] The conditional mean of X is square integrable. ([[cor-conditional-lp-contraction]])

[F3] Products of $L^2$ functions are integrable. ([[cor-cauchy-schwarz-inequality-for-l-two]])

[F4] The known factor can be taken outside after product integrability is checked. ([[thm-taking-out-what-is-known]])

[F5] Conditional expectation is positive and linear. ([[thm-basic-algebra-and-order-properties-of-conditional-expectation]])

[F6] Almost-everywhere equal integrable functions have identical event integrals. ([[thm-the-lebesgue-integral-respects-almost-everywhere-equality]])

[F7] Conditional expectation fixes an integrable known variable. ([[lem-conditioning-a-known-variable-and-an-independent-variable]])

## Proof

**Proof technique:** direct.

1.1 Write $U=E[X\mid\mathcal G]$. It is in $L^2$ by [F2]. Since $(X-U)^2\le2X^2+2U^2$, the squared residual is integrable; it is nonnegative and measurable. Thus [F1] exists as an integrable nonnegative class by [F5]. If X or U is replaced by an almost-surely equal measurable representative, the square changes only on the union of those two measurable null sets. Its event integrals are unchanged by [F6], so its conditional class is unchanged. [F1, F2, F5, F6]

2.1 The product XU is integrable by [F3]; U is finite and G-measurable. Hence [F4] yields $E[XU\mid\mathcal G]=U E[X\mid\mathcal G]=U^2$. Also U squared is integrable and G-measurable, so [F7] gives $E[U^2\mid\mathcal G]=U^2$. Expanding the residual square and using [F5] gives $E[(X-U)^2\mid\mathcal G]=E[X^2\mid\mathcal G]-2U^2+U^2=E[X^2\mid\mathcal G]-U^2$. All three conditional inputs are integrable, so the subtraction involves finite classes only. [step 1.1, F3, F4, F5, F7] ∎

## Source notes

Durrett Theorems 4.1.9, 4.1.11, 4.1.14–4.1.15, printed pp.210–213. The local square expansion supplies the formula and checks every product before taking-out.
```

No repair or unresolved obligation for this item. Validation pending scoped final checks. Next action: next assigned item.

### Batch 4: `cor-conditional-variance-decomposition` — accepted

Claim/conventions: Assume AC. For real $X\in L^2(P)$, $\operatorname{Var}(X)=E[\operatorname{Var}(X\mid\mathcal G)]+\operatorname{Var}(E[X\mid\mathcal G])$.

Evidence: The proved integrable second-moment identity gives E[Var(X|G)]=EX^2-EU^2; expectation preservation gives EU=EX. Expanding the two ordinary centered squares cancels EU^2 and produces exactly the claimed identity. All quantities are finite, including the degenerate zero-variance cases.

Dependency record: `deps: [def-conditional-variance, thm-basic-algebra-and-order-properties-of-conditional-expectation, def-moments-variance-and-covariance, lem-conditional-variance-is-well-defined-and-has-the-second-moment-formula, def-axiom-of-choice]`. Read current item and owning contract. Source metadata (not an independent retrieval claim):

```yaml
references:
    - title: "Durrett, Probability: Theory and Examples, 5th ed."
      url: https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf
---

## Statement

Assume AC. For real $X\in L^2(P)$, $\operatorname{Var}(X)=E[\operatorname{Var}(X\mid\mathcal G)]+\operatorname{Var}(E[X\mid\mathcal G])$.

## Facts & Assumptions

**Given:** AC, real $X\in L^2(P)$ and a sub-sigma-algebra G.

[F1] The integrable conditional variance equals the conditional second moment minus the squared conditional mean. ([[lem-conditional-variance-is-well-defined-and-has-the-second-moment-formula]])

[F2] Taking ordinary expectation of a conditional expectation preserves its value. ([[thm-basic-algebra-and-order-properties-of-conditional-expectation]])

[F3] Variance is the expectation of the centered square. ([[def-moments-variance-and-covariance]])

## Proof

**Proof technique:** direct.

1.1 Put $U=E[X\mid\mathcal G]$. By [F1], $U^2=E[X^2\mid\mathcal G]-\operatorname{Var}(X\mid\mathcal G)$ is a difference of integrable functions, so U is square integrable. Taking expectations in that formula gives $E[\operatorname{Var}(X\mid\mathcal G)]=EX^2-EU^2$. Moreover $EU=EX$ by [F2]. [F1, F2]

2.1 For any square integrable real V, expansion of the centered square in [F3] gives $\operatorname{Var}(V)=EV^2-(EV)^2$. Therefore $E[\operatorname{Var}(X\mid\mathcal G)]+\operatorname{Var}(U)=EX^2-EU^2+EU^2-(EX)^2=\operatorname{Var}(X)$, proving the formula. [step 1.1, F3] ∎

## Source notes

Durrett §4.1.2, printed pp.210–213, supplies expectation preservation and the conditional $L^2$ identities. The decomposition is the displayed local algebraic consequence of the proved second-moment formula.
```

No repair or unresolved obligation for this item. Validation pending scoped final checks. Next action: next assigned item.

### Batch 4: `thm-uniform-integrability-of-conditional-expectations-of-one-variable` — accepted

Claim/conventions: Assume AC. For fixed real $X\in L^1(P)$, the classes $E[X\mid\mathcal G]$, as $\mathcal G$ ranges over all sub-sigma-algebras of $\mathcal F$, form a uniformly integrable family.

Evidence: For each fixed G the G-measurable event {|Y|>K} has probability at most E|X|/K. The conditional modulus bound and the event identity bound its Y tail integral by the integral of the single fixed |X| over that event. Absolute continuity of this integral gives one K valid for every G and every version. The zero-input case is explicit; no simultaneous uncountable selection or null-set intersection is used.

Dependency record: `deps: [def-conditional-expectation-as-an-ae-class, thm-basic-algebra-and-order-properties-of-conditional-expectation, thm-taking-out-what-is-known, def-uniformly-integrable-family, thm-absolute-continuity-of-the-integral, def-axiom-of-choice]`. Read current item and owning contract. Source metadata (not an independent retrieval claim):

```yaml
references:
    - title: "van der Vaart, Martingales, Diffusions and Financial Mathematics"
      url: https://diamhomes.ewi.tudelft.nl/~avandervaart/books/stochint.pdf
---

## Statement

Assume AC. For fixed real $X\in L^1(P)$, the classes $E[X\mid\mathcal G]$, as $\mathcal G$ ranges over all sub-sigma-algebras of $\mathcal F$, form a uniformly integrable family.

## Facts & Assumptions

**Given:** AC and one fixed real $X\in L^1(P)$; G ranges over sub-sigma-algebras of F.

[F1] Versions have the same event integrals as their input. ([[def-conditional-expectation-as-an-ae-class]])

[F2] The modulus is bounded by the conditional mean of the absolute input; ordinary expectations are preserved. ([[thm-basic-algebra-and-order-properties-of-conditional-expectation]])

[F3] For fixed integrable X, sufficiently small measure events have uniformly small integrals of |X|. ([[thm-absolute-continuity-of-the-integral]])

[F4] Uniform integrability means the supremum of absolute tail integrals tends to zero. ([[def-uniformly-integrable-family]])

## Proof

**Proof technique:** direct.

1.1 Fix one G, a version $Y=E[X\mid\mathcal G]$, and $K>0$. Put $A=\{|Y|>K\}\in\mathcal G$. Since $K\mathbf1_A\le|Y|\mathbf1_A$ and $E|Y|\le E|X|$, integration gives $P(A)\le E|X|/K$. Also $|Y|\le E[|X|\mid\mathcal G]$ almost surely, so the defining event integral gives $\int_A|Y|\le\int_A E[|X|\mid\mathcal G]=\int_A|X|$. [F1, F2]

2.1 Given $\varepsilon>0$, choose $\delta>0$ using [F3] for the fixed X. Choose $K>E|X|/\delta$ (any positive K works when the numerator is zero). Then step 1.1 gives $P(A)<\delta$ and hence $\int_{\{|Y|>K\}}|Y|<\varepsilon$. The same K works for every G and every version, so [F4] proves uniform integrability. The proof fixed G arbitrarily and did not select versions simultaneously over all sigma-algebras. [step 1.1, F3, F4] ∎

## Source notes

Van der Vaart, Martingales, Diffusions and Financial Mathematics, Lemma 1.21 and its full proof, printed p.6 (PDF index 11). The local argument uses the same tail event with absolute continuity of the fixed input integral.
```

No repair or unresolved obligation for this item. Validation pending scoped final checks. Next action: next assigned item.

### Batch 4: `rem-conditional-expectation-is-a-class-not-a-canonical-pointwise-function` — accepted

Claim/conventions: ## Remarks

Under the AC existence convention, identities between conditional expectations concern almost-sure classes. Once versions for finitely or countably many such identities are selected, the identities hold simultaneously outside the union of their measurable null exceptional sets; that union is still null. This gives no single pointwise representative satisfying an uncountable family of identities. Subsequent conditional-law constructions require their own hypotheses.

The class and version terminology is [[def-conditional-expectation-as-an-ae-class]], whose existence uses [[def-axiom-of-choice]]. A modified version must remain measurable for the conditioning sigma-algebra; an arbitrary subset of an ambient null set need not be measurable for that sigma-algebra.

## Source notes

Durrett §4.1 uniqueness discussion, printed p.206, and countable-exception remark after Theorem 4.1.10, p.211; van der Vaart warning after Lemma 1.10, printed p.4.

Evidence: The remark correctly permits simultaneous validity for finitely or countably many chosen identities by a measurable null union, and makes no uncountable pointwise assertion. It correctly requires modified versions to remain G-measurable even when G is incomplete.

Dependency record: `deps: [def-conditional-expectation-as-an-ae-class, def-axiom-of-choice]`. Read current item and owning contract. Source metadata (not an independent retrieval claim):

```yaml
references:
    - title: "Durrett, Probability: Theory and Examples, 5th ed."
      url: https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf
---

## Remarks

Under the AC existence convention, identities between conditional expectations concern almost-sure classes. Once versions for finitely or countably many such identities are selected, the identities hold simultaneously outside the union of their measurable null exceptional sets; that union is still null. This gives no single pointwise representative satisfying an uncountable family of identities. Subsequent conditional-law constructions require their own hypotheses.

The class and version terminology is [[def-conditional-expectation-as-an-ae-class]], whose existence uses [[def-axiom-of-choice]]. A modified version must remain measurable for the conditioning sigma-algebra; an arbitrary subset of an ambient null set need not be measurable for that sigma-algebra.

## Source notes

Durrett §4.1 uniqueness discussion, printed p.206, and countable-exception remark after Theorem 4.1.10, p.211; van der Vaart warning after Lemma 1.10, printed p.4.
```

No repair or unresolved obligation for this item. Validation pending scoped final checks. Next action: next assigned item.

### Batch 4: `cor-conditional-cauchy-schwarz-inequality` — accepted

Claim/conventions: Assume AC. For real $X,Y\in L^2(P)$, $|E[XY\mid\mathcal G]|^2\le E[X^2\mid\mathcal G]E[Y^2\mid\mathcal G]$ almost surely.

Evidence: Ordinary Cauchy–Schwarz makes XY integrable. Conditional positivity of each rational-parameter square yields one countable collection of quadratic inequalities for fixed finite a,b,c. Polynomial continuity and rational density extend this pointwise to all real parameters. The explicit c=0 test forces b=0; otherwise evaluation at -b/c proves the result without dividing by a vanishing coefficient.

Dependency record: `deps: [def-conditional-expectation-as-an-ae-class, thm-basic-algebra-and-order-properties-of-conditional-expectation, cor-cauchy-schwarz-inequality-for-l-two, def-axiom-of-choice, lem-rat-embeds-dense, thm-rationals-countable]`. Read current item and owning contract. Source metadata (not an independent retrieval claim):

```yaml
references:
    - title: "Durrett, Probability: Theory and Examples, 5th ed."
      url: https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf
---

## Statement

Assume AC. For real $X,Y\in L^2(P)$, $|E[XY\mid\mathcal G]|^2\le E[X^2\mid\mathcal G]E[Y^2\mid\mathcal G]$ almost surely.

## Facts & Assumptions

**Given:** AC, real $X,Y\in L^2(P)$ and a sub-sigma-algebra G.

[F1] XY is integrable because X and Y are square integrable. ([[cor-cauchy-schwarz-inequality-for-l-two]])

[F2] Integrable inputs have finite conditional versions under AC. ([[def-conditional-expectation-as-an-ae-class]])

[F3] Conditional positivity and linearity hold. ([[thm-basic-algebra-and-order-properties-of-conditional-expectation]])

[F4] Rationals approximate every real parameter. ([[lem-rat-embeds-dense]])

[F5] There are only countably many rational parameters. ([[thm-rationals-countable]])

## Proof

**Proof technique:** direct.

1.1 By [F1], XY is integrable. Fix finite versions $a=E[X^2\mid\mathcal G]$, $b=E[XY\mid\mathcal G]$, and $c=E[Y^2\mid\mathcal G]$. Positivity gives $a,c\ge0$ almost surely. For every rational t, $(X+tY)^2$ is integrable and nonnegative, and linearity and positivity give $a+2tb+t^2c\ge0$ almost surely. By [F5] one null union removes every rational-parameter exception. [F1, F2, F3, F5]

2.1 At a remaining point, the polynomial $q(t)=a+2tb+t^2c$ is continuous: $q(t)-q(s)=(t-s)(2b+c(t+s))$, which tends to zero as $t\to s$. If q were negative at any real s, it would stay negative on an interval around s, containing a rational by [F4], contrary to step 1.1. Thus q is nonnegative for all real t. [step 1.1, F4]

3.1 If $c=0$ and $b\ne0$, the choice $t=-(a+1)/(2b)$ gives $q(t)=-1$, impossible; hence $b=0$ and $b^2\le ac$. If $c>0$, put $t=-b/c$ to get $0\le a-b^2/c$, so again $b^2\le ac$. The cases cover every remaining point and prove the conditional inequality. [step 2.1] ∎

## Source notes

Durrett §4.1.2, Theorem 4.1.9(a)–(b), printed pp.210–211, supplies positivity and linearity. The conditional quadratic argument is written here in full, using rational parameters and explicit zero-coefficient handling.
```

No repair or unresolved obligation for this item. Validation pending scoped final checks. Next action: next assigned item.

### Batch 4: `ex-conditioning-on-a-finite-partition` — accepted

Claim/conventions: Assume AC for the conditional-class convention. Let $(A_i)_{i=1}^m$ be a finite measurable partition of a probability space, $\mathcal G=\sigma(A_1,\ldots,A_m)$, and real $X\in L^1(P)$. A version has value $c_i=P(A_i)^{-1}\int_{A_i}X\,dP$ on each positive-mass cell, and zero on each zero-mass cell.

Evidence: The cell formula avoids division on zero-mass cells, is G-measurable and has L1 norm bounded by E|X|. All G-events are unions of cells, so the verified cell identities suffice. The four equiprobable-atom arithmetic gives (1,1,5,5) and mean 3 correctly; indicators recover the conditional probability formula.

Dependency record: `deps: [def-conditional-expectation-as-an-ae-class, lem-conditional-expectation-is-unique-almost-surely, def-axiom-of-choice, thm-finite-probability-spaces-are-exactly-finite-full-power-set-probability-spaces]`. Read current item and owning contract. Source metadata (not an independent retrieval claim):

```yaml
references:
    - title: "Durrett, Probability: Theory and Examples, 5th ed."
      url: https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf
---

## Example

Assume AC for the conditional-class convention. Let $(A_i)_{i=1}^m$ be a finite measurable partition of a probability space, $\mathcal G=\sigma(A_1,\ldots,A_m)$, and real $X\in L^1(P)$. A version has value $c_i=P(A_i)^{-1}\int_{A_i}X\,dP$ on each positive-mass cell, and zero on each zero-mass cell.

## Facts & Assumptions

**Given:** A probability space, a finite measurable partition $(A_i)$, $\mathcal G=\sigma(A_i)$, and real integrable X; AC is the conditional-class convention.

[F1] A G-measurable integrable function with the defining event integrals represents the conditional class. ([[def-conditional-expectation-as-an-ae-class]])

[F2] The version is unique as a class. ([[lem-conditional-expectation-is-unique-almost-surely]])

[F3] Nonnegative finite atom weights summing to one define a probability measure. ([[thm-finite-probability-spaces-are-exactly-finite-full-power-set-probability-spaces]])

## Verification

**Proof technique:** direct.

1.1 Let $T=\sum_i c_i\mathbf1_{A_i}$ with the displayed zero convention. It is G-measurable and $E|T|=\sum_{i:P(A_i)>0}|\int_{A_i}X|\le\sum_i\int_{A_i}|X|=E|X|<\infty$. Each positive-mass cell has $\int_{A_i}T=c_iP(A_i)=\int_{A_i}X$; on a null cell both integrals are zero. Every G-event is a union of cells (these unions form a sigma-algebra), so adding proves every defining identity. Hence [F1]–[F2] identify T as the conditional mean. [F1, F2]

2.1 For a numerical instance take four atoms of weight $1/4$, permitted by [F3], partitioned into $A_1=\{1,2\}$ and $A_2=\{3,4\}$. For X with values $(0,2,4,6)$, the cell integrals are $1/2$ and $5/2$ and their masses are $1/2$, so T has values $(1,1,5,5)$. Its mean is 3, matching $(0+2+4+6)/4=3$. For $X=\mathbf1_B$ the same positive-cell calculation is $c_i=P(B\cap A_i)/P(A_i)$, the finite conditional-probability formula. [step 1.1, F3] ∎

## Source notes

Durrett Example 4.1.5, printed p.208; van der Vaart Example 1.7, printed p.3. Zero-mass cells and a numerical four-atom calculation are included.
```

No repair or unresolved obligation for this item. Validation pending scoped final checks. Next action: next assigned item.

### Batch 4: `ex-conditioning-on-trivial-and-full-sigma-algebras` — accepted

Claim/conventions: Under the AC conditional-class convention, for integrable real X, $E[X\mid\{\varnothing,\Omega\}]=EX$ and $E[X\mid\mathcal F]=X$ as classes.

Evidence: The trivial events satisfy the independence rectangle identity directly; the full sigma-algebra makes X known. The earlier lemma therefore gives the formulas. The two-atom weights and values give mean 3 and the stated event integrals.

Dependency record: `deps: [lem-conditioning-a-known-variable-and-an-independent-variable, def-axiom-of-choice, thm-finite-probability-spaces-are-exactly-finite-full-power-set-probability-spaces]`. Read current item and owning contract. Source metadata (not an independent retrieval claim):

```yaml
references:
    - title: "Durrett, Probability: Theory and Examples, 5th ed."
      url: https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf
---

## Example

Under the AC conditional-class convention, for integrable real X, $E[X\mid\{\varnothing,\Omega\}]=EX$ and $E[X\mid\mathcal F]=X$ as classes.

## Facts & Assumptions

**Given:** A probability space and real integrable X; AC is the conditional-class convention.

[F1] A known variable conditions to itself, and a variable independent of the conditioning sigma-algebra conditions to its mean. ([[lem-conditioning-a-known-variable-and-an-independent-variable]])

[F2] Finite weights summing to one define a probability space. ([[thm-finite-probability-spaces-are-exactly-finite-full-power-set-probability-spaces]])

## Verification

**Proof technique:** direct.

1.1 Every X is independent of the trivial sigma-algebra: for A empty both sides of the rectangle identity are zero, and for A=Omega both equal $P(X\in B)$. Thus [F1] gives the first formula. Since X is F-measurable, the known-variable clause of [F1] gives the second. [F1]

2.1 For example take two atoms a,b of masses $1/4,3/4$ using [F2], and X(a)=0, X(b)=4. Then $EX=0/4+12/4=3$. Under trivial conditioning the version has values (3,3), with integral 3 on Omega; under full conditioning it has values (0,4), with integrals 0 on {a} and 3 on {b}. These verify the two formulas numerically. [step 1.1, F2] ∎

## Source notes

Durrett Examples 4.1.3–4.1.5, printed pp.207–208; van der Vaart Examples 1.4–1.5, printed p.2.
```

No repair or unresolved obligation for this item. Validation pending scoped final checks. Next action: next assigned item.

### Batch 4: `ex-conditioning-an-independent-sum-on-one-summand` — accepted

Claim/conventions: Assume AC for conditional classes. If real integrable X,Y are independent, meaning $P(X\in B,Y\in C)=P(X\in B)P(Y\in C)$ for all real Borel B,C, then $E[X+Y\mid\sigma(X)]=X+EY$ almost surely.

Evidence: Borel preimages under X already form sigma(X), so the rectangle hypothesis is exactly the independence needed by the known/independent lemma. Linearity gives X+EY. The explicit four-atom example verifies the rectangle probabilities and conditional fibre means 1 and 2.

Dependency record: `deps: [lem-conditioning-a-known-variable-and-an-independent-variable, thm-basic-algebra-and-order-properties-of-conditional-expectation, def-axiom-of-choice, thm-finite-probability-spaces-are-exactly-finite-full-power-set-probability-spaces]`. Read current item and owning contract. Source metadata (not an independent retrieval claim):

```yaml
references:
    - title: "Durrett, Probability: Theory and Examples, 5th ed."
      url: https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf
---

## Example

Assume AC for conditional classes. If real integrable X,Y are independent, meaning $P(X\in B,Y\in C)=P(X\in B)P(Y\in C)$ for all real Borel B,C, then $E[X+Y\mid\sigma(X)]=X+EY$ almost surely.

## Facts & Assumptions

**Given:** Real integrable independent X,Y on a probability space, with independence defined by the statement Borel rectangle identity; AC is the conditional-class convention.

[F1] The known and independent variable formulas hold under the Borel rectangle hypothesis. ([[lem-conditioning-a-known-variable-and-an-independent-variable]])

[F2] Conditional expectation is linear. ([[thm-basic-algebra-and-order-properties-of-conditional-expectation]])

[F3] Finite atom weights summing to one define a probability space. ([[thm-finite-probability-spaces-are-exactly-finite-full-power-set-probability-spaces]])

## Verification

**Proof technique:** direct.

1.1 The sets $X^{-1}(B)$, B real Borel, form a sigma-algebra because preimages preserve complements and countable unions; by definition this is $\sigma(X)$. Thus the given rectangle identity is precisely independence of Y from every event of $\sigma(X)$. By [F1], $E[Y\mid\sigma(X)]=EY$ and $E[X\mid\sigma(X)]=X$. Linearity [F2] gives the stated sum formula. [F1, F2]

2.1 Take $\Omega=\{0,1\}^2$, each atom of mass $1/4$, and $X(u,v)=u$, $Y(u,v)=2v$. This is a probability space by [F3]. Each coordinate value has mass $1/2$ and each pair mass $1/4=(1/2)(1/2)$; adding atom probabilities proves all Borel rectangle identities. Since $EY=1$, the conditional mean is $u+1$. Directly, on the u=0 fibre the values 0,2 average to 1, and on the u=1 fibre the values 1,3 average to 2. [step 1.1, F3] ∎

## Source notes

Durrett Example 4.1.7, printed pp.209–210, additive special case; Examples 4.1.3–4.1.4 supply the two individual terms.
```

No repair or unresolved obligation for this item. Validation pending scoped final checks. Next action: next assigned item.

### Batch 4: `ex-conditional-expectation-given-a-discrete-random-variable` — accepted

Claim/conventions: Assume AC for conditional classes. If Y is a countably valued real random variable and X is real integrable, a version of $E[X\mid\sigma(Y)]$ takes value $c_y=\int_{\{Y=y\}}X\,dP/P(Y=y)$ on each positive-mass fibre and zero on all zero-mass fibres.

Evidence: The countably many fibre unions form exactly sigma(Y), proving measurability of the formula. MCT on absolute partial sums bounds its L1 norm by E|X|, and null fibres have a null countable union. Absolute summability permits summing the fibre identities on every event. The three-atom arithmetic yields (4,4,10) with mean 7 correctly.

Dependency record: `deps: [def-conditional-expectation-as-an-ae-class, lem-conditional-expectation-is-unique-almost-surely, def-axiom-of-choice, thm-monotone-convergence-for-the-integral, thm-finite-probability-spaces-are-exactly-finite-full-power-set-probability-spaces]`. Read current item and owning contract. Source metadata (not an independent retrieval claim):

```yaml
references:
    - title: "Durrett, Probability: Theory and Examples, 5th ed."
      url: https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf
---

## Example

Assume AC for conditional classes. If Y is a countably valued real random variable and X is real integrable, a version of $E[X\mid\sigma(Y)]$ takes value $c_y=\int_{\{Y=y\}}X\,dP/P(Y=y)$ on each positive-mass fibre and zero on all zero-mass fibres.

## Facts & Assumptions

**Given:** A countably valued real random variable Y and real integrable X on a probability space; AC is the conditional-class convention.

[F1] The measurable integrable event-identity characterization defines the conditional class. ([[def-conditional-expectation-as-an-ae-class]])

[F2] Versions are unique almost surely. ([[lem-conditional-expectation-is-unique-almost-surely]])

[F3] Increasing nonnegative partial sums pass through the integral. ([[thm-monotone-convergence-for-the-integral]])

[F4] Finite weights summing to one define a probability space. ([[thm-finite-probability-spaces-are-exactly-finite-full-power-set-probability-spaces]])

## Verification

**Proof technique:** direct.

1.1 List the at most countably many fibres $A_y=\{Y=y\}$. Every union of fibres is measurable as a countable union, and these unions are exactly $\sigma(Y)$: each fibre is a preimage of a singleton Borel set, and every preimage is a union of fibres. The proposed function T is thus $\sigma(Y)$-measurable. Its absolute integral is $\sum_y |c_y|P(A_y)\le\sum_y\int_{A_y}|X|=E|X|$, where [F3] applies to nonnegative finite partial sums. Null fibres have zero X integral and their countable union is null. [F3]

2.1 On each positive fibre $\int_{A_y}T=c_yP(A_y)=\int_{A_y}X$, and on null fibres both sides are zero. For every union A of fibres, sum these identities; absolute summability follows from step 1.1 and integrability of X, with [F3] applied to positive and negative parts. Thus $\int_A T=\int_A X$. By [F1]–[F2] T is the desired version. [step 1.1, F1, F2, F3]

3.1 For a concrete instance take atoms a,b,c with masses $1/4,1/4,1/2$ by [F4], with Y values (0,0,2) and X values (2,6,10). The zero fibre has mass $1/2$ and X integral $2/4+6/4=2$, so its conditional value is 4. The fibre at 2 has mass $1/2$ and X integral 5, giving value 10. Hence T=(4,4,10), with mean $4/4+4/4+10/2=7=EX$. [step 2.1, F4] ∎

## Source notes

Durrett Example 4.1.5, printed p.208; van der Vaart Example 1.7 and its countable-partition extension, printed p.3. The countable sum is justified using ordinary MCT on positive and negative parts.
```

No repair or unresolved obligation for this item. Validation pending scoped final checks. Next action: next assigned item.

### Batch 4: `ex-l2-best-prediction-by-conditional-expectation` — accepted

Claim/conventions: Assume AC. For real $X\in L^2(P)$, $U=E[X\mid\mathcal G]$ and every $Z\in L^2(\mathcal G)$, $E[(X-Z)^2]=E[(X-U)^2]+E[(U-Z)^2]$. Equality with the minimum error holds if and only if $Z=U$ almost surely.

Evidence: The projection theorem annihilates the cross term against U-Z in L2(G), and the remaining squared norm is zero exactly for the same a.s. class, proving both minimum-error directions. The four-atom example verifies the conditional cell integrals and computes 5=1+4 correctly.

Dependency record: `deps: [thm-conditional-expectation-is-the-l2-orthogonal-projection, def-axiom-of-choice, thm-finite-probability-spaces-are-exactly-finite-full-power-set-probability-spaces, def-conditional-expectation-as-an-ae-class]`. Read current item and owning contract. Source metadata (not an independent retrieval claim):

```yaml
references:
    - title: "Durrett, Probability: Theory and Examples, 5th ed."
      url: https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf
---

## Example

Assume AC. For real $X\in L^2(P)$, $U=E[X\mid\mathcal G]$ and every $Z\in L^2(\mathcal G)$, $E[(X-Z)^2]=E[(X-U)^2]+E[(U-Z)^2]$. Equality with the minimum error holds if and only if $Z=U$ almost surely.

## Facts & Assumptions

**Given:** AC, real $X\in L^2(P)$, a sub-sigma-algebra G, and any predictor $Z\in L^2(\mathcal G)$.

[F1] The conditional mean is the unique $L^2$ minimizer and is orthogonal to every G-measurable $L^2$ residual. ([[thm-conditional-expectation-is-the-l2-orthogonal-projection]])

[F2] Finite weights summing to one define a probability space. ([[thm-finite-probability-spaces-are-exactly-finite-full-power-set-probability-spaces]])

[F3] The event-integral characterization identifies an integrable G-measurable version. ([[def-conditional-expectation-as-an-ae-class]])

## Verification

**Proof technique:** direct.

1.1 Write $X-Z=(X-U)+(U-Z)$. Since $U-Z\in L^2(\mathcal G)$, [F1] gives $E[(X-U)(U-Z)]=0$. Expansion gives the displayed decomposition. The last term is the squared $L^2$ norm of U-Z, so it is zero exactly when Z=U almost surely. This proves both directions of the minimum-error assertion. [F1]

2.1 For an instance take four equally weighted atoms by [F2], X values (0,2,4,6), and G generated by the first pair and last pair. The G-measurable U=(1,1,5,5) has on each pair the same integral as X, namely $1/2$ and $5/2$, so it is the conditional mean. For the constant predictor Z=3 the total error is $(9+1+1+9)/4=5$, the residual error is $(1+1+1+1)/4=1$, and the prediction displacement is $(4+4+4+4)/4=4$. Thus the formula reads $5=1+4$. [step 1.1, F2, F3] ∎

## Source notes

Durrett Theorem 4.1.15, printed p.213; van der Vaart Lemma 1.8, printed p.3. The four-atom calculation illustrates the orthogonal error decomposition.
```

No repair or unresolved obligation for this item. Validation pending scoped final checks. Next action: next assigned item.

### Batch 4: `ex-law-of-total-variance` — accepted

Claim/conventions: Assume AC for conditional classes. On $\Omega=\{0,1\}^2$ with full sigma-algebra and each atom of mass $1/4$, put $U(u,v)=u$, $V(u,v)=v$, $X=U+V$ and $\mathcal G=\sigma(U)$. Then $\operatorname{Var}(X)=1/2$, $E[\operatorname{Var}(X\mid\mathcal G)]=1/4$ and $\operatorname{Var}(E[X\mid\mathcal G])=1/4$.

Evidence: The explicitly weighted four-atom model verifies independence on all Borel rectangles by summing pairs. The conditional mean is U+1/2 and the residual square is identically 1/4. Direct centered sums give total variance 1/2 and conditional-mean variance 1/4; all inputs are bounded, so the decomposition hypotheses hold.

Dependency record: `deps: [cor-conditional-variance-decomposition, lem-conditioning-a-known-variable-and-an-independent-variable, thm-basic-algebra-and-order-properties-of-conditional-expectation, def-axiom-of-choice, thm-finite-probability-spaces-are-exactly-finite-full-power-set-probability-spaces, def-conditional-variance]`. Read current item and owning contract. Source metadata (not an independent retrieval claim):

```yaml
references:
    - title: "Durrett, Probability: Theory and Examples, 5th ed."
      url: https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf
---

## Example

Assume AC for conditional classes. On $\Omega=\{0,1\}^2$ with full sigma-algebra and each atom of mass $1/4$, put $U(u,v)=u$, $V(u,v)=v$, $X=U+V$ and $\mathcal G=\sigma(U)$. Then $\operatorname{Var}(X)=1/2$, $E[\operatorname{Var}(X\mid\mathcal G)]=1/4$ and $\operatorname{Var}(E[X\mid\mathcal G])=1/4$.

## Facts & Assumptions

**Given:** The four-atom model, variables U,V,X and sigma-algebra G specified in the example; AC is the conditional-class convention.

[F1] Finite weights summing to one define a probability measure. ([[thm-finite-probability-spaces-are-exactly-finite-full-power-set-probability-spaces]])

[F2] A known variable conditions to itself; an independent variable conditions to its mean. ([[lem-conditioning-a-known-variable-and-an-independent-variable]])

[F3] Conditional expectation is linear and fixes constants. ([[thm-basic-algebra-and-order-properties-of-conditional-expectation]])

[F4] Total variance is expected conditional variance plus the variance of the conditional mean. ([[cor-conditional-variance-decomposition]])

[F5] Conditional variance is the conditional mean of the squared residual. ([[def-conditional-variance]])

## Verification

**Proof technique:** direct.

1.1 The four masses are nonnegative and sum to one, so [F1] constructs the probability space. Each U and V marginal has mass one half at zero and at one, and $P(U=u,V=v)=1/4=P(U=u)P(V=v)$ for all four pairs. Summing over coordinate subsets gives independence for every Borel rectangle. Both variables are bounded and integrable, with $EU=EV=1/2$. [F1]

2.1 By [F2]–[F3], $E[X\mid\mathcal G]=U+1/2$. The residual is $V-1/2$, whose square equals 1/4 at every atom. Thus [F5] and the constant rule [F3] give $\operatorname{Var}(X\mid\mathcal G)=1/4$ and its expectation 1/4. [step 1.1, F2, F3, F5]

3.1 The four X values are (0,1,1,2), with mean 1, so $\operatorname{Var}(X)=(1+0+0+1)/4=1/2$. The conditional mean takes values one half and three halves, each with probability one half; its mean is 1 and its variance is $((1/2)^2+(1/2)^2)/2=1/4$. Therefore the three computed quantities satisfy [F4] as $1/2=1/4+1/4$. [step 2.1, F4] ∎

## Source notes

Durrett §4.1.2, printed pp.210–213, conditional identities; the explicit four-atom variance instance is locally calculated and has generated-example provenance.
```

No repair or unresolved obligation for this item. Validation pending scoped final checks. Next action: next assigned item.

### Batch 4: `cex-a-version-can-fail-a-pointwise-identity-on-a-null-set` — accepted

Claim/conventions: The assertion “every version of $E[0\mid\mathcal F]$ equals zero at every sample point” is false, under the usual AC conditional-class convention.

Evidence: The explicit Dirac probability on the two-point full sigma-algebra is countably additive. The indicator of the null atom is measurable and integrable with every event integral zero, so is a version for the zero input. Its value one at that atom refutes only the universal pointwise assertion and preserves a.s. uniqueness.

Dependency record: `deps: [def-conditional-expectation-as-an-ae-class, def-axiom-of-choice]`. Read current item and owning contract. Source metadata (not an independent retrieval claim):

```yaml
references:
    - title: "Durrett, Probability: Theory and Examples, 5th ed."
      url: https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf
---

## Statement refuted

The assertion “every version of $E[0\mid\mathcal F]$ equals zero at every sample point” is false, under the usual AC conditional-class convention.

## Facts & Assumptions

**Given:** The universal pointwise claim in Statement refuted; a witness will be constructed on two atoms.

[F1] A real measurable integrable function with the required event integrals is a version of the class. ([[def-conditional-expectation-as-an-ae-class]])

## Counterexample

**Proof technique:** direct.

1.1 Let $\Omega=\{a,b\}$, $\mathcal F=\mathcal P(\Omega)$ and $P(A)=\mathbf1_{\{b\in A\}}$. This is a probability measure: P(Omega)=1, P(empty)=0, and in a disjoint sequence at most one event contains b, so countable additivity holds. Take $T=\mathbf1_{\{a\}}$. It is F-measurable and $E|T|=1\cdot0+0\cdot1=0$. [given]

2.1 For every A subset Omega, $\int_A T=T(b)\mathbf1_{\{b\in A\}}=0=\int_A0$. Thus [F1] makes T a version of the conditional expectation of zero. But T(a)=1, so the claimed pointwise identity fails at a. The discrepancy set {a} has probability zero, consistent with almost-sure uniqueness. [step 1.1, F1] ∎

## Source notes

Durrett §4.1 uniqueness/version discussion, printed p.206; van der Vaart warning after Lemma 1.10, printed p.4. The two-atom witness is locally constructed.
```

No repair or unresolved obligation for this item. Validation pending scoped final checks. Next action: next assigned item.

### Batch 4: `cex-conditioning-does-not-preserve-strict-inequalities` — accepted

Claim/conventions: Even when $X(\omega)<Y(\omega)$ at every point, arbitrary versions of their conditional expectations need not satisfy that strict inequality at every point. This is a pointwise-version counterexample; strict almost-sure inequalities are preserved.

Evidence: The approved pointwise-version interpretation is explicit in the current statement. On the two-point Dirac probability, constant inputs 0<1 everywhere have versions S=(2,0) and T=(1,1) with exactly the required event integrals. The reversed inequality occurs only at the measurable null atom; at the mass-one atom strict order holds, consistent with the proved a.s. theorem. The stable ID is preserved.

Dependency record: `deps: [def-conditional-expectation-as-an-ae-class, thm-basic-algebra-and-order-properties-of-conditional-expectation, def-axiom-of-choice]`. Read current item and owning contract. Source metadata (not an independent retrieval claim):

```yaml
references:
    - title: "Durrett, Probability: Theory and Examples, 5th ed."
      url: https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf
---

## Statement refuted

Even when $X(\omega)<Y(\omega)$ at every point, arbitrary versions of their conditional expectations need not satisfy that strict inequality at every point. This is a pointwise-version counterexample; strict almost-sure inequalities are preserved.

## Facts & Assumptions

**Given:** The claim that pointwise strict input order must hold for every pair of conditional versions at every point; a two-atom witness will be constructed.

[F1] The class is specified by event integrals, not by fixed values at null points. ([[def-conditional-expectation-as-an-ae-class]])

[F2] Strict almost-sure order is preserved by conditional expectation. ([[thm-basic-algebra-and-order-properties-of-conditional-expectation]])

## Counterexample

**Proof technique:** direct.

1.1 On $\Omega=\{a,b\}$ take the full sigma-algebra $\mathcal G=\mathcal F$ and $P(A)=\mathbf1_{\{b\in A\}}$. Countable additivity holds because at most one member of a disjoint sequence contains b, and total mass is one. Let X=0 and Y=1 everywhere. Then X<Y at both points. Set S(a)=2,S(b)=0 and T=1 everywhere; these are measurable and integrable. [given]

2.1 For every A, $\int_A S=0=\int_A X$ and $\int_A T=P(A)=\int_A Y$, so [F1] makes S,T conditional versions. At a, however, S(a)=2 is larger than T(a)=1. At the mass-one point b, S(b)=0<T(b)=1. Hence the failed strict pointwise inequality is fully consistent with the strict almost-sure order theorem [F2]. [step 1.1, F1, F2] ∎

## Source notes

Durrett §4.1 version convention, printed p.206. The local basic-properties theorem proves strict almost-sure preservation. The stable requested ID retains the Step-3-approved pointwise interpretation.
```

No repair or unresolved obligation for this item. Validation pending scoped final checks. Next action: next assigned item.

### Batch 4: `cex-taking-out-an-unbounded-factor-needs-integrability` — accepted

Claim/conventions: Under the AC conditional-class convention, omitting product integrability from the signed $L^1$ taking-out rule can leave its left side undefined even when both factors are integrable and the product of the factor with the conditional mean is zero.

Evidence: The weighted Dirac construction has S=1/7 and total mass 2 sum w_n=1. The absolute moments compute to E|X|=7/3 and E|Z|=7. Fibre cancellation is legitimate for integrable X and proves its conditional mean is zero. The signed product has positive and negative integrals each equal to the divergent sum of constants 1/(2S); hence it has no signed L1 conditional expectation although Z times the conditional mean is zero. This is exactly the stated omitted-product-integrability failure.

Dependency record: `deps: [thm-taking-out-what-is-known, def-conditional-expectation-as-an-ae-class, def-axiom-of-choice, def-integer-power, thm-geometric-series, def-probability-measure, def-dirac-measure, prop-dirac-measure-is-a-probability-measure, def-nonnegative-weighted-sum-of-measures, thm-nonnegative-weighted-sums-of-measures, thm-monotone-convergence-for-the-integral]`. Read current item and owning contract. Source metadata (not an independent retrieval claim):

```yaml
references:
    - title: "Durrett, Probability: Theory and Examples, 5th ed."
      url: https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf
---

## Statement refuted

Under the AC conditional-class convention, omitting product integrability from the signed $L^1$ taking-out rule can leave its left side undefined even when both factors are integrable and the product of the factor with the conditional mean is zero.

## Facts & Assumptions

**Given:** The proposed signed taking-out rule with product integrability omitted; a countable atomic witness will be constructed.

[F1] The Dirac set function is the indicator that the specified point belongs to an event. ([[def-dirac-measure]])

[F2] Each Dirac set function is a probability measure. ([[prop-dirac-measure-is-a-probability-measure]])

[F3] Countable nonnegative weighted sums are defined eventwise. ([[def-nonnegative-weighted-sum-of-measures]])

[F4] Nonnegative weighted sums of measures are measures. ([[thm-nonnegative-weighted-sums-of-measures]])

[F5] Integer powers at the positive base two are defined. ([[def-integer-power]])

[F6] For |r|<1 the geometric series from n=0 sums to 1/(1-r). ([[thm-geometric-series]])

[F7] A measure of total mass one is a probability measure. ([[def-probability-measure]])

[F8] The signed $L^1$ conditional expectation requires an integrable real input. ([[def-conditional-expectation-as-an-ae-class]])

[F9] The taking-out rule requires integrability of the input product. ([[thm-taking-out-what-is-known]])

[F10] Integrals on the countable atomic space are sums, by increasing partial sums for nonnegative functions. ([[thm-monotone-convergence-for-the-integral]])

## Counterexample

**Proof technique:** direct.

1.1 Let $\Omega=\mathbb N_{\ge1}\times\{-1,1\}$ with its power-set sigma-algebra. By [F5]–[F6], $S=\sum_{n\ge1}2^{-3n}=(1/8)/(1-1/8)=1/7$. Set $w_n=2^{-3n-1}/S$. These weights are positive finite numbers. [F5, F6]

2.1 Define $P=\sum_{n\ge1}w_n\delta_{(n,-1)}+\sum_{n\ge1}w_n\delta_{(n,1)}$. The Dirac probabilities [F1]–[F2] and weighted-sum construction [F3]–[F4] make this a measure on all subsets. Its mass is $2\sum_nw_n=S/S=1$, so [F7] makes it a probability measure. In particular each atom (n,s) has mass w_n. [step 1.1, F1, F2, F3, F4, F7]

3.1 Let $\mathcal G=\sigma((n,s)\mapsto n)$, $X(n,s)=s2^n$ and $Z(n,s)=2^{2n}$. Z is finite G-measurable, X is real measurable, and [F10] evaluates their absolute moments as sums. Using [F6], $E|X|=S^{-1}\sum_{n\ge1}2^{-2n}=7/3$ and $E|Z|=S^{-1}\sum_{n\ge1}2^{-n}=7$. Thus each is integrable. [step 1.1, step 2.1, F5, F6, F10]

4.1 Each G-event is a union of two-point fibres. On the nth fibre the X integral is $w_n(-2^n)+w_n2^n=0$; summing is legitimate by the finite absolute moment in step 3.1. Consequently the zero function has every defining event integral and is a version of $E[X\mid\mathcal G]$ by [F8]. Hence $ZE[X\mid\mathcal G]=0$ is integrable. [step 3.1, F8]

5.1 But $ZX(n,s)=s2^{3n}$. Its positive-part integral is $\sum_{n\ge1}w_n2^{3n}=\sum_{n\ge1}(2S)^{-1}=\infty$, and the negative-part integral has exactly the same value. These sums are nonnegative integrals by [F10]. Thus the signed expectation would require infinity minus infinity; ZX is not an $L^1$ input to [F8]. The left side $E[ZX\mid\mathcal G]$ of [F9] is undefined in that sense although the proposed right side is zero. This proves the failure when the product-integrability hypothesis is omitted. [step 2.1, step 4.1, F8, F9, F10] ∎

## Source notes

Durrett Theorem 4.1.14, printed pp.212–213, states the integrable-product hypothesis. The constructed atomic counterexample, its normalization and all moments are independently calculated here.
```

No repair or unresolved obligation for this item. Validation pending scoped final checks. Next action: next assigned item.

### Batch 4 page `standard-borel-real-codings-and-determining-classes` — accepted

The four reviewed items establish explicit Borel image coding, standard-Borel transport, finite-measure determination and Borel-subspace refinement in supplier-before-consumer order. The page accurately states AC, empty cases and the finite-measure restriction. Read full current page and all listed items. Exact dependencies, claims and conventions are recorded in preceding item reviews and owned manifest. No repairs, new suppliers or shared-plan amendments. Scoped checks pending. Next action: scoped validation and frontier evidence refresh.

### Batch 4 page `standard-borel-real-codings-and-determining-classes-examples` — accepted

All three examples are reviewed, and the page accurately describes their explicit complete presentations, rational trace sigma-algebra, dimension-zero and empty cases. It does not assert completeness of the inherited rational topology. Read full current page and all listed items. Exact dependencies, claims and conventions are recorded in preceding item reviews and owned manifest. No repairs, new suppliers or shared-plan amendments. Scoped checks pending. Next action: scoped validation and frontier evidence refresh.

### Batch 4 page `conditional-expectation` — accepted

All 22 A-page items are reviewed. The page orders version existence and uniqueness before classes, ordinary taking-out before conditional limits, countable supporting lines and convex powers before Jensen/contraction applications, and variance well-definedness before decomposition. Prose preserves AC, a.s. identities and incomplete-G measurability, and imports no kernel result. Read full current page and all listed items. Exact dependencies, claims and conventions are recorded in preceding item reviews and owned manifest. No repairs, new suppliers or shared-plan amendments. Scoped checks pending. Next action: scoped validation and frontier evidence refresh.

### Batch 4 page `conditional-expectation-examples` — accepted

All nine examples are reviewed. Finite/discrete fibre and prediction/variance calculations have their A-page suppliers. The prose correctly limits both null-atom counterexamples to pointwise versions and explicitly retains strict a.s. order. The final atomic example has both signed product parts infinite as claimed. Read full current page and all listed items. Exact dependencies, claims and conventions are recorded in preceding item reviews and owned manifest. No repairs, new suppliers or shared-plan amendments. Scoped checks pending. Next action: scoped validation and frontier evidence refresh.

## Completed dispatch 6b-a-3-4 — batches 3 and 4

Reviewed the authored arguments and pages, with their current manifest strategies, proof contracts, dependency interfaces and relevant boundary cases. Batch 3 has 60 accepted items and four accepted pages; batch 4 has 38 accepted items and four accepted pages. All 106 obligations have one `authored:<batch>:<id>` decision, the proper item/page route, specific evidence and empty defect references. The 33 pre-existing decisions outside these batches are preserved. No item or page mathematics was edited; no new local suppliers, withdrawals, repairs or escalations were needed. Consequently no repair-confidence or invented defect rows were added.

All 98 owning item contracts now contain specific completed risk reviews from the same mathematical read. Local verification completed successfully:

- Strict proof-contract checks: batch 3 60/60 and batch 4 38/38, zero errors or warnings.
- Risk checks with `--require-reviewed`: 60 and 38 items routed, zero errors.
- Scoped content-policy checks: 60 and 38 items, zero errors or warnings.
- Normative precheck over the 98 explicit owned item paths: 83 proof-bearing items checked, zero failures or canonical repairs requested.
- Renderer check over all 98 items and eight pages: 106 files passed YAML and KaTeX checks.
- Scoped integrity comparison: exact page inventory/order, manifest dependencies/justified_by/forward_refs, draft status, all 106 decision obligations, and 397 current supplier citation excerpts agree. The initial reading helper only recognized quoted YAML dependencies; its false batch-4 mismatch displays were helper limitations. The final comparison used the repository YAML parser and found zero mismatches.

These final results resolve the earlier per-item “validation pending” checkpoints. No reflow was necessary because no authored content changed. These are local checks and direct 6B dispositions, not independent judgments or full-frontier closure.

### Source evidence added by this dispatch

The detailed item entries above state checked claims and hypotheses. Additional complete passages read during this dispatch include Durrett Theorem 2.1.22 (printed p.54, PDF index 61, lines 3303–3354), including its coding caveat; Marker Lemmas 2.22–2.23 and Theorem 2.24 (printed pp.20–21, PDF indices 19–20, lines 1334–1393); Vienna Advanced Probability Lemma 5.26 and Theorems 5.27/5.29 (printed pp.64–66, lines 4873–5001); and van der Vaart Lemma 1.21 with proof (printed p.6, PDF index 11, lines 365–376). The last asserts uniform integrability for every conditioning of one fixed L1 input. Its tail-event proof agrees with the authored use of the conditional modulus inequality and absolute continuity of that fixed input integral. Earlier entries record the complete Durrett Etemadi/maximal-ergodic and van Gaans Prokhorov passages and their hypothesis checks. Local proof arguments supply the Borel image, nonclosed-atom realization, finite-level extended uniqueness and countable-support qualifications explicitly.

Source URLs: https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf ; https://www.math.uic.edu/~marker/math512/dst.pdf ; https://www.mat.univie.ac.at/~mathias/Advanced_Probability.pdf ; https://diamhomes.ewi.tudelft.nl/~avandervaart/books/stochint.pdf ; https://pub.math.leidenuniv.nl/~gaansowvan/jancol1.pdf . Source metadata quoted in individual item entries is distinguished there from independent retrieval.

### Frontier, published findings and serial-lead handoff

Updated the seven existing batch-3 consumer dependency records (one page and six item edges to batch 1) with the current 6B mathematical review, retaining their precise supplier statements and proof-step locations. The affected consumers are `strong-laws-of-large-numbers`, `lem-finite-probability-maximal-ergodic-inequality`, `thm-birkhoff-ergodic-probability-case-for-strong-laws`, and `cor-birkhoff-strong-law-for-iid-coordinate-shifts`. The six item edges use the measure-preserving definition, integral invariance, ergodicity definition and generating-pi-system preservation theorem as recorded. They remain changing-frontier inputs for the final cross-batch audit. Batch 4 has no cross-batch dependencies and its empty input remains valid. Atomically replaced the owned batch-3 input and refreshed the derived ledger through `tools/frontier-dependency-ledger.mjs`; the seven owned edges are reviewed/verified and have no orphaned owned reviews. No manual edit to the shared derived ledger or its instruction brief was made.

No new defective published item was found in the dependency interfaces examined, so no published-defect ledger mutation or lock was needed. Current published RN, Gaussian-integral, metric-product, embedding and G_delta interfaces were checked where used; this does not assert an exhaustive published-library audit. No shared-plan or Phase-2 amendment is required. No unresolved mathematical, source, workflow or owner-decision blocker remains for these assigned batches.

Next action belongs to the engine: join the remaining group/frontier work, bind current artifacts, and run the unchanged 6C/6D protocols. This dispatch did not judge, stamp, self-certify, dispatch another agent or alter scheduling/transitions.
