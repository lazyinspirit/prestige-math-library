---
id: lem-goldston-yildirim-zeta-contour-integral
kind: lemma
title: "Goldston–Yıldırım multivariable zeta contour integral"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 2
deps:
  - lem-goldston-yildirim-one-pair-contour-operator
  - thm-riemann-zeta-classical-zero-free-region
  - thm-zeta-bounds-in-classical-zero-free-region
  - lem-riemann-zeta-truncated-sum-bound
  - thm-residue-theorem-null-homologous-cycle
  - def-complex-line-integral-over-a-rectifiable-path
  - def-complex-exponential
  - def-natural-logarithm
  - def-countable-choice
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  scraped: []
  references:
    - title: "Ben Green and Terence Tao, The primes contain arbitrarily long arithmetic progressions, Annals of Mathematics 167 (2008)"
      url: "https://annals.math.princeton.edu/wp-content/uploads/annals-v167-n2-p03.pdf"
      locator: "§§3, 9–10 and Appendix A; exact passages inspected in the complete local full-text snapshot"
    - title: "Daniel A. Goldston and Cem Y. Yıldırım, Higher correlations of divisor sums related to primes III: k-correlations"
      url: "https://arxiv.org/pdf/math/0209102"
      locator: "Theorem 1.1 and §6; independent untricked correlation calculation inspected in full relevant sections"
---
## Statement

Assume countable choice. Fix an integer $m\ge1$, $0<\sigma<1/(6m)$, and $R\ge3$. For $z=(z_1,\ldots,z_m)$ and $z'=(z'_1,\ldots,z'_m)$, let
$$D_\sigma^m=\{(z,z'):-\sigma<\operatorname{Re}z_j,\operatorname{Re}z'_j<100\text{ for }1\le j\le m\}.$$
For a holomorphic $G$ on this domain, let $\|G\|_{C^j}$ be the supremum of the absolute values of all its complex partial derivatives of total order at most $j$ on $D_\sigma^m$. Suppose these norms are finite for $0\le j\le m$ and $\|G\|_{C^0}\le \exp(C_G(\log R)^{1/3})$ for a constant $C_G$ independent of $R$. With $\Gamma_1=\{1/\log R+it:t\in\mathbb R\}$ oriented upward, define
$$I_m(G;R):=\frac1{(2\pi i)^{2m}}\int_{\Gamma_1}\cdots\int_{\Gamma_1}G(z,z')\prod_{j=1}^m\frac{\zeta(1+z_j+z'_j)}{\zeta(1+z_j)\zeta(1+z'_j)}\frac{R^{z_j+z'_j}}{z_j^2(z'_j)^2}\,dz_j\,dz'_j.$$
Here $R^z:=\exp(z\log R)$. The integral converges absolutely and, for some $\delta=\delta(m,\sigma)>0$,
$$I_m(G;R)=G(0,0)(\log R)^m+\sum_{j=1}^m O_{m,\sigma}(\|G\|_{C^j}(\log R)^{m-j})+O_{m,\sigma,C_G}(e^{-\delta\sqrt{\log R}}).$$

## Statement references

[Green and Tao, Annals 2008, §§3, 9–10](https://annals.math.princeton.edu/wp-content/uploads/annals-v167-n2-p03.pdf)

[Goldston and Yıldırım, Theorem 1.1 and §6](https://arxiv.org/pdf/math/0209102)

## Facts & Assumptions

**Given:** Countable choice and exactly the domain, norms, and $C^0$ envelope in the Statement.

[A1] [[def-countable-choice]] is the stated foundational assumption.

[F1] [[lem-goldston-yildirim-one-pair-contour-operator]] supplies the absolutely convergent one-pair operation $J_R=L E+T+E_R$, where $Ef=f(0,0)$, $|E_R(f)|\le C\|f\|_{C^0}e^{-d\sqrt L}$, and $T$ preserves bounded holomorphic external parameters. It gives $\|TF\|_{C^0}\le C\|F\|_{C^0}$ by interior Cauchy estimates, and $\|TF\|_{C^j}\le C\|F\|_{C^{j+1}}$ when these derivatives are bounded. Its proof also gives an absolute $\Gamma_1^2$ kernel integral $O_\sigma((1+L)^3)$ and justifies exchanges of these absolutely convergent parameter integrals under CC.

## Proof

1.1 Put $L=\log R$ and $M=\|G\|_{C^0}$. The absolute one-pair kernel bound in [F1] makes the full absolute integral at most $C_{m,\sigma}M(1+L)^{3m}$. Hence it exists, is independent of the order of integration, and can be grouped by pairs. No derivative bound is needed for this conclusion. We prove the stronger estimate $$I_m(G;R)=G(0,0)L^m+\sum_{j=1}^m O_{m,\sigma}(\|G\|_{C^j}L^{m-j})+O_{m,\sigma}(M e^{-d_{m,\sigma}\sqrt L})$$ for every bounded holomorphic $G$ with the specified finite derivative norms, without imposing a growth envelope in this intermediate assertion. The convention $I_0(c)=c$ starts the induction. [A1, F1, given, algebra]

2.1 Apply [F1] to the last pair with the other variables fixed on their $\Gamma_1$ contours. Let $E_mG$ be evaluation of that pair at zero and $T_mG$ its residue operator. Integrate the identity against the other $m-1$ kernels. Uniformity of its error and the absolute kernel bound give $$I_m(G;R)=L I_{m-1}(E_mG;R)+I_{m-1}(T_mG;R)+O_{m,\sigma}(M(1+L)^{3(m-1)}e^{-d\sqrt L}).$$ Both functions are bounded holomorphic on the exact remaining strip domain, with $\|E_mG\|_{C^j}\le\|G\|_{C^j}$, $\|T_mG\|_{C^0}\le C M$, and $\|T_mG\|_{C^j}\le C\|G\|_{C^{j+1}}$. The $C^0$ estimate uses the smaller disk in the consumed variable inside the original domain, not an unsupported $C^1$ growth envelope. Their available derivative orders are respectively $m$ and $m-1$, so both meet the induction hypotheses for $m-1$. Also the original $\sigma<1/(6m)$ satisfies the weaker bound for $m-1$ when $m>1$. [F1, step 1.1, given, algebra]

3.1 Apply the intermediate induction assertion to $E_mG$ and $T_mG$. The first term has leading part $G(0,0)L^m$ and errors $O(\|G\|_{C^j}L^{m-j})$ for $1\le j\le m-1$. The second leading part is $(T_mG)(0,0)L^{m-1}=O(\|G\|_{C^1}L^{m-1})$; its $j$th error is $O(\|G\|_{C^{j+1}}L^{m-1-j})$ for $1\le j\le m-1$. These are precisely of the required orders after replacing $j+1$ by the index $2,\ldots,m$. For $m=1$ the same calculation is simply the one-pair identity and $|TG|\le C\|G\|_{C^1}$. The induction remainder bounds involve only $M$ and $CM$. Multiplication by $L$ or $(1+L)^{3(m-1)}$ is absorbed into a smaller positive constant in the exponent $e^{-d\sqrt L}$, since every fixed polynomial in $L$ is $O(e^{\epsilon\sqrt L})$. This proves the stronger assertion for all $m$. [F1, step 1.1, step 2.1, algebra]

4.1 Finally $M\le e^{C_G L^{1/3}}$. For fixed $m,\sigma,C_G$, $C_G L^{1/3}\le (d_{m,\sigma}/2)\sqrt L$ for sufficiently large $L$. Thus the last error is $O_{m,\sigma,C_G}(e^{-\delta\sqrt L})$ with $\delta=d_{m,\sigma}/2>0$ independent of $C_G$; enlarging its implicit constant covers the compact remaining range $L\ge\log3$. This is the original displayed assertion with its original $C^0$ envelope and finite higher norms, and completes the proof. [step 3.1, given, algebra] ∎

