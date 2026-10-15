# Zaitsev 1996 conditional-density source recovery

2026-10-15. Research-only source evidence. No item, manifest, contract, hash,
validator, test, or run-state changes.

Recovered the genuine complete Russian original of A. Yu. Zaitsev,
*Estimates for the quantiles of smooth conditional distributions and the
multidimensional invariance principle*, Sibirsk. Mat. Zh. 37(4) (1996),
807–831. Its English translation is Siberian Mathematical Journal 37(4),
706–729, DOI https://doi.org/10.1007/BF02104663 .

Actual full PDF, 25 pages:
https://m.mathnet.ru/php/getFT.phtml?jrnid=smj&paperid=483&what=fullt&option_lang=eng .
The mobile article record https://m.mathnet.ru/eng/smj483 explicitly identifies
the Russian paper and links that English DOI. The `option_lang=eng` parameter
controls the site interface; the PDF itself is Russian. Main-host requests
returned 403, while the mobile-host link returned an actual application/pdf.
The Springer PDF endpoint returned HTML with access unavailable and is not the
source used.

Local files:

- `/tmp/bcs62-zaitsev-1996b-full.pdf`, actual PDF, 25 pages, ABBYY-produced scan.
- `/tmp/bcs62-zaitsev-1996b-full.txt`, extracted Russian OCR with imperfect math.
- `/tmp/bcs-zaitsev96-page-N.png`, rendered PDF pages N=7,15,16,17,18,19,20,21,22.

Read §§1–7 in the extracted Russian text, including the complete proofs of
Lemmas 6.1 and 7.1. Visually inspected the listed rendered pages to check
smoothness hypotheses and the conditional-density equations against the OCR.
The missing exact conditional-density proofs are present, rather than merely
restated: Lemma 6.1 occupies printed pp. 821–825 (PDF 15–19), and Lemma 7.1
occupies printed pp. 825–828 (PDF 19–22).

The crucial interfaces, translated and checked:

1. The smooth class on printed p. 813 is a genuine extra hypothesis on tilted
   Fourier tails, with two separate integral bounds, for every real tilt
   satisfying $\|h\|\tau<1$. Boundedness of the original summands alone is not
   that smoothness assumption. The proofs repeatedly change dimension and
   replace $\tau$ by $2\tau$; those inherited smoothness conditions must be
   checked at the changed parameters.
2. Lemma 6.1 assumes both the distribution and its first $d-1$ marginal belong
   to the indicated smooth classes with parameters $(\tau,4,4)$. The mean is
   zero, the final coordinate is uncorrelated with the preceding coordinates,
   and its variance $\sigma^2$ is the minimum eigenvalue of the full covariance.
   The tilt $h=(h',0)$ makes the first $d-1$ tilted means equal the conditioning
   value $x'$. With $y_d$ the tilted last-coordinate mean, the exact identity
   (6.11) is
   $$v(x_d)=p^{(d)}(x_d+y_d\mid x')=\frac{p(x+y)}{p'(x')}=\frac{\bar p(x+y)}{\bar p'(x')}.$$
   The exponential tilt factors cancel because $h_d=0$. The Gaussian local
   density estimate from Lemma 4.1 then bounds numerator and denominator;
   the determinant quotient is expressed using the final diagonal entry of
   the tilted inverse covariance. Large tails use a separate last-coordinate
   tilt, not an extrapolation of the local density formula.
3. Lemma 7.1 assumes a pair in $\mathcal R_d(\tau,0)$: **both second and third
   cumulants agree**. With
   $\Lambda=\|(D')^{-1/2}(x'_1-x'_2)\|$ and
   $\Gamma=\max_k\|(D')^{-1/2}x'_k\|$, it obtains
   $$|y_{1,d}-y_{2,d}|\le c(\tau^2\sigma^{-1}\Gamma^3+\tau\Lambda\Gamma).$$
   Its proof first compares the marginal tilt parameters using Lemma 5.1,
   controls the full tilted pair using fourth derivatives, and then compares
   the two centered numerator densities via the same Lemma 5.1. The resulting
   log ratio is controlled by a constant times
   $$\frac{\tau^2}{\sigma^2}\left[d^2+\left(\Gamma^2+\frac{\sigma\Lambda}{\tau}\right)\left(d+\frac{w^2}{\sigma^2}\right)+\frac{w^4}{\sigma^4}\right].$$
   The tail log-density derivative bound is deduced separately from Lemma 4.1
   using the tilted inverse-covariance entry. The entire proof is printed.
4. Earlier Lemmas 2.1 and 3.1 prove uniform density estimates by Fourier
   inversion and Gaussian integral bounds. Lemmas 4.1 and 5.1 supply nonuniform
   estimates by tilting. Section 1 itself quotes some auxiliary facts: Lemmas
   1.1–1.2 cite Zaitsev's 1987 convolution paper; Lemma 1.3 is a fourth-derivative
   Cauchy bound cited to Saulis–Statulevičius (1991); Lemma 1.4 compares tilted
   distributions. Thus recovery of this article does not silently certify
   that every analytic prerequisite already has a local proof.

Root subsequently assigned §§1–5 to the Fourier author and §§6–8 to the
strong-mixing author. Sent the actual source paths and the above critical
hypotheses directly to those authors. This branch makes no duplicate acceptance
or local-KMT proof-completion claim.
