---
id: prop-ringel-map-is-well-defined-and-has-composition-image
kind: proposition
title: "The Ringel assignment is a bialgebra homomorphism onto the extended composition subalgebra"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 11
deps:
  - def-quiver-hall-positive-borel
  - lem-hall-and-dj-borel-conventions-are-isomorphic
  - lem-finite-loopless-quiver-nilpotent-category-is-hereditary-finitary
  - lem-finite-acyclic-quiver-hall-category-is-hereditary-finitary
  - def-euler-twisted-hall-algebra
  - def-extended-hall-algebra-and-composition-subalgebra
  - lem-extended-hall-torus-action-is-well-defined
  - cor-extended-green-hall-bialgebra
  - lem-symmetric-gaussian-alternating-sum-vanishes
  - def-quantum-integers-factorials-and-divided-powers-at-q-i
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Olivier Schiffmann, Lectures on Hall Algebras, arXiv:math/0611617v2"
      url: "https://arxiv.org/pdf/math/0611617v2"
      locator: "§3.3, Theorem 3.16 and its full simple-generator Serre calculation, PDF pp. 39–40. The local proof below supplies the flag count and specialization details."
    - title: "Claus Michael Ringel, The Hall Algebra Approach to Quantum Groups, E.L.A.M. Lectures (1993)"
      url: "https://www.math.uni-bielefeld.de/~ringel/opus/elam.pdf"
      locator: "§§3–4: the simple-generator Serre calculation and the Ringel map."
    - title: "Claus Michael Ringel, Hall algebras and quantum groups, Inventiones Mathematicae 101 (1990), 583–591"
      url: "https://noah.nrw/ubbihs/download/pdf/5112433"
      locator: "§§2–3: the Hall realization of the positive quantum Borel."
verification:
  precheck: pending
---

## Statement

For a finite loopless quiver $Q$ over $\mathbb F_q$, using nilpotent
finite-dimensional representations when $Q$ has oriented cycles, the
assignment
$$ E_i\longmapsto[S_i],\qquad K_i^{\pm1}\longmapsto k_{\pm e_i} $$
defines a surjective bialgebra homomorphism from the extended positive Borel
of [[def-quiver-hall-positive-borel]] onto the extended composition
subalgebra of [[def-extended-hall-algebra-and-composition-subalgebra]]. The
claim does not include injectivity.

## Facts & Assumptions

**Given:** A finite loopless quiver $Q$, $k=\mathbb F_q$, and
$\nu=\sqrt q>1$.

[F1] For the selected representation category, the simple objects are $S_i$,
$K_0\cong\mathbb Z^{Q_0}$, and
$\dim\operatorname{YExt}^1(S_i,S_j)=c_{ij}$; the Euler values are
$\langle S_i,S_j\rangle=\delta_{ij}-c_{ij}$ and
$(S_i,S_j)=a_{ij}$. For acyclic $Q$ this is proved in
[[lem-finite-acyclic-quiver-hall-category-is-hereditary-finitary]]. For
oriented cycles, the hereditary clause is currently an unresolved supplier
check in [[lem-finite-loopless-quiver-nilpotent-category-is-hereditary-finitary]].

[F2] Hall products count subobjects in exact sequences
$0\to N\to L\to M\to0$ and the Euler-twisted scalar is
$\nu^{\langle M,N\rangle}$
([[def-euler-twisted-hall-algebra]]).

[F3] The extended torus acts by
$k_\alpha[M]k_\alpha^{-1}=\nu^{(\alpha,[M])}[M]$
([[lem-extended-hall-torus-action-is-well-defined]]).

[F4] The DJ-compatible extended Green coproduct agrees on simple and torus
generators with the Borel coproduct formulas
([[lem-hall-and-dj-borel-conventions-are-isomorphic]],
[[cor-extended-green-hall-bialgebra]]).

[F5] The symmetric Gaussian alternating sum vanishes under the stated parity
and range conditions
([[lem-symmetric-gaussian-alternating-sum-vanishes]]).

[F6] Quantum divided powers use
$x^{(n)}=x^n/[n]_\nu!$ with nonzero factorials at $\nu>1$
([[def-quantum-integers-factorials-and-divided-powers-at-q-i]]).

## Proof



**Proof technique:** verify the generator relations by a local flag count.

1.1 The torus generators map to commuting group-like elements with inverse $k_{-e_i}$. By [F3], $k_{e_i}[S_j]k_{-e_i}=\nu^{(e_i,e_j)}[S_j] =\nu^{a_{ij}}[S_j]$, which is the Cartan action relation in the Borel presentation. [F1, F3, given, algebra]

1.2 Fix $i\ne j$, and put $r=c_{ij}$, $s=c_{ji}$, $t=r+s=-a_{ij}$ and $m=t+1$. The ordinary Serre relation in [F2] is equivalent to the divided-power form $\sum_{\ell=0}^{m}(-1)^\ell [S_i]^{(\ell)}\star[S_j]\star[S_i]^{(m-\ell)}=0:$ multiply this expression by $[m]_\nu!$, reindex $r=m-\ell$, use $\binom{m}{\ell}_\nu=\binom{m}{r}_\nu$, and note that the two sign conventions differ by the common factor $(-1)^m$. [F2, F6, algebra]

1.3 Since there are no loops, every extension of $S_i$ by $S_i$ splits. For $\ell\ge0$, the coefficient of $[S_i^{\oplus\ell}]$ in the $\ell$-fold Hall product counts complete flags in $\mathbb F_q^\ell$, namely $[\ell]_q!$, and the iterated Euler twist is $\nu^{\ell(\ell-1)/2}$. The identity $[j]_q=\nu^{j-1}[j]_\nu$ gives $[S_i]^\ell=\nu^{\ell(\ell-1)}[\ell]_\nu![S_i^{\oplus\ell}], \qquad [S_i]^{(\ell)}=\nu^{\ell(\ell-1)}[S_i^{\oplus\ell}].$ The same formula holds for $n=m-\ell$. [F1, F2, F6, construct]

1.4 Consider a representation $M$ of dimension $m e_i+e_j$, so $M_j$ is one-dimensional. Define $U_M=\bigcap_{a:i\to j}\ker(x_a:M_i\to M_j), \qquad V_M=\sum_{b:j\to i}\operatorname{im}(x_b:M_j\to M_i),$ and let $u=\dim U_M$, $w=\dim V_M$. Every composition $M_j\xrightarrow{x_b}M_i\xrightarrow{x_a}M_j$ is nilpotent and acts on a one-dimensional space, hence is zero. Therefore $V_M\subseteq U_M$. A flag with successive layers $S_i^{\oplus n},S_j,S_i^{\oplus(m-n)}$ is specified by a subspace $W\subseteq M_i$ of dimension $n$ with $V_M\subseteq W\subseteq U_M$: the first inclusion makes the intermediate object a subrepresentation, and the second makes the bottom object a subrepresentation. Thus the number of such flags is zero unless $V_M\subseteq U_M$, and otherwise it is $\#\operatorname{Gr}(n-w,u-w)_{q}$. [F1, F2, construct]

2.1 The flag count for the three Hall factors, together with the twist $\langle\ell e_i,e_j\rangle=-\ell r$, $\langle\ell e_i+e_j,n e_i\rangle=n(\ell-s)$ and the two divided-power scalars from step 1.3, shows that the coefficient of $[M]$ in $[S_i]^{(\ell)}\star[S_j]\star[S_i]^{(n)}$ is zero unless $V_M\subseteq U_M$, and otherwise equals $\nu^{-ns-\ell r+n\ell+\ell(\ell-1)+n(n-1)} \#\operatorname{Gr}(n-w, u-w)_q.$ This is obtained by first choosing the bottom subspace $W$, then using the exact-sequence Hall coefficients for the middle and top quotients; the displayed pairings are the only cross terms between the three graded layers. [F1, F2, step 1.3, step 1.4, algebra]

3.1 For $a=u-w$ and $b=n-w$, counting ordered linearly independent $b$-tuples and dividing by $|\operatorname{GL}_b(\mathbb F_q)|$ gives $\#\operatorname{Gr}(b, a)_q =\prod_{j=0}^{b-1}\frac{q^a-q^j}{q^b-q^j} =\nu^{b(a-b)}\binom{a}{b}_\nu.$ The second equality follows from the factorial definitions in [F6] and $q=\nu^2$. Hence the coefficient in step 2.1 can be written $\nu^{-ns-\ell r+n\ell+\ell(\ell-1)+n(n-1)+(u-n)(n-w)} \binom{u-w}{n-w}_\nu.$ [F6, step 2.1, algebra]

4.1 Put $\ell=m-n$ and $d=2s+1-u-w$. Expanding the exponent in step 3.1 and using $m=r+s+1$ gives $-ns-\ell r+n\ell+\ell(\ell-1)+n(n-1)+(u-n)(n-w) =ms-uw-dn.$ Thus the coefficient of $[M]$ in the divided Serre sum of step 1.2 is zero if $V_M\nsubseteq U_M$, and otherwise equals $\nu^{ms-uw}(-1)^{m-w}\nu^{-dw} \sum_{k=0}^{u-w}(-1)^k\nu^{-dk}\binom{u-w}{k}_\nu.$ Here $k=n-w$; Gaussian coefficients outside $0\le n-w\le u-w$ vanish. [step 1.2, step 3.1, algebra]

5.1 There are $r$ maps from the $m$-dimensional $M_i$ to the one-dimensional $M_j$, so $u\ge m-r=s+1$. There are $s$ reverse-arrow images, each of dimension at most one, so $w\le s$. Hence $u-w\ge1$ and $d-(1-(u-w))=2(s-w)\ge0, \qquad (u-w-1)-d=2(u-s-1)\ge0,$ while $d-(u-w-1)=2(s+1-u)$ is even. Therefore $d$ satisfies the range and parity hypotheses of [F5] with $m$ there replaced by $u-w$. The preceding Gaussian sum vanishes. Every degree-$(m e_i+e_j)$ object has zero coefficient, so the divided Serre relation holds in the Hall algebra. [F1, F5, step 4.1, given, algebra]

6.1 Step 1.1 verifies the torus action, and step 5.1 proves every quantum Serre relation; the Borel presentation [F2] therefore gives an algebra homomorphism with the stated images. By [F4], it intertwines coproducts and counits on generators; since both coproducts are algebra maps, it intertwines them on every product. Its image is the subalgebra generated by the simple classes and torus, which is the extended composition subalgebra by definition. [F2, F4, step 1.1, step 5.1, algebra] ∎

## Readiness note

For acyclic $Q$, [F1] is supplied by
[[lem-finite-acyclic-quiver-hall-category-is-hereditary-finitary]]. For
oriented cycles it depends on the unresolved hereditary proof in
[[lem-finite-loopless-quiver-nilpotent-category-is-hereditary-finitary]];
the proof above is drafted against that declared interface, but this item is
not ready for approval until that cyclic supplier is checked.
