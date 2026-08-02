---
id: lem-rat-cut-embeds
kind: lemma
title: "The rational cuts embed densely as an ordered subfield"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-real-dedekind, def-dedekind-cut, def-cut-order, def-cut-addition, def-cut-multiplication, thm-rat-ordered-field]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: claude-opus-5
    verdict: certify
    date: 2026-08-02
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1 (Appendix: construction of ℝ)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "E. Landau, Foundations of Analysis"
      url: "https://bookstore.ams.org/chel-79"
    - title: "M. Girotti, Addendum — Construction of $\\mathbb{R}$ via Dedekind's method (MATH 317, Advanced Calculus of One Variable)"
      url: "https://mathemanu.github.io/ConstructionofR.pdf"
    - title: "Construction of the real numbers (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Construction_of_the_real_numbers"
    - title: "Math 331 course handout: Dedekind Cuts and Real Numbers (Hobart and William Smith Colleges)"
      url: "https://math.hws.edu/~mitchell/Math331S14/DedekindCutsHandOUt.pdf"
pipeline_run: null
---

## Statement

The rational embedding $q \mapsto q^{*}$, where $q^{*} = \{\, r \in \mathbb{Q} : r < q \,\}$
([[def-real-dedekind]]), is injective and order-preserving-and-reflecting,
$p < q \iff p^{*} \subsetneq q^{*}$, and a ring embedding:
$(p+q)^{*} = p^{*} + q^{*}$, $(pq)^{*} = p^{*} \cdot q^{*}$, $0 \mapsto 0^{*}$,
$1 \mapsto 1^{*}$. Moreover its image is **dense**: for cuts $A < B$ there is a
rational $q$ with $A < q^{*} < B$.

## Facts & Assumptions

**Given:** Rationals $p, q$, the embedding $q \mapsto q^{*} = \{\, r \in \mathbb{Q} : r < q \,\}$, and cuts $A, B$ ([[def-real-dedekind]]).

[L1] Cut structure: downward closure ($p \in A$, $q < p \Rightarrow q \in A$), the separation property ($a \in A$, $b \notin A \Rightarrow a < b$), and the absence of a greatest element ([[def-dedekind-cut]]), holding of every element of $\mathbb{R}$ ([[def-real-dedekind]]).

[L2] Order is inclusion: $A < B$ means $A \subsetneq B$ ([[def-cut-order]]).

[L3] Trichotomy, transitivity, and irreflexivity of the rational order ([[thm-rat-ordered-field]]).

[L4] Cut addition is the rational sumset $A + B = \{\, a + b : a \in A,\ b \in B \,\}$, the additive inverse is $-A = \{\, p \in \mathbb{Q} : \exists\, r > 0,\ -p - r \notin A \,\}$, and $0^{*} = \{\, q \in \mathbb{Q} : q < 0 \,\}$ is the additive identity of the embedding ([[def-cut-addition]]).

[L5] Cut multiplication: for $A, B > 0^{*}$, $A \cdot B = \{\, q \le 0 \,\} \cup \{\, ab : a \in A,\ b \in B,\ a > 0,\ b > 0 \,\}$; the sign rules $A \cdot B = 0^{*}$ when $A$ or $B$ is $0^{*}$, $A \cdot B = |A|\,|B|$ for equal signs and $A \cdot B = -(|A|\,|B|)$ for opposite signs; and $|A| = A$ for $A \ge 0^{*}$ else $|A| = -A$, with $1^{*} = \{\, r < 1 \,\}$ the multiplicative identity ([[def-cut-multiplication]]).

[L6] $\mathbb{Q}$ is an ordered field: rational addition and multiplication are commutative, associative, and distributive, the order is compatible ($a < b \Rightarrow a + c < b + c$; $0 < a$ and $0 < b \Rightarrow 0 < ab$; and multiplying $a < b$ by a positive preserves the order), and every pair $r < s$ has the strict midpoint $r < (r+s)/2 < s$ ([[thm-rat-ordered-field]]).

## Proof

**Proof technique:** direct.

1.1 Order preservation: if $p < q$ then $p^{*} \subsetneq q^{*}$. For $r \in p^{*}$ we have $r < p < q$, so $r \in q^{*}$, giving $p^{*} \subseteq q^{*}$; and $p \in q^{*}$ while $p \notin p^{*}$, so the inclusion is proper. [L3]

1.2 Order reflection: if $p^{*} \subsetneq q^{*}$ then $p < q$. Pick $r \in q^{*} \setminus p^{*}$; then $r < q$ and $\neg(r < p)$, so $p \le r < q$, whence $p < q$. [L3]

1.3 Unit identities: $0 \mapsto 0^{*}$ and $1 \mapsto 1^{*}$ hold because $0^{*} = \{\, r < 0 \,\}$ and $1^{*} = \{\, r < 1 \,\}$ are exactly the cuts named by the embedding at $0$ and $1$ and fixed as the additive and multiplicative identities. [L4, L5]

1.4 Additive identity, inclusion $p^{*} + q^{*} \subseteq (p+q)^{*}$: a typical element is $a + b$ with $a < p$ and $b < q$, and order compatibility of rational addition gives $a + b < p + q$, so $a + b \in (p+q)^{*}$. [L4, L6]

1.5 Additive identity, inclusion $(p+q)^{*} \subseteq p^{*} + q^{*}$: given $r < p + q$ set $d = (p + q - r)/2 > 0$, $a = p - d$, $b = q - d$; then $a < p$, $b < q$, and $a + b = (p + q) - 2d = r$, so $r = a + b \in p^{*} + q^{*}$. [L4, L6]

1.6 Nonnegative product, inclusion $p^{*} \cdot q^{*} \subseteq (pq)^{*}$ for $p, q > 0$: an element is either $\le 0$, hence in $(pq)^{*}$ since $pq > 0$, or $ab$ with $0 < a < p$ and $0 < b < q$, and then $ab < pb < pq$, so $ab \in (pq)^{*}$. [L5, L6]

1.7 Nonnegative product, inclusion $(pq)^{*} \subseteq p^{*} \cdot q^{*}$ for $p, q > 0$: take $r < pq$; if $r \le 0$ it lies in the $\{\, q \le 0 \,\}$ clause, and if $r > 0$ then $r/q < p$, so the strict midpoint $a = (r/q + p)/2$ satisfies $r/q < a < p$, and $b = r/a$ gives $0 < a < p$ and $0 < b < q$ (as $a > r/q > 0$ yields $b = r/a < q$), with $ab = r \in p^{*} \cdot q^{*}$. [L5, L6, choose]

1.8 Density setup: let $A < B$, i.e. $A \subsetneq B$; choose $x \in B \setminus A$, and since $B$ has no greatest element choose $y \in B$ with $y > x$. [L1, L2, choose]

1.9 Negation identity $-(p^{*}) = (-p)^{*}$: by the negation definition $-(p^{*}) = \{\, r : \exists\, t > 0,\ -r - t \notin p^{*} \,\} = \{\, r : \exists\, t > 0,\ -r - t \ge p \,\} = \{\, r : \exists\, t > 0,\ r \le -p - t \,\} = \{\, r : r < -p \,\} = (-p)^{*}$, where $-r - t \notin p^{*}$ gives $-r - t \ge p$ by trichotomy and $t = -p - r > 0$ witnesses the last equality. [L4, L3, L6]

2.1 Additive identity: combining the two inclusions, $(p+q)^{*} = p^{*} + q^{*}$. [step 1.4, step 1.5]

2.2 Nonnegative multiplicative identity: for $p, q > 0$ the two inclusions give $(pq)^{*} = p^{*} \cdot q^{*}$, while if $p = 0$ or $q = 0$ then $pq = 0$ and the sign rule $0^{*} \cdot B = 0^{*}$ gives $(pq)^{*} = 0^{*} = p^{*} \cdot q^{*}$; hence $(pq)^{*} = p^{*} \cdot q^{*}$ for all $p, q \ge 0$. [step 1.6, step 1.7, L5]

2.3 Injectivity: if $p^{*} = q^{*}$ then neither $p^{*} \subsetneq q^{*}$ nor $q^{*} \subsetneq p^{*}$, so by reflection $\neg(p < q)$ and $\neg(q < p)$; trichotomy forces $p = q$. [step 1.2, L3]

2.4 Combining preservation and reflection, $p < q \iff p^{*} \subsetneq q^{*}$, that is $p < q \iff p^{*} < q^{*}$: the embedding preserves and reflects order. [step 1.1, step 1.2, L2]

2.5 $A < y^{*}$: for $a \in A$, separation gives $a < x$ (as $x \notin A$) and $x < y$, so $a < y$ and $a \in y^{*}$, whence $A \subseteq y^{*}$; and $x \in y^{*}$ (since $x < y$) while $x \notin A$, so the inclusion is proper, $A \subsetneq y^{*}$. [step 1.8, L1, L2, L3]

2.6 $y^{*} < B$: for $r \in y^{*}$, $r < y$ and $y \in B$, so downward closure gives $r \in B$, whence $y^{*} \subseteq B$; and $y \in B$ while $y \notin y^{*}$, so $y^{*} \subsetneq B$. [step 1.8, L1, L2]

2.7 Absolute value identity $|p^{*}| = |p|^{*}$: since $0^{*} \subseteq p^{*} \iff$ every $r < 0$ satisfies $r < p \iff p \ge 0$, we have $p \ge 0 \iff p^{*} \ge 0^{*}$; if $p \ge 0$ then $|p^{*}| = p^{*} = |p|^{*}$, while if $p < 0$ then $p^{*} < 0^{*}$, so $|p^{*}| = -(p^{*}) = (-p)^{*} = |p|^{*}$ using $-(p^{*}) = (-p)^{*}$ and $|p| = -p$. [step 1.9, L2, L3, L5]

3.1 Multiplicative identity for all signs: the sign rules give $p^{*} \cdot q^{*} = \pm(|p^{*}| \cdot |q^{*}|)$, and $|p^{*}| \cdot |q^{*}| = |p|^{*} \cdot |q|^{*} = (|p|\,|q|)^{*}$ by the absolute-value identity and the nonnegative case; when $p, q$ share a sign $pq \ge 0$ and $|p|\,|q| = pq$, so $p^{*} \cdot q^{*} = (pq)^{*}$, and when they have opposite signs $pq < 0$, $|p|\,|q| = -pq$, and $-\bigl((-pq)^{*}\bigr) = (pq)^{*}$ by the negation identity, so again $p^{*} \cdot q^{*} = (pq)^{*}$ (the $p = 0$ or $q = 0$ case being step 2.2); hence $(pq)^{*} = p^{*} \cdot q^{*}$ for all $p, q$. [step 2.2, step 2.7, step 1.9, L5]

4.1 Taking $q = y$ yields $A < q^{*} < B$, so the image is dense; with injectivity, order preservation/reflection, and the ring identities $(p+q)^{*} = p^{*} + q^{*}$, $(pq)^{*} = p^{*} \cdot q^{*}$, $0 \mapsto 0^{*}$, $1 \mapsto 1^{*}$, the map $q \mapsto q^{*}$ is a dense embedding of ordered fields. [step 2.1, step 3.1, step 1.3, step 2.3, step 2.4, step 2.5, step 2.6] ∎
