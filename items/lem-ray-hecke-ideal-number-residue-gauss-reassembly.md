---
dependency_level: 10
id: lem-ray-hecke-ideal-number-residue-gauss-reassembly
kind: lemma
title: Ideal-number residue cosets and the primitive Hecke Gauss scalar
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
- def-finite-order-ray-class-hecke-character-and-l-function
- lem-ray-class-character-finite-part-decomposition
- lem-primitive-ray-class-character-gauss-sum
- thm-finiteness-of-the-number-field-class-group
- thm-fundamental-theorem-of-finite-abelian-groups-invariant-factor-form
- thm-fundamental-theorem-of-algebra-minimum-modulus-proof
- thm-ray-class-exact-sequence
- thm-number-field-integral-ideal-factorisation-in-zf
- thm-chinese-remainder-theorem-for-comaximal-ideals
- thm-principal-ideal-norm-is-absolute-field-norm
- thm-ideal-norm-is-multiplicative
- lem-trace-dual-of-a-fractional-ideal
- def-different-of-a-number-field
- def-axiom-of-choice
- def-countable-choice
justified_by: []
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
axiom_use: Assume AC and Countable Choice. Choice is inherited from the actual number-field, unit, lattice
  and integration suppliers; no cited external theorem is imported.
sources:
  references:
  - title: Jürgen Neukirch, Algebraic Number Theory, Chapter VII
    url: https://web.math.ucsb.edu/~agboola/teaching/2021/fall/225A/neukirch.pdf
    locator: §7, Proposition7.1 through Proposition7.5, printed484–488; full local finite-order specialization
      below.
---

## Statement

Assume AC and Countable Choice. Let $K$, $\mathfrak m_0$, a primitive finite-order ray character $\chi$, its finite component $\chi_f$ and real parities $\epsilon_i$ be as in the Hecke-character definition. Put $e=\sum_i\epsilon_i$ and $\mathfrak D=\mathfrak D_K$. There is a group $E$ of nonzero complex archimedean tuples containing the embedded $K^\times$, and a surjective homomorphism $q:E\to J_K$ to the fractional ideal group, with $q(\alpha)=(\alpha)$ and kernel $\mathcal O_K^\times$. Its complex-pair coordinates are conjugate, its real-place coordinates may be complex, and
$$\prod_{i\text{ real}}|a_i|\prod_{j\text{ complex}}|a_j|^2=Nq(a).$$
For a fractional ideal, extend $N$ multiplicatively by its finite prime factorization; equivalently $N\mathfrak a=N(c\mathfrak a)/|N_{K/\mathbb Q}(c)|$ after clearing a nonzero integer denominator. The integral multiplicative norm laws make this independent of the denominator.

Choose $M,D\in E$ with $q(M)=\mathfrak m_0$, $q(D)=\mathfrak D$, taking $M=1$ if $\mathfrak m_0=\mathcal O_K$. Set $A_i=|(MD)_i|$ and $\phi(a)=\prod_{i\text{ real}}(a_i/|a_i|)^{\epsilon_i}$. On elements whose ideals are prime to $\mathfrak m_0$, put $\psi_\chi(a)=\chi(q(a))/\phi(a)$.

Integral ideal numbers prime to $\mathfrak m_0$, identified when their ratio is in $K^\times$ and congruent to $1$ at the finite modulus, form a finite abelian group $G_{\mathfrak m_0}$, with exact sequence
$$1\longrightarrow(\mathcal O_K/\mathfrak m_0)^\times\longrightarrow G_{\mathfrak m_0}\longrightarrow\operatorname{Cl}(\mathcal O_K)\longrightarrow1.$$
The function $\psi_\chi$ descends to this group and restricts to $\chi_f$ on its left subgroup. For a nonzero integral $b\in E$, let $T_\chi(b)$ be the finite sum
$$T_\chi(b)=\sum_{\substack{a\in G_{\mathfrak m_0}\\[q(a)]=[\mathfrak m_0\mathfrak D][q(b)]^{-1}}}\psi_\chi(a)\exp\!\left(2\pi i\operatorname{Tr}_{K/\mathbb Q}\frac{ab}{MD}\right).$$
The quotient inside the trace belongs to $K$. This sum is well-defined, and, writing $\tau_\chi=T_\chi(1)$,
$$T_\chi(b)=\begin{cases}\overline{\psi_\chi(b)}\tau_\chi,&(q(b),\mathfrak m_0)=1,\\0,&(q(b),\mathfrak m_0)\ne1,\end{cases}\qquad |\tau_\chi|=\sqrt{N\mathfrak m_0}.$$
For the conjugate character use its same parities to define $\psi_{\bar\chi}$, not the pointwise conjugate of $\psi_\chi$. Then
$$\tau_\chi\tau_{\bar\chi}=(-1)^e\phi(MD)^{-2}N\mathfrak m_0.$$
All assertions include $\mathfrak m_0=\mathcal O_K$ and the trivial ideal class group.

## Facts & Assumptions

**Given:** The data and choice assumptions in the Statement.

[F1] The ordinary class group is finite and is a finite product of cyclic groups. [[thm-finiteness-of-the-number-field-class-group]] [[thm-fundamental-theorem-of-finite-abelian-groups-invariant-factor-form]]

[F2] Every nonconstant complex polynomial has a root. [[thm-fundamental-theorem-of-algebra-minimum-modulus-proof]]

[F3] Ideal factorization is unique; ideal norms multiply and the norm of $(\alpha)$ is the absolute field norm. CRT holds for comaximal ideals. [[thm-number-field-integral-ideal-factorisation-in-zf]] [[thm-principal-ideal-norm-is-absolute-field-norm]] [[thm-ideal-norm-is-multiplicative]] [[thm-chinese-remainder-theorem-for-comaximal-ideals]]

[F4] Every ordinary class has a representative prime to the finite modulus; the finite/sign decomposition gives $\chi((\alpha))=\chi_f(\alpha)\phi(\alpha)$ and makes $\chi_f$ primitive. [[thm-ray-class-exact-sequence]] [[lem-ray-class-character-finite-part-decomposition]] [[def-finite-order-ray-class-hecke-character-and-l-function]]

[F5] Primitive finite Gauss sums have the stated unit scaling, vanish under nonunit scaling and have absolute value $\sqrt{N\mathfrak m_0}$ at primitive trace frequencies. The trace dual of $\mathcal O_K$ is $\mathfrak D^{-1}$. [[lem-primitive-ray-class-character-gauss-sum]] [[lem-trace-dual-of-a-fractional-ideal]] [[def-different-of-a-number-field]]

[A1] The stated AC/CC branch is retained. [[def-axiom-of-choice]] [[def-countable-choice]]

## Proof

1.1 Choose cyclic class generators $[\mathfrak b_j]$ of orders $h_j$ by [F1], with $\mathfrak b_j^{h_j}=(\beta_j)$. For each embedding choose an $h_j$th root $B_{j,i}$ of the corresponding image of $\beta_j$ by [F2]; for a complex pair choose conjugate roots, and at a real place allow a complex root. Let $E$ be the group generated by embedded $K^\times$ and these finitely many tuples $B_j$. Define $q(\alpha\prod_jB_j^{v_j})=(\alpha)\prod_j\mathfrak b_j^{v_j}$. If an expression represents the tuple $1$, raise it to a common multiple $H$ of all $h_j$. Its proposed ideal has $H$th power $(1)$, so unique ideal factorization [F3] makes that ideal $(1)$. Thus $q$ is well-defined. Reducing the exponents modulo $h_j$, independence of the cyclic class generators shows that its kernel consists of actual $K^\times$ with principal ideal $(1)$, exactly the units. The same reduction shows $E/K^\times\cong\operatorname{Cl}(\mathcal O_K)$ and surjectivity onto $J_K$. The asserted absolute norm identity holds on $K^\times$ by [F3] and on each $B_j$ after taking its positive $h_j$th power, hence everywhere. Empty class-generator lists cause no exception. [A1, F1, F2, F3, algebra, choose]

2.1 An element of $K$ integral at the primes of $\mathfrak m_0$ has a well-defined residue modulo $\mathfrak m_0$: its denominator ideal has no such prime factor, so CRT supplies $c$ in that denominator ideal with $c\equiv1\pmod{\mathfrak m_0}$, and $c\alpha\in\mathcal O_K$ represents the residue. This also clears denominators in a fractional ideal prime to $\mathfrak m_0$, retaining its class and prime-to-modulus property. Thus the representatives in [F4] may be integral. In a fixed ordinary class choose an integral ideal number $a_0$ prime to $\mathfrak m_0$. Every other such number is $a_0\alpha$ with $\alpha\in K^\times$ a local unit at that modulus; its congruence class is exactly the unit residue of $\alpha$. Conversely each unit residue is attained by an actual integral $\alpha$ prime to $\mathfrak m_0$. Thus every class fiber is a torsor for $(\mathcal O_K/\mathfrak m_0)^\times$. Products respect congruence. For an integral $a$ prime to the modulus, CRT gives $x\in q(a)$ with $x\equiv1\pmod{\mathfrak m_0}$; then $x/a$ is integral prime to the modulus and is inverse to $a$ in the congruence quotient. This proves the finite group and its exact sequence. [F3, F4, step 1.1, algebra, choose]

3.1 On $K^\times$ prime to the modulus, [F4] gives $\psi_\chi=\chi_f$. Hence $\psi_\chi$ is unchanged when an ideal number is multiplied by an actual scalar congruent to $1$ modulo $\mathfrak m_0$, proving descent. All its values have modulus one. For the summation fiber in $T_\chi(b)$, the product $ab/(MD)$ lies in $K^\times$ by step 1.1. For two integral representatives $a,a'=(1+c)a$ of the same congruence class, the difference $a'-a=ac$ is again an integral ideal number: in a fixed class write both as $a_0\alpha$ with $\alpha\in q(a_0)^{-1}$, an additive fractional ideal. At the primes of $\mathfrak m_0$ its valuations are at least those of $\mathfrak m_0$, because $q(a)$ is prime to the modulus and $c$ lies in the local modulus. Thus $q(ac)\subseteq\mathfrak m_0$ globally. Since $b$ is integral, $acb/(MD)\in\mathfrak D^{-1}$, so its trace is an integer by [F5]. This proves phase independence; representatives are integral throughout the finite quotient, while local fractional scalars are cleared as in step 2.1. [F4, F5, step 1.1, step 2.1, algebra]

4.1 If $q(b)$ is prime to $\mathfrak m_0$, multiplication by its congruence class bijects the summation fiber onto the fiber of $[\mathfrak m_0\mathfrak D]$. Substituting $a\mapsto ab$ therefore gives $T_\chi(b)=\psi_\chi(b)^{-1}\tau_\chi$. For the magnitude choose an integral $a_0$ prime to the modulus in that latter class. Then $y=a_0/(MD)\in K$, $(y)\mathfrak m_0\mathfrak D=q(a_0)$ is integral prime to $\mathfrak m_0$, and step 2.1 rewrites $\tau_\chi$ as $\psi_\chi(a_0)\tau_{\mathfrak m_0}(\chi_f,y)$. Its absolute value is $\sqrt{N\mathfrak m_0}$ by [F5]. [F5, step 2.1, step 3.1, algebra, choose]

4.2 If $q(b)$ is not prime to the modulus, choose an integral $u$ prime to the modulus in its ordinary class. Then $v=b/u\in K$ is integral at the modulus and is a nonunit at at least one of its primes. Choose $a_0$ prime to the modulus in the summation class. The frequency $y=a_0u/(MD)$ is primitive, and the sum in question is $\psi_\chi(a_0)\tau_{\mathfrak m_0}(\chi_f,vy)$. Use step 2.1 to choose $c\in\mathcal O_K$ prime to the modulus with $cv\in\mathcal O_K$. Substitution by the unit residue of $c$ reduces the sum to nonunit scaling by $cv$, so [F5] makes it zero. This proves both cases of the formula. [F3, F5, step 2.1, step 3.1, algebra, choose]

5.1 Since $(-1)$ is the unit ideal, [F4] gives $\chi_f(-1)=(-1)^e$. On the fiber $[q(a)]=[\mathfrak m_0\mathfrak D]$ one has $a/(MD)\in K^\times$, whence $\phi(a)^2=\phi(MD)^2$. Directly $\overline{\psi_\chi(a)}=\psi_{\bar\chi}(a)\phi(a)^2$. Conjugate the finite sum for $\tau_\chi$ and substitute $a\mapsto-a$. It follows that $\overline{\tau_\chi}=(-1)^e\phi(MD)^2\tau_{\bar\chi}$. Multiplication by $\tau_\chi$ and step 4.1 give the final product formula. If $\mathfrak m_0=\mathcal O_K$, its residue unit group is interpreted as a singleton: $\tau_\chi=\psi_\chi(D)$ when $M=1$, and all the formulas still hold. No analytic or class-field-existence theorem was used. [F4, F5, step 3.1, step 4.1, algebra] ∎ 