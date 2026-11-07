---
dependency_level: 2
id: lem-mobius-phase-pair-integral-and-cf-l2-bound
kind: lemma
title: "Möbius phase-pair integral and continued-fraction L2 bound"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
provenance:
  statement: literature-derived
  proof: ai-generated
deps:
  - lem-reversal-invariant-cf-block-frostman-measure
  - lem-finite-alphabet-cf-cylinder-pressure-and-separation
  - lem-complex-integration-by-parts-on-intervals-and-decaying-lines
  - def-countable-choice
proof_strategy: direct
sources:
  references:
    - title: "Queffélec–Ramaré, Analyse de Fourier des fractions continues à quotients restreints"
      url: "https://ramare-olivier.github.io/Maths/kaufmanbis.pdf"
      locator: "§§4–6, pair kernels and Lebesgue L2 estimate; uniform loss20 is used here"
---

## Statement

Assume Countable Choice and let $\mu,\rho_k,J=kJ_0,\sigma,N$ be the measure and prefix laws of the reversal-invariant block construction, with integer $k\ge1$, $1/2<d<1$ and $0<\epsilon<1/100$. Put $Q=e^{J\sigma}$, and for $u\ge1$ define
$$F(t)=\sum_w\rho_k(w)e\left(u\frac{p_w+tp'_w}{q_w+tq'_w}\right),\qquad e(x)=e^{2\pi ix}.$$
Then $|F|\le1$, $|F'|\le C uQ^{-2+4\epsilon}$ on $[0,1]$, and
$$\int_0^1|F(t)|^2\,dt\le C\{Q^{1+20\epsilon}/\sqrt u+Q^{-2d+20\epsilon}\}.$$
The constant depends on the fixed construction, not on $k,u$. For two distinct prefixes, with $H=\max(|q-q^*|,|q'-(q^*)'|)\ge1$, their pair kernel has modulus at most $\min(1,CQ^{3/2+15\epsilon}/\sqrt{uH})$.

## Statement references

[Queffélec–Ramaré, §§4–6](https://ramare-olivier.github.io/Maths/kaufmanbis.pdf) — oscillatory pair integrals and the Fourier-measure L2 argument.

## Facts & Assumptions

**Given:** Countable Choice and the fixed block measure and parameters in the Statement.

[F1] At length $J$, the prefix law is reversal invariant, its denominators lie between $Q^{1-2\epsilon}$ and $Q^{1+2\epsilon}$, its prefix masses are at most $Cq^{-2d}$, and its independent tail has a Frostman-$d$ law. Reversal preserves $q$ and exchanges $p,q'$. [[lem-reversal-invariant-cf-block-frostman-measure]], [[lem-finite-alphabet-cf-cylinder-pressure-and-separation]]

[F2] Integration by parts on finite intervals applies to complex $C^1$ amplitudes and smooth real exponential phases. [[lem-complex-integration-by-parts-on-intervals-and-decaying-lines]]

[A1] Countable Choice is assumed for the conditional Lie, integration, measure or dimension suppliers actually invoked below. No stronger Choice axiom is adopted. [[def-countable-choice]]

## Proof

**Proof technique:** direct reciprocal-derivative integration and a dyadic denominator-pair sum.

1.1 The determinant of every fixed-length convergent matrix has the same sign, so $T'_w(t)$ has that sign times $(q_w+tq'_w)^{-2}$. F1 and finite summation give $|F|\le1$ and $|F'|\le2\pi uQ^{-2+4\epsilon}$. For two prefixes put $\alpha=q'-(q^*)'$, $\beta=q-q^*$, $A=q+tq'$, $B=q^*+t(q^*)'$. Their phase difference has derivative, up to sign, $u(\beta+\alpha t)g(t)$, where $g=(A+B)/(A^2B^2)$. On $[0,1]$ one has $g\ge cQ^{-3-10\epsilon}$ and $g+|g'|\le C Q^{-3+10\epsilon}$: use $Q^{1-2\epsilon}\le A,B\le2Q^{1+2\epsilon}$ and write $g=1/(AB^2)+1/(A^2B)$ before differentiating. [F1, given, algebra]

1.2 If a real $C^2$ phase $f$ satisfies $|f'|\ge a>0$, $|f''|\le b$ on an interval of length at most1, integration of $e(f)/(2\pi if')$ by parts gives $|\int e(f)|\le C(a^{-1}+ba^{-2})$. For a phase with $f'=(\alpha_0t+\beta_0)g(t)$, $g\ge a>0$, $|g'|\le b$ and $b\ge a$, remove the interval $|\alpha_0t+\beta_0|\le h$, whose length is at most $2h/|\alpha_0|$. On the at most two remaining intervals, the derivative of $1/f'$ has modulus at most $b/[a^2|\alpha_0t+\beta_0|]+|\alpha_0|/[a|\alpha_0t+\beta_0|^2]$. Its integral is at most $b/(a^2h)+2/(ah)$; the endpoint terms have size at most $C/(ah)$. Thus $|\int e(f)|\le2h/|\alpha_0|+Cb/(a^2h)$. Taking $h=\sqrt{b|\alpha_0|}/a$ gives the bound $C\sqrt b/(a\sqrt{|\alpha_0|})$, with the trivial bound1 available throughout. [F2, algebra, A1]

1.3 The case $H=0$ is exactly the diagonal. Indeed $q'/q=[0;a_J,\ldots,a_1]$. A rational has at most two positive finite continued-fraction expansions: the Euclidean floor algorithm forces every digit until its terminal integer, which may either be left intact or replaced by its predecessor followed by1. Those two lengths differ by one. Thus a fixed length and a fixed rational $q'/q$ determine the word. Since all present words have length $J$, equality of $(q,q')$ forces equality of prefixes. Its diagonal pair probability is at most the largest prefix mass, hence at most $CQ^{-2d+4d\epsilon}$ by F1. [F1, algebra]

1.4 For independent prefixes of law $\rho_k$, reversal of both words converts the event $|q-q^*|,|q'-(q^*)'|\le H$ into $|q-q^*|,|p-p^*|\le H$ without changing its probability. The latter implies $|p/q-p^*/q^*|\le2H Q^{-1+2\epsilon}$. Each actual support point of a prefix differs from its convergent by at most $q^{-2}\le Q^{-2+4\epsilon}$. For $H\ge1$ this error is at most $H Q^{-1+2\epsilon}$. For each fixed first prefix all qualifying second-prefix cylinders therefore lie inside one interval of length at most $C H Q^{-1+2\epsilon}$ about its convergent. Summing their masses and using the Frostman bound gives pair probability at most $C H^dQ^{-d+2d\epsilon}$, with the trivial probability bound1 if this interval exceeds unit length. This argument uses the full cylinder masses, not a false continuous bound on the finite atomic prefix law. [F1, algebra]

2.1 If $|\beta|\le2|\alpha|$ and $H>0$, then $|\alpha|\ge H/2$; apply the second estimate with $\alpha_0=u\alpha$ and the bounds in step 1.1 to get $CQ^{3/2+15\epsilon}/\sqrt{uH}$. If $|\beta|>2|\alpha|$, the linear factor has modulus at least $H/2$, and step 1.1 gives $|f'|\ge c uH Q^{-3-10\epsilon}$ and $|f''|\le C uH Q^{-3+10\epsilon}$. The first estimate gives $CQ^{3+30\epsilon}/(uH)$. Taking the smaller of this and1, and using $\min(1,X)\le\sqrt X$, proves the same asserted square-root bound. This includes $\alpha=0$ and stationary points inside or outside the interval. [step 1.1, step 1.2, algebra]

3.1 Expand $\int|F|^2$ as the finite pair sum. Use step 1.3 for the diagonal and step 2.1 on dyadic ranges $h\le H<2h$. For $h\le Q$, step 1.4 bounds the pair probability by $C h^dQ^{-d+2d\epsilon}$, so summation gives at most $C Q^{3/2+15\epsilon}Q^{-d+2d\epsilon}Q^{d-1/2}/\sqrt u$, because $d>1/2$ makes $\sum_{2^j\le Q}2^{j(d-1/2)}\le C_dQ^{d-1/2}$. For $h>Q$ use probability1 and sum the geometric kernel bound, giving at most $CQ^{1+15\epsilon}/\sqrt u$. Adding the diagonal proves the displayed estimate, since $15+2d\le20$ and $4d\le20$. [step 2.1, step 1.3, step 1.4, algebra] ∎

