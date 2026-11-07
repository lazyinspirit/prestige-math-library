---
id: thm-grothendieck-monodromy-theorem-for-l-adic-local-representations
kind: theorem
title: "Grothendieck monodromy theorem and the Weil–Deligne construction"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 9
deps:
  - def-continuous-l-adic-local-galois-representation
  - def-local-inertia-subgroup-of-absolute-galois-group
  - def-local-wild-inertia-subgroup-of-absolute-galois-group
  - thm-tame-inertia-structure-and-frobenius-action
  - lem-continuous-l-adic-representation-admits-stable-lattice
  - def-weil-group-of-a-local-field
  - def-weil-deligne-representation-of-a-local-field
  - def-p-adic-integers-as-compatible-residue-classes
  - lem-open-or-closed-surjection-is-quotient
  - def-axiom-of-choice
  - thm-cayley-hamilton
  - thm-unique-extension-of-a-nonarchimedean-absolute-value
  - thm-choice-implies-dependent-implies-countable-choice
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Masao Oi, Introduction to the Local Langlands Correspondence, §5.4"
      url: "https://masaooi.github.io/LLC.pdf"
    - title: "Luc Illusie, Grothendieck and vanishing cycles, §2"
      url: "https://www.numdam.org/item/AFST_2021_6_30_1_83_0.pdf"
    - title: "Pierre Deligne, Les constantes des équations fonctionnelles des fonctions L, §8.2"
      url: "https://publications.ias.edu/sites/default/files/Number20.pdf"
verification: {}
---

## Statement

Assume the Axiom of Choice. Let $K$ be a nonarchimedean local field with
finite residue field of characteristic $p$, let $\ell\ne p$ be prime, and
let $\rho:G_K\to\mathrm{GL}_{\mathbb Q_\ell}(V)$ be a continuous
representation on a finite-dimensional $\mathbb Q_\ell$-vector space. Choose
a continuous surjection
$t_\ell:I_K\to\mathbb Z_\ell$ by projecting
$I_K/P_K\cong\prod_{r\ne p}\mathbb Z_r(1)$ onto its $\ell$-primary factor
and choosing an isomorphism $\mathbb Z_\ell(1)\cong\mathbb Z_\ell$. Then
there are an open subgroup $H\subseteq I_K$ and a unique nilpotent
$N\in\mathrm{End}_{\mathbb Q_\ell}(V)$ such that
$$\rho(h)=\exp(t_\ell(h)N)\qquad(h\in H).$$
For a chosen arithmetic Frobenius lift $\sigma\in W_K$, define
$r(i)=\rho(i)\exp(-t_\ell(i)N)$ for $i\in I_K$ and $r(\sigma)=\rho(\sigma)$.
These maps extend to a Weil-group representation with finite inertia image,
and $(r,V,N)$ is a Weil–Deligne representation with
$r(\sigma)Nr(\sigma)^{-1}=qN$.

## Statement references

[[def-continuous-l-adic-local-galois-representation]]

[[def-local-inertia-subgroup-of-absolute-galois-group]]

[[def-weil-deligne-representation-of-a-local-field]]

[[thm-tame-inertia-structure-and-frobenius-action]]

[Masao Oi, *Introduction to the Local Langlands Correspondence*, §5.4, printed pp. 32–34](https://masaooi.github.io/LLC.pdf)

[Luc Illusie, *Grothendieck and vanishing cycles*, §2, printed pp. 87–89](https://www.numdam.org/item/AFST_2021_6_30_1_83_0.pdf)

## Facts & Assumptions

**Given:** The Axiom of Choice, $K$, $\ell\ne p$, $V$, $\rho$, and the
chosen tame character $t_\ell$ from the Statement.

[A1] [[def-axiom-of-choice]]: AC supplies a full
$\mathbb Z_\ell$-lattice stable under a continuous representation of a
profinite group.

[F1] [[def-continuous-l-adic-local-galois-representation]]: $\rho$ is
continuous on $G_K$; its restriction to the compact profinite group $I_K$
is continuous.

[F2] [[thm-tame-inertia-structure-and-frobenius-action]]:
$I_K/P_K\cong\prod_{r\ne p}\mathbb Z_r(1)$, and $t_\ell$ is the open
quotient onto its $\ell$-primary factor. The subgroup $P_K$ is pro-$p$ by [[def-local-wild-inertia-subgroup-of-absolute-galois-group]]; inertia acts trivially on $I_K/P_K$;
arithmetic Frobenius conjugates $t_\ell$ by multiplication by $q$.

[F3] [[lem-continuous-l-adic-representation-admits-stable-lattice]]:
under AC, every continuous finite-dimensional $\mathbb Q_\ell$-representation
of a profinite group preserves a full $\mathbb Z_\ell$-lattice.

[F4] [[def-weil-group-of-a-local-field]] and
[[def-weil-deligne-representation-of-a-local-field]]: $W_K/I_K\cong\mathbb Z$
is discrete, $|\sigma|_K=q$ for arithmetic Frobenius, and a Weil–Deligne
pair has a nilpotent operator with
$r(w)Nr(w)^{-1}=|w|_KN$.

[F5] [[lem-open-or-closed-surjection-is-quotient]]: a continuous open
surjection is a quotient map.

[F6] [[def-p-adic-integers-as-compatible-residue-classes]]: since
$\mathbb Z_\ell=\varprojlim_m\mathbb Z/\ell^m\mathbb Z$, the image of
$\mathbb Z$ is dense: every basic neighborhood fixes one residue class modulo
$\ell^m$, and that class has an integer representative.

[F7] [[thm-cayley-hamilton]]: an endomorphism satisfies its characteristic polynomial.

[F8] [[thm-unique-extension-of-a-nonarchimedean-absolute-value]]: finite extensions of $\mathbb Q_\ell$ have the unique extending nonarchimedean value. [[thm-choice-implies-dependent-implies-countable-choice]] supplies CC from the stated AC.

## Proof

1.1 If $V=0$, take $N=0$ and the trivial $r$; all claims hold. Otherwise apply [F3] to the full profinite group $G_K$ and choose a full lattice stable under $G_K$. A basis of it identifies $\rho(G_K)$, and hence $\rho(I_K)$, with a subgroup of $\mathrm{GL}_n(\mathbb Z_\ell)$. For $m\ge2$ put $K_m=1+\ell^mM_n(\mathbb Z_\ell)$. Multiplication modulo $K_{m+1}$ gives $K_m/K_{m+1}\cong(M_n(\mathbb F_\ell),+)$ by $1+\ell^mA\mapsto A\bmod\ell$, since the product term $\ell^{2m}AB$ lies in $\ell^{m+1}M_n(\mathbb Z_\ell)$. Also $\bigcap_{m\ge2}K_m=\{1\}$. [A1, F1, F3, given, choose, construct]

2.1 Put $B=\ker(t_\ell)$. Its quotient by $P_K$ is $\prod_{r\ne p,\ell}\mathbb Z_r(1)$ by [F2]. In any finite continuous quotient of $B$, the image of $P_K$ is a $p$-group and the remaining quotient has order prime to $\ell$, since it factors through finitely many prime-to-$\ell$ finite quotients of this product. Thus every finite quotient of $B$ has order prime to $\ell$. The same holds for a closed subgroup $J\leq B$: the kernel of any finite continuous quotient of $J$ contains $J\cap U$ for some open normal $U$ of $B$, so the quotient is a quotient of a subgroup of the prime-to-$\ell$ group $B/U$. Apply this to $J=\rho^{-1}(K_2)\cap B$. If $\rho(J)\subseteq K_m$, its image in $K_m/K_{m+1}$ is both prime-to-$\ell$ by this argument and an $\ell$-group by step 1.1, hence trivial. Induction from $m=2$ gives $\rho(J)\subseteq\bigcap_{m\geq2}K_m=1$. [F1, F2, step 1.1, algebra]

3.1 Let $A=\rho^{-1}(K_2)\cap I_K$. The stable lattice is preserved by $G_K$, and $K_2$ is normal in $\mathrm{GL}_n(\mathbb Z_\ell)$; hence $A$ is stable under conjugation by $W_K$. If $a_1,a_2\in A$ have the same $t_\ell$-value, then $a_2^{-1}a_1\in J$, so [step 2.1] gives $\rho(a_1)=\rho(a_2)$. Thus $\rho|_A$ factors as a homomorphism $\phi:t_\ell(A)\to K_2$. The image $t_\ell(A)$ is open because $t_\ell$ is open and $A$ is open in $I_K$. The restricted map $t_\ell|_A:A\to t_\ell(A)$ is an open continuous surjection: every open subset of $A$ is open in $I_K$, so its image is open in $\mathbb Z_\ell$ and hence in $t_\ell(A)$. By [F5] it is a quotient map. Since $\rho|_A$ is continuous and constant on its fibers by [step 2.1], the induced map $\phi$ is continuous. [F1, F2, F3, F5, step 2.1, construct]

4.1 For any $a_1\in A$, [F2] gives $t_\ell(\sigma a_1\sigma^{-1})=q\,t_\ell(a_1)$, and [step 3.1] shows $\sigma a_1\sigma^{-1}\in A$. Therefore $\rho(\sigma)\rho(a_1)\rho(\sigma)^{-1} =\phi(qt_\ell(a_1))=\phi(t_\ell(a_1))^q=\rho(a_1)^q.$ The left side is similar to $\rho(a_1)$, so its finite multiset of eigenvalues is invariant under $\lambda\mapsto\lambda^q$. Every eigenvalue is nonzero and thus has a finite orbit under this map; it is a root of unity. Since $\rho(a_1)\in K_2$, every eigenvalue lies in $1+\ell^2\overline{\mathbb Z}_\ell$: scale an eigenvector so its maximum coordinate norm is $1$ and apply $\rho(a_1)-1\in\ell^2M_n(\mathbb Z_\ell)$. A root of unity in $1+\ell^2\overline{\mathbb Z}_\ell$ is $1$, as follows without an extra cyclotomic valuation formula. A prime-to-$\ell$ root reducing to $1$ must equal $1$: if $\zeta^m=1$ with $\ell\nmid m$, then $(\zeta^m-1)/(\zeta-1)$ reduces to the unit $m$. For $x\ne0$ with $a=v_\ell(x)\geq2$, the binomial expansion of $(1+x)^\ell-1$ has unique lowest-valued term $\ell x$, of value $a+1$; for $2\leq j<\ell$ its other terms have value at least $1+ja>a+1$, and the last has value $\ell a>a+1$, also when $\ell=2$. Iterating therefore cannot make a nontrivial such $1+x$ an $\ell$-power root of unity. Decomposing an arbitrary finite order into its prime-to-$\ell$ and $\ell$-power parts proves the assertion. The valuation is defined in a finite splitting extension by [F8]. Thus all eigenvalues of $\rho(a_1)$ are $1$, and [F7] gives $(\rho(a_1)-1)^n=0$. [F2, F7, F8, step 1.1, step 3.1, algebra]

5.1 Choose $a_0\in A$ with $a=t_\ell(a_0)\ne0$, possible because $t_\ell(A)$ is open in the nondiscrete group $\mathbb Z_\ell$. By step 4.1, $\rho(a_0)$ is unipotent. Its logarithm is the finite polynomial $\log(\rho(a_0))=\sum_{j=1}^{n-1}(-1)^{j+1}(\rho(a_0)-1)^j/j$. Set $N=a^{-1}\log(\rho(a_0))$. The finite logarithm–exponential identities in $\mathbb Q[X]/(X^n)$, obtained by formal differentiation and their constant terms, give $N$ nilpotent and $\phi(a)=\rho(a_0)=\exp(aN)$. [step 3.1, step 4.1, construct, algebra]

6.1 For every integer $m$, the homomorphism property gives $\phi(ma)=\phi(a)^m=\exp(maN)$. By [F6], the integers are dense in $\mathbb Z_\ell$, and both $\phi$ and the finite polynomial $x\mapsto\exp(xN)$ are continuous; hence $\phi(x)=\exp(xN)$ for every $x\in a\mathbb Z_\ell$. Define $H=A\cap t_\ell^{-1}(a\mathbb Z_\ell)$. It is open in $I_K$, and for $h\in H$, $\rho(h)=\phi(t_\ell(h))=\exp(t_\ell(h)N)$. If another nilpotent $N'$ has the required formula on an open subgroup $H'$, then $H\cap H'$ is open and its image under the open surjection $t_\ell$ is a nonzero open subgroup of $\mathbb Z_\ell$. Choose $h$ there with $t_\ell(h)\ne0$. Applying the finite logarithm to the two expressions for $\rho(h)$ gives $N=N'$. [F6, step 3.1, step 5.1, algebra]

7.1 Inertia acts trivially on the abelian quotient $I_K/P_K$, and [F2] says arithmetic Frobenius conjugates $t_\ell$ by multiplication by $q$. Thus $H$ is normal in $W_K$: $A$ is stable by step 3.1 and $a\mathbb Z_\ell$ is preserved by multiplication by the unit $q$. For $i\in I_K$ and $h\in H$, we have $\rho(ihi^{-1})=\rho(i)\exp(t_\ell(h)N)\rho(i)^{-1}$, while the formula on $H$ gives $\rho(ihi^{-1})=\exp(t_\ell(h)N)$ because $t_\ell(ihi^{-1})=t_\ell(h)$. Taking the finite logarithm for an $h$ with nonzero $t_\ell(h)$ gives $\rho(i)N\rho(i)^{-1}=N$. Likewise, $\sigma h\sigma^{-1}\in H$ and its tame character is $q t_\ell(h)$; the same argument gives $\rho(\sigma)N\rho(\sigma)^{-1}=qN$. [F2, step 3.1, step 6.1, algebra]

8.1 For $i\in I_K$ set $r(i)=\rho(i)\exp(-t_\ell(i)N)$ and set $r(\sigma)=\rho(\sigma)$. Step 7.1 shows $\rho(i)$ commutes with $N$, so $r|_{I_K}$ is a homomorphism. Step 6.1 gives $r(h)=1$ for $h\in H$, so the inertia image is finite. For every $i\in I_K$, step 7.1 gives $r(\sigma)r(i)r(\sigma)^{-1}=r(\sigma i\sigma^{-1})$. Since $W_K/I_K\cong\mathbb Z$ and $\sigma$ maps to a generator, every element has a unique form $\sigma^m i$; these assignments therefore extend to a representation $r$ of $W_K$. It is continuous because its inertia restriction has finite image and open kernel, and $W_K/I_K$ is discrete. The same identities give $r(i)Nr(i)^{-1}=N$ and $r(\sigma)Nr(\sigma)^{-1}=qN$; by [F4] these are exactly $r(w)Nr(w)^{-1}=|w|_K N$ for all $w\in W_K$. [F1, F2, F4, step 6.1, step 7.1, algebra] ∎
